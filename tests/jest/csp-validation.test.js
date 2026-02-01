/**
 * CSP (Content Security Policy) Validation Tests
 *
 * These tests verify that:
 * 1. CSP hashes are generated correctly during build
 * 2. The _headers file contains the correct CSP directives
 * 3. script-src does NOT contain 'unsafe-inline' (critical for XSS prevention)
 * 4. The SHA-256 hash matches the actual JSON-LD script content
 */

import { describe, it, expect } from '@jest/globals';
import fs from 'fs';
import crypto from 'crypto';
import path from 'path';

describe('CSP Hash Generation', () => {
  const distPath = path.join(process.cwd(), 'dist');
  const htmlPath = path.join(distPath, 'index.html');
  const headersPath = path.join(distPath, '_headers');
  const hashesPath = path.join(distPath, 'csp-hashes.json');

  it('should generate csp-hashes.json during build', () => {
    expect(fs.existsSync(hashesPath)).toBe(true);

    const hashes = JSON.parse(fs.readFileSync(hashesPath, 'utf-8'));
    expect(hashes).toHaveProperty('jsonLd');
    expect(hashes.jsonLd).toMatch(/^'sha256-[A-Za-z0-9+/]+=*'$/);
    expect(hashes).toHaveProperty('timestamp');
  });

  it('should generate correct SHA-256 hash for JSON-LD script', () => {
    const html = fs.readFileSync(htmlPath, 'utf-8');
    const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);

    expect(jsonLdMatch).toBeTruthy();
    expect(jsonLdMatch).toHaveLength(2);

    const scriptContent = jsonLdMatch[1];
    const calculatedHash = crypto.createHash('sha256').update(scriptContent).digest('base64');
    const expectedHash = `'sha256-${calculatedHash}'`;

    const hashes = JSON.parse(fs.readFileSync(hashesPath, 'utf-8'));
    expect(hashes.jsonLd).toBe(expectedHash);
  });

  it('should inject CSP hash into _headers file', () => {
    expect(fs.existsSync(headersPath)).toBe(true);

    const headers = fs.readFileSync(headersPath, 'utf-8');
    const hashes = JSON.parse(fs.readFileSync(hashesPath, 'utf-8'));

    expect(headers).toContain('Content-Security-Policy:');
    expect(headers).toContain(hashes.jsonLd);
  });

  it('should NOT contain unsafe-inline in script-src', () => {
    const headers = fs.readFileSync(headersPath, 'utf-8');
    const cspLine = headers.match(/Content-Security-Policy:.*$/m);

    expect(cspLine).toBeTruthy();

    const csp = cspLine[0];
    const scriptSrcMatch = csp.match(/script-src ([^;]+)/);

    expect(scriptSrcMatch).toBeTruthy();

    const scriptSrc = scriptSrcMatch[1];

    // Critical security check: script-src should NOT contain 'unsafe-inline'
    expect(scriptSrc).not.toContain("'unsafe-inline'");
  });

  it('should contain required CSP directives', () => {
    const headers = fs.readFileSync(headersPath, 'utf-8');
    const csp = headers.match(/Content-Security-Policy:.*$/m)[0];

    // Verify all required directives are present
    expect(csp).toContain("default-src 'self'");
    expect(csp).toContain("base-uri 'self'");
    expect(csp).toContain("frame-ancestors 'none'");
    expect(csp).toContain('script-src');
    expect(csp).toContain('style-src');
    expect(csp).toContain('img-src');
    expect(csp).toContain('connect-src');
    expect(csp).toContain('font-src');
  });

  it('should allow required external script sources', () => {
    const headers = fs.readFileSync(headersPath, 'utf-8');
    const csp = headers.match(/Content-Security-Policy:.*$/m)[0];
    const scriptSrc = csp.match(/script-src ([^;]+)/)[1];

    // Verify allowed external sources
    expect(scriptSrc).toContain("'self'");
    expect(scriptSrc).toContain('https://www.googletagmanager.com');
    expect(scriptSrc).toContain('https://cdnjs.cloudflare.com');
  });

  it('should temporarily allow unsafe-inline for styles', () => {
    // This is a temporary measure due to React inline styles
    // TODO: Remove this when inline styles are refactored to CSS modules
    const headers = fs.readFileSync(headersPath, 'utf-8');
    const csp = headers.match(/Content-Security-Policy:.*$/m)[0];
    const styleSrc = csp.match(/style-src ([^;]+)/)[1];

    expect(styleSrc).toContain("'unsafe-inline'");
    expect(styleSrc).toContain("'self'");
  });
});

describe('CSP Implementation Files', () => {
  it('should have gtag-init.js in dist/js/', () => {
    const gtagPath = path.join(process.cwd(), 'dist/js/gtag-init.js');
    expect(fs.existsSync(gtagPath)).toBe(true);

    const content = fs.readFileSync(gtagPath, 'utf-8');
    expect(content).toContain('window.dataLayer');
    expect(content).toContain('function gtag()');
  });

  it('should have vite-plugin-csp-hash.js at root', () => {
    const pluginPath = path.join(process.cwd(), 'vite-plugin-csp-hash.js');
    expect(fs.existsSync(pluginPath)).toBe(true);
  });

  it('should have generate-csp-headers.js script', () => {
    const scriptPath = path.join(process.cwd(), 'scripts/generate-csp-headers.js');
    expect(fs.existsSync(scriptPath)).toBe(true);
  });
});

#!/usr/bin/env node

/**
 * Generate CSP headers with SHA-256 hashes
 *
 * This script reads the CSP hashes generated during build (dist/csp-hashes.json)
 * and injects them into the _headers file for Cloudflare Pages deployment.
 *
 * The CSP is configured to:
 * - Remove 'unsafe-inline' from script-src (prevents XSS attacks)
 * - Use SHA-256 hashes for allowed inline scripts (JSON-LD)
 * - Keep 'unsafe-inline' for style-src temporarily (React inline styles)
 */

const fs = require('fs');
const path = require('path');

// Read generated hashes
const hashesPath = path.join(__dirname, '../dist/csp-hashes.json');
let hashes = {};

if (fs.existsSync(hashesPath)) {
  hashes = JSON.parse(fs.readFileSync(hashesPath, 'utf-8'));
  console.log('📋 Read CSP hashes:', hashes);
} else {
  console.warn('⚠️  No csp-hashes.json found - using empty hash');
  console.warn('   This may happen if the build failed or JSON-LD script was not found');
}

// Build CSP directive (NO 'unsafe-inline' in script-src!)
const scriptSrc = `script-src 'self' ${hashes.jsonLd || ''} https://www.googletagmanager.com https://cdnjs.cloudflare.com https://static.cloudflareinsights.com`;
const styleSrc = `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com`;

const cspDirective = `Content-Security-Policy: default-src 'self'; base-uri 'self'; frame-ancestors 'none'; form-action 'self' https://api.web3forms.com; img-src 'self' data: https:; ${scriptSrc}; connect-src 'self' https://*.google-analytics.com https://analytics.google.com https://api.web3forms.com https://gist.githubusercontent.com; ${styleSrc}; font-src 'self' data: https://fonts.gstatic.com https://cdnjs.cloudflare.com; upgrade-insecure-requests`;

// Read current _headers template
const headersTemplatePath = path.join(__dirname, '../public/_headers');
if (!fs.existsSync(headersTemplatePath)) {
  console.error('❌ Error: public/_headers template not found');
  process.exit(1);
}

const headersTemplate = fs.readFileSync(headersTemplatePath, 'utf-8');

// Replace CSP line
const updatedHeaders = headersTemplate.replace(/Content-Security-Policy:.*$/m, cspDirective);

// Write to dist
const distPath = path.join(__dirname, '../dist/_headers');
fs.writeFileSync(distPath, updatedHeaders);

console.log('✅ Generated _headers with CSP hashes');
console.log(`   Script hash: ${hashes.jsonLd || 'none'}`);
console.log(`   🔒 script-src: NO unsafe-inline (XSS protection enabled)`);
console.log(`   ⚠️  style-src: unsafe-inline (temporary - future refactor needed)`);
console.log(`\n📄 Output: dist/_headers`);

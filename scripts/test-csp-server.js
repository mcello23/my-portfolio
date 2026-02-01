#!/usr/bin/env node

/**
 * Test server that serves dist/ folder with CSP headers from _headers file
 * This allows local testing of CSP before deploying to Cloudflare Pages
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 8080;
const DIST_DIR = path.join(__dirname, '../dist');

// Read CSP from _headers file
const headersFile = fs.readFileSync(path.join(DIST_DIR, '_headers'), 'utf-8');
const cspMatch = headersFile.match(/Content-Security-Policy:\s*(.+)$/m);
const CSP_HEADER = cspMatch ? cspMatch[1].trim() : '';

if (!CSP_HEADER) {
  console.error('❌ Could not find CSP header in _headers file');
  process.exit(1);
}

console.log('🔒 CSP Header loaded:');
console.log('   ', CSP_HEADER.substring(0, 100) + '...\n');

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

const server = http.createServer((req, res) => {
  let pathname = url.parse(req.url).pathname;

  // Decode URL-encoded characters (e.g., spaces as %20)
  pathname = decodeURIComponent(pathname);

  // Serve index.html for root and directory paths
  if (pathname === '/' || pathname.endsWith('/')) {
    pathname = pathname + 'index.html';
  }

  const filePath = path.join(DIST_DIR, pathname);

  // Security check - prevent directory traversal
  if (!filePath.startsWith(DIST_DIR)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    res.writeHead(404);
    res.end('Not Found: ' + pathname);
    return;
  }

  // Read file
  const ext = path.extname(filePath);
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Server Error');
      return;
    }

    // Apply CSP header to all HTML responses
    if (ext === '.html') {
      res.writeHead(200, {
        'Content-Type': contentType,
        'Content-Security-Policy': CSP_HEADER,
      });
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
    }

    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`✅ CSP Test Server running at http://localhost:${PORT}`);
  console.log(`   Serving files from: ${DIST_DIR}`);
  console.log(`\n🧪 Testing Instructions:`);
  console.log(`   1. Open http://localhost:${PORT} in your browser`);
  console.log(`   2. Open DevTools > Console`);
  console.log(`   3. Check for CSP violations (should be ZERO)`);
  console.log(`   4. Accept cookies to test Google Analytics`);
  console.log(`   5. Verify all functionality works\n`);
  console.log(`   Press Ctrl+C to stop the server\n`);
});

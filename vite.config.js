import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { cspHashPlugin } from './vite-plugin-csp-hash.js';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Debug: Log environment variables during build
  console.log('🔍 Vite Build Environment Check:');
  console.log(
    '  VITE_WEB3FORMS_KEY:',
    process.env.VITE_WEB3FORMS_KEY
      ? '✓ Set (length: ' + process.env.VITE_WEB3FORMS_KEY.length + ')'
      : '✗ NOT SET'
  );
  console.log(
    '  VITE_GIST_USERNAME:',
    process.env.VITE_GIST_USERNAME ? '✓ Set (' + process.env.VITE_GIST_USERNAME + ')' : '✗ NOT SET'
  );
  console.log(
    '  VITE_GIST_ID:',
    process.env.VITE_GIST_ID
      ? '✓ Set (length: ' + process.env.VITE_GIST_ID.length + ')'
      : '✗ NOT SET'
  );
  console.log('  Mode:', mode);

  return {
    plugins: [react(), cspHashPlugin()],
    server: {
      port: 3000,
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (
                id.includes('react') ||
                id.includes('react-dom') ||
                id.includes('react-router-dom')
              ) {
                return 'react-vendor';
              }
            }
          },
        },
      },
      // Target modern browsers for smaller bundles
      target: 'es2020',

      // Chunk size warnings
      chunkSizeWarningLimit: 600,

      // Enable CSS code splitting
      cssCodeSplit: true,

      // Minification (esbuild is faster and built-in)
      minify: 'esbuild',
    },

    // Optimize dependency pre-bundling
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
    },

    // Environment variables prefixed with VITE_ are automatically exposed
    // Access via import.meta.env.VITE_* in client code
    // Reference: https://vite.dev/guide/env-and-mode.html
  };
});

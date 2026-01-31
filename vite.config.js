import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor libraries (shared, long-term cached)
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
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
});

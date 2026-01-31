import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  // Environment variables prefixed with VITE_ are automatically exposed
  // Access via import.meta.env.VITE_* in client code
  // Reference: https://vite.dev/guide/env-and-mode.html
});

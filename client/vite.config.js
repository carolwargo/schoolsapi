// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://web3.ncaa.org',  // Target API
        changeOrigin: true,               // Change origin to match target
        rewrite: (path) => path.replace(/^\/api/, ''), // Rewrite /api to match the target
        secure: false,                    // Disable SSL verification if needed
        headers: {
          'Accept': 'application/json',    // Ensure the API knows we want JSON
        },
      },
    },
  },
});

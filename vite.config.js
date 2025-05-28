import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  // Enable SPA history mode
  history: 'browser',
  server: {
    port: 3000,
    open: true,
    hmr: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  },
  css: {
    postcss: true // Use the postcss.config.js file in the project root
  }
});

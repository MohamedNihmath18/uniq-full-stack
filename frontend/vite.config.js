import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-toastify/dist/ReactToastify.css': path.resolve(__dirname, 'node_modules/react-toastify/dist/ReactToastify.css'),
    },
  },
  build: {
    rollupOptions: {
      external: ['react-router-dom', 'react-toastify'],
    },
  },
});

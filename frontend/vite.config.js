import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "react-toastify/dist/ReactToastify.css": "/node_modules/react-toastify/dist/ReactToastify.css"
    }
  },
  build: {
    rollupOptions: {
      external: ['react-router-dom', 'react-toastify'],
    },
  },
});

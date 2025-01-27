import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-router-dom'],
    },
  },
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import "react-toastify/dist/ReactToastify.css";`
      }
    }
  }
});
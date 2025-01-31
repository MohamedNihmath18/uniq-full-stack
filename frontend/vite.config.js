// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "react-toastify/dist/ReactToastify.css": "/node_modules/react-toastify/dist/ReactToastify.css"
//     }
//   },
//   build: {
//     rollupOptions: {
//       external: ['react-router-dom', 'react-toastify'],
//     },
//   },
// });

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {port: 5174}
})

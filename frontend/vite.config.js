import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Ensure the alias maps correctly to the installed package
      "react-toastify/dist/ReactToastify.css": "react-toastify/dist/ReactToastify.css",
    },
  },
  build: {
    rollupOptions: {
      external: ["react-router-dom", "react-toastify"],
    },
  },
});

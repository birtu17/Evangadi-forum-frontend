// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      
      "/api": {
        target: "https://evangadi-forum-backend-2-77uy.onrender.com", 
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), 
      },
    },
  },
});
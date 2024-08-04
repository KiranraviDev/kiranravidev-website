import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    chunkSizeWarningLimit: 1000, // New limit in kB
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"], // Example: Splitting vendor libraries into a separate chunk
        },
      },
    },
  },
});

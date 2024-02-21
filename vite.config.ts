import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/make-your-cv/",
  plugins: [react()],
  build: {
    outDir: "docs",
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/taskManger/", // Ensure this matches your repo name
  build: {
    outDir: "docs", // Output the build to the 'docs' folder
  },
});

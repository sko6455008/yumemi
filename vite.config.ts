import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ビルドの詳細設定
export default defineConfig({
  server: {
    open: true,
  },
  plugins: [react()],
});

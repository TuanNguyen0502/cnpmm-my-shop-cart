import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [
    react(),
    dts({ insertTypesEntry: true }), // Tạo file .d.ts
    cssInjectedByJsPlugin(), // Chèn CSS vào JS
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "MyShopCart",
      fileName: (format) => `my-shop-cart.${format}.js`,
    },
    rollupOptions: {
      // Đảm bảo không bundle react và react-dom vào thư viện
      // Vì dự án chính của người dùng đã có sẵn React rồi
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});

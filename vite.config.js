import vue from "@vitejs/plugin-vue";
import path from "path";
export default {
  alias: {
    '@': path.resolve(__dirname, "src"),
    comps: path.resolve(__dirname, "src/components"),
    styles: path.resolve(__dirname, "src/styles"),
    utils: path.resolve(__dirname, "src/utils"),
    apis: path.resolve(__dirname, "src/apis"),
  },
  plugins: [vue()]
}
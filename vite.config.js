/**
 * alias
 * 规则："/comps/": path.resolve(__dirname, "./src/components"),
 * 注意：别名需要用//包裹
 * 使用方式：import HelloWorld from '/comps/HelloWorld.vue'
 */

import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { viteMockServe } from 'vite-plugin-mock';
import path from 'path';

export default {
  alias: {
    "@": path.resolve(__dirname, "./src"),
    comps: path.resolve(__dirname, "./src/components"),
    styles: path.resolve(__dirname, "./src/styles"),
    plugins: path.resolve(__dirname, "./src/plugins"),
    views: path.resolve(__dirname, "./src/views"),
    layouts: path.resolve(__dirname, "./src/layouts"),
    utils: path.resolve(__dirname, "./src/utils"),
    apis: path.resolve(__dirname, "./src/apis"),
    dirs: path.resolve(__dirname, "./src/directives"),
    assets: path.resolve(__dirname, "./src/assets"),
  },
  plugins: [
    vue(),
    vueJsx(),
    viteMockServe({
      supportTs: false
    })
  ]
}
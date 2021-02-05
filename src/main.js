import { createApp } from 'vue'
import element3 from "element3";
import "element3/lib/theme-chalk/index.css";
import App from './App.vue'

// 全局样式
import "/@styles/index.scss";

createApp(App).use(element3).mount('#app')

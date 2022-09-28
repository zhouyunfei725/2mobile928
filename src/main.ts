import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant"
import 'vant/lib/index.css'
// 解决适配
import "amfe-flexible"
createApp(App).use(store).use(router).use(Vant).mount("#app");

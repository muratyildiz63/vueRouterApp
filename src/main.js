import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import axios from "axios"
import { appAxios } from './utlis/appAxios';


const app = createApp(App);
app.use(router)
app.config.globalProperties.$axios = axios /* globan olrak axios eklemek */
app.config.globalProperties.$appAxios = appAxios /* globan olrak axios url eklemek */

app.mount('#app')
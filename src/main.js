import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import { Uploader } from 'vant'
import 'element-plus/dist/index.css'
import App from './app.vue'

const app = createApp(App)

app.use(ElementPlus)
app.use(Uploader)
app.mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './Router/index.js'

const app=createApp(App)
app.use(router)
app.mount('#app')
// app.mount('#app') 정식으로 하면 이렇게 세줄로 나온다.

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { LoadImgs } from './utils'

LoadImgs.init()
console.log(import.meta.env)
createApp(App).mount('#app')

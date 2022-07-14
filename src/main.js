import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import axios from 'axios'


import router from './router'


const app = createApp(App)

app.config.globalProperties.$http =  axios
app.directive('changeColor',{
    created(el,binding,vnode) {
        el.style.color = '#' + Math.random().toString(16).slice(2,8);
    }
})
app.directive('theme',{
    created(el,binding,vnode) {
        if(binding.value == 'wide') {
            el.style.maxWidth = "1260px";
        }else if(binding.value == 'narrow') {
            el.style.maxWidth = '560px';
        }
    }
})
app.use(router)
app.mount('#app')








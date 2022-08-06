import ShowBlog from './pages/ShowBlog.vue'
import AddBlog from './pages/AddBlog.vue'
import SingleBlog from './pages/SingleBlog.vue'
import EditBlog from './pages/EditBlog.vue'
import Ask from './pages/Ask.vue'
import Home from './pages/Home.vue'
import Search from './pages/Search.vue'
import Comment from './pages/Comment.vue'
import Login from './pages/login.vue'
import Register from './pages/register.vue'
import { createRouter,createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {path:"/",redirect:"/Login.vue"},
        {path:'/AddBlog.vue',component:AddBlog},
        {path:'/ShowBlog.vue',component:ShowBlog},
        {path:"/blog/:id",component:SingleBlog},
        {path:"/edit/:id",component:EditBlog},
        {path:'/Ask.vue',component:Ask},
        {path:'/Home.vue',component:Home},
        {path:'/Comment.vue',component:Comment},
        {path:'/Search.vue',component:Search},
        {path:'/Login.vue',component:Login},
        {path:'/Register.vue',component:Register},
        

    ]
})

router.beforeEach((to,from,next) => {
    if((to.path === '/Login.vue') || (to.path === '/Register.vue')) {
        return next()
    }else {
    const tokenStr = localStorage.getItem('token1')
    if(!tokenStr) {
        alert("请登录后再使用其它功能！")
        next('/Login.vue')
    }else {
        next()
    }}
})

export default router
import ShowBlog from './components/ShowBlog.vue'
import AddBlog from './components/AddBlog.vue'
import SingleBlog from './components/SingleBlog.vue'
import EditBlog from './components/EditBlog.vue'
import { createRouter,createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {path:'/AddBlog.vue',component:AddBlog},
        {path:'/ShowBlog.vue',component:ShowBlog},
        {path:"/blog/:id",component:SingleBlog},
        {path:"/edit/:id",component:EditBlog}
        

    ]
})

export default router
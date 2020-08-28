import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Home.vue'

Vue.use(VueRouter)

    const routes = [
    {
        path: '/',
        name: 'main',
        component: Main,
        children:[{
                path: 'home',
                name: 'home',
                component: () => import ('@/components/BodySection.vue'),
            },
            {
                path: 'login',
                name: 'login',
                component: () => import ('@/components/LoginForm.vue'),
            },
            {
                path: 'register',
                name: 'register',
                component: () => import ('@/components/RegisterForm.vue'),
            }, 
        ]
    },
    {
        path: '/home/article',
        name: 'view-article',
        component: () => import ('@/components/ViewArticle.vue'),
    },
    {
        path: '/home/create-article',
        name: 'create-article',
        component: () => import ('@/components/CreateArticle.vue'),
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router

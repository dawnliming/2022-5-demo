import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from "@/views/HomePage";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/HomePage'
    },
    {
        path: '/HomePage',
        component: HomePage
    },
]

const router = new VueRouter({
    routes
});

export default router;
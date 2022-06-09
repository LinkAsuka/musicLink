import Vue from 'vue'
import Router from 'vue-router' // 引入vue-router

// 引入要跳转的vue组件
// import ChatRoom from "@/views/ChatRoom";
import Login from "@/views/Login";
import Index from "@/views/Index";
import Singer from "@/views/Singer";
import singerInfo from "@/views/singerInfo";

Vue.use(Router) // 在vue中注入Router
    // 配置路由路径
const routes = [{
            path: '/',
            name: 'Login',
            component: Login // 需要跳转的组件
        },
        {
            path: '/index',
            name: 'Index',
            component: Index // 需要跳转的组件
        },
        {
            path: '/singer',
            name: 'Singer',
            component: Singer // 需要跳转的组件
        }, {
            path: '/singerInfo',
            name: 'singerInfo',
            component: singerInfo // 需要跳转的组件
        },
        // singerInfo

        // Singer
    ]
    // 将路径注入到Router中
let router = new Router({
        // 'mode': 'history',
        routes
    })
    // 导出路由
export default router;
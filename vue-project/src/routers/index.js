import Vue from "vue"

//全局引入vue-router
import VueRouter from "vue-router"
// import router from "../../meituan/src/router";

//安装路由
Vue.use(VueRouter)

//引入路由组件
import Home from '../views/home'
import Souye from '../views/Tabbar/souye'

//新品推荐
import New from '../views/Tabbar/new'


//定义路由组件
const routes = [{
        name: "home",
        path: "/",
        component: Home,
        children: [{
                name: 'Souye',
                // 第二层路由的path是没有/
                path: 'souye',
                component: Souye,
            },
            {
                name: 'New',
                // 第二层路由的path是没有/
                path: 'new',
                component: New,
            }
        ]
    },
    // {
    // name:"detail",
    // path:"/detail/:id/:name",
    // component:Detail,
    //  // 我往detail组建里面传入了props 相当于参数
    //  props: {
    //     default: "这是详情页",
    //     sidebar: false
    // }}
]

//生成路由实例
const router = new VueRouter({
    routes
})




//推出组件
export default router
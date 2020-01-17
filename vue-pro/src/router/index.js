import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "./home"
import audio from "./audio"
import broadcast from "./broadcast"
import group from "./group"
import mine from "./mine"
import moviedetail from "./moviedetail"
Vue.use(VueRouter)
const router = new VueRouter({  
    routes:[
        {path:"/",redirect:"/home"},
        home,audio,broadcast,group,mine,moviedetail,
        {path:"/404",component:()=>import("@/views/Notfound")},
        {path:"*",redirect:"/404"}
    ]
})

export default router

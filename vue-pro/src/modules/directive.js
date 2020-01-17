import Vue from "vue"
//创建一个自定义指令 v-backtop 
//主要作用就是可以用来操作底层的dom元素   
//自定义指令的5个钩子函数 bind inserted update componentUpdated unbind
//自定义指令钩子函数的参数  el bind vnode oldVnode
Vue.directive("backtop",{
    inserted(el,bind,vnode){
        let eventClick = bind.arg || "click"
        el.addEventListener(eventClick,()=>{
            window.scrollTo(0,0)
        })
    }
})

<template>
    <div class="app-header" v-if="flag">
        <div class="left">
            <i :class="['fa','fa-'+icon]"></i>  
            <span>{{title}}</span>
        </div>
        <div class="right">
            <span v-backtop:dblclick>城市</span>
        </div>
    </div>
</template>

<script>
//引入全局的router
import router from "@/router"
export default {
    data(){
        return {
            icon:"home",
            title:"豆瓣首页",
            flag:true
        }
    },
    created(){
        //全局的前置路由守卫
        router.beforeEach((to,form,next)=>{
            switch(to.name){
                case "home":
                    this.title = "豆瓣首页"
                    this.icon = "home"
                    this.flag = true
                    break;
                case "audio":
                    this.title = "豆瓣影音"
                    this.icon = "audio-description"
                    this.flag = true
                    break;
                case "broadcast":
                    this.title = "豆瓣广播"
                    this.icon = "volume-up"
                    this.flag = true
                    break;
                case "group":
                    this.title = "豆瓣分组"
                    this.icon = "group"
                    this.flag = true
                    break;
                case "mine":
                    this.title = "豆瓣我的"
                    this.icon = "globe"
                    this.flag = true
                    break;
                default:
                    this.flag = false
                    break;
            }
            next()
        })
    }
}
</script>

<style lang="scss">
    .app-header{
        width:3.75rem;
        height:50px;
        background: rgba(0,0,0,0.8);
        color:#fff;
        display: flex;
        justify-content: space-between;
        line-height: 50px;
        padding:0 0.2rem;
        position: fixed;
        z-index:10;
        i{
            padding-right:.1rem;
        }
    }
</style>

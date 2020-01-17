<template>
    <div class="home">
        <div class="pt60">
            <Banner/>
        </div>
        <div class="navbar" :class="{fixedTop:isFixed}">
            <span
                v-for="nav in navs"
                :key="nav.id"
                :class="{active:type===nav.type}"
                @click="type=nav.type"
            >{{nav.title}}</span>
        </div>
        <div :class="{fixedBox:isFixed}">
            <MovieBox :type="type"/>
        </div>
        <BackTop/>
        <Tabbar/>
    </div>
</template>

<script>
import Tabbar from "@/components/Tabbar"
import Banner from "@/components/Banner"
import MovieBox from "./MovieBox"
import BackTop from "./BackTop"
export default {
    name:"home", //组件名称
    data(){
        return {
            type:"in_theaters",
            navs:[
                {id:1,title:"正在热映",type:"in_theaters"},
                {id:2,title:"即将上映",type:"coming_soon"},
            ],
            isFixed:false
        }
    },
    methods:{
        listenScroll(){
            let sTop = document.documentElement.scrollTop || document.body.scrollTop
            if(sTop>=300 && !this.isFixed){
                this.isFixed = true
            }else if (sTop<300 && this.isFixed){
                this.isFixed = false
            }
        }
    },
    // created(){
    //     window.addEventListener("scroll",this.listenScroll)
    // },
    // beforeDestroy(){
    //     window.removeEventListener("scroll",this.listenScroll)
    // },
    activated(){
        window.addEventListener("scroll",this.listenScroll)
        this.isFixed = false  //解决navbar在上面的bug问题
        window.scrollTo(0,this.scrollTop)
    },
    deactivated(){
        window.removeEventListener("scroll",this.listenScroll)
    },
     //组件离开之前，记录滚动条的位置
    beforeRouteLeave(to,from,next){
        this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        next()
    },
    components:{
        Tabbar,
        Banner,
        MovieBox,
        BackTop
    }
}
</script>

<style lang="scss">
    .home{
        .fixedBox{
            margin-top:70px;
        }
        padding-bottom: 70px;
        .navbar{
            height: 50px;
            line-height:50px;
            background: #fff;
            display: flex;
            justify-content: space-around;
            margin-top:10px;
            z-index:10;
            position: relative;
            &.fixedTop{
                position: fixed;
                top:0;
                left:0;
                width:100%;
                margin-top:0;
            }
            span{
                position: relative;
                transition: all 1s;
                &:after{
                    transition: all 1s;
                    content:"";
                    position: absolute;
                    width:40px;
                    height:3px;
                    background: transparent;
                    bottom:0px;
                    left:50%;
                    transform: translateX(-50%);
                }
            }
            .active{
                color:orange;
                &:after{
                    content:"";
                    background: orange;
                }
            }
        }
    }
</style>

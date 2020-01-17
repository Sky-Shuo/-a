<template>
    <div class="swiper-container banner">
        <div class="swiper-wrapper">
            <div 
                class="swiper-slide"
                v-for="banner in banners"
                :key="banner.id"
            >
                <img width="100%" :src="getImages(banner.images.small)" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from "swiper"
import utils from "@/modules/utils"
export default {
    data(){
        return {
            banners:[]
        }
    },
    methods:{
        getImages:utils.getImages
    },
    created(){   
        this.$http.get("/api/db/in_theaters",{
            params:{
                limit:6
            }
        }).then(res=>{
            this.banners = res.data.object_list
            //实例化Swiper
            //当数据改变了，虚拟dom还是在做对比，对比完成后才会生成因数据改变的真实dom结构
            //所以说必须要等到数据改变了，虚拟dom对比完后生成真实dom结构了，再去进行实例化操作。
            this.$nextTick(()=>{ //在此回调函数内部，就可以获取到因数据改变生成的真实dom结构了。
                new Swiper(".banner",{
                    loop:true,
                    pagination:{
                        el:".swiper-pagination"
                    }
                })
            })
        })
    }
}
</script>

<style lang="scss" scoped>
    .banner{
        width:100%;
        height:2.4rem;
        img{
            width:100%;
            height:2.4rem;
        }
        /*在当前组件里面添加了scoped属性后，修改第三方样式的时候需要使用scoped穿透实现  /deep/ >>> */
        /deep/ .swiper-pagination-bullet-active{
            background: #fff
        }
    }
</style>

<template>
    <router-link 
        class="movie-item"
        tag="div"
        :to="{name:'moviedetail',params:{id:movie.id}}"
    >
        <div class="img-box">
            <img width="100%" v-lazy="getImages(movie.images.small)" alt="">
        </div>
        <div class="info">
            <div class="info-left">
                <p class="title">{{movie.title}}</p>
                <p class="count">{{movie.collect_count}}</p>
            </div>
            <div class="info-right">
                <p class="director">{{movie.directors[0].name}}</p>
                <p class="rating">{{movie.rating.average}}</p>
            </div>
        </div>
    </router-link >
</template>

<script>
import utils from "@/modules/utils"
export default {
    props:{
        movie:Object
    },
    methods:{
        getImages:utils.getImages
    }
}
</script>

<style lang="scss">
    .movie-item{
        margin:.2rem .1rem;
        .img-box{
            width:100%;
            height:2.2rem;
            img{
                height:2.2rem;
            }
        }
        .info{
            display: flex;
            justify-content: space-between;
            padding:0 .2rem;
            .count,.title,.director{
                font-size:16px;
                color:#a59e93;
            }
            .rating{
                font-size:18px;
                color:#c99494;
            }
        }
    }
</style>

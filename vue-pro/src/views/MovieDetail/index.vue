<template>
    <div class="movie-detail">
        <div v-if="!movie" class="loading"></div>
        <div v-else>
            <mt-header fixed :title="movie.title">
                <router-link to="/" slot="left">
                    <mt-button icon="back">返回</mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
            <div class="img-box">
                <img :src="getImages(movie.images.small)" alt="">
            </div>
            <p class="title">{{movie.title}}</p>
            <p>演员</p>
            <div>
                <div
                    v-for="cast in movie.casts"
                    :key="cast.id"
                >
                    <img width='85' height='85' :src="getImages(cast.avatars.small)" alt="">
                    <p>{{cast.name}}</p>
                </div>
            </div>
            <div class="summary">{{movie.summary}}</div>
        </div>
        <van-cell title="选择单个日期" :value="date" @click="show = true" />
        <van-calendar v-model="show" @confirm="onConfirm" />
    </div>
</template>

<script>
import utils from "@/modules/utils"
export default {
    data(){
        return {
            movie:null,
            date: '',
            show: false
        }
    },
    methods:{
        getImages:utils.getImages,
        formatDate(date) {
            return `${date.getMonth() + 1}/${date.getDate()}`;
        },
        onConfirm(date) {
            this.show = false;
            this.date = this.formatDate(date);
        }
    },
    created(){
        const id = this.$route.params.id
        this.$http.get(`/api/db/movie_detail/${id}`).then(res=>{
            this.movie = res.data
        })
    }
}
</script>

<style>
    .mint-header{
        background: #788793;
    }
</style>

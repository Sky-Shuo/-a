<template>
    <div 
        class="movie-box"
        v-infinite-scroll="loadMore"  
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
    >
        <MovieItem
            v-for="movie in movies"
            :key="movie.id"
            :movie="movie"
        />
    </div>
</template>

<script>
import MovieItem from "./MovieItem"
import {Toast} from "mint-ui"
export default {
    props:["type"],
    watch:{
        type(val){
            this.movies = []   //清空数组
            this.page = 1     //从第一页开始
            this.hasMore = true //始终有更多数据
            this.getMovies()   //请求数据
        }
    },
    activated(){
        this.loading = false
    },
    deactivated(){
        //当组件离开的时候，无限滚动关闭
        this.loading = true
    },
    data(){
        return {
            movies:[],
            page:1,
            limit:6,
            loading:false,//false才会触发无限滚动，loadMore才会执行
            hasMore:true //代表有更多数据
        }
    },
    components:{
        MovieItem
    },
    methods:{
        loadMore(){ //初始化的时候调用一次  每次滚动的时候也会调用一次
            if(!this.hasMore){
                Toast({
                    message:"没有更多数据了..",
                    duration:1000,
                    position:"bottom"
                })
                this.loading = true  //只要无限滚动关闭，loadMore方法就不会进来
                return false
            }
            this.getMovies()  //请求数据
        },
        getMovies(){
            let instance = Toast({
                message:"正在加载..",
                iconClass: 'fa fa-cog fa-spin',
                duration:-1
            })
            this.loading = true //关闭无限滚动
            let {page,limit} = this  //对象的解构赋值   
            this.$http.get("/api/db/"+this.type,{
                params:{
                    limit,
                    page
                }
            }).then(res=>{ 
                //关闭toast
                instance.close()
                this.movies = this.movies.concat(res.data.object_list)
                this.loading = false //继续开启无限滚动 
                if(this.limit*this.page >= res.data.total){
                    this.hasMore = false  //没有更多数据了
                    return false
                }
                this.page++
            })
        }
    },
    created(){
        
    }
}
</script>

<style>
    .mint-toast-icon{
        font-size: 46px;
    }
</style>

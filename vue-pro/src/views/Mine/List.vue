<template>
    <div class="list">
        <mt-cell 
            :title="good.CommodityName"
            :label="'￥'+good.SellPrice"
            v-for="good in goods"
            :key="good. CommodityId"
        >
            <mt-button @click="addGoodInCar(good)" type="danger" size="small">购物</mt-button>
            <img slot="icon" :src="good.SmallPic" width="24" height="24">
        </mt-cell>
    </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
    data(){
        return {
            goods:[]
        }
    },
    created(){
        this.$http.get("/vue-douban/fruit.json").then(res=>{
            this.goods = res.data.CommodityList
        })
    },
    methods:{
        ...mapActions(["addGoodInCar"])
    }
}
</script>

<style lang="scss">
    .mint-cell-title{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        img{
            float:left;
        }
    }
    .mint-cell-label{
        font-size: 14px;
        color: #966262;
    }
</style>

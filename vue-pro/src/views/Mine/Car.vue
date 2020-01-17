<template>
    <div class="car">
        <mt-cell 
            :title="good.CommodityName"
            :label="'￥'+good.SellPrice+'*'+good.num"
            v-for="good in goods"
            :key="good. CommodityId"
        >
            <mt-button @click="addGoodInCar(good)" type="danger" size="small">+</mt-button>
            <mt-button @click="redeceGoodInCar(good)" type="danger" size="small">-</mt-button>
            <img slot="icon" :src="good.SmallPic" width="24" height="24">
        </mt-cell>
        <div>   
            <p>总价：{{computeTotal.price}}</p>
            <p>总数：{{computeTotal.num}}</p>
        </div>
    </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from "vuex"
export default {
    computed:{
        ...mapState({
            goods:state=>state.myCar.cars
        }),
        ...mapGetters(["computeTotal"])
    },
    methods:{
        ...mapActions(["addGoodInCar","redeceGoodInCar"])
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

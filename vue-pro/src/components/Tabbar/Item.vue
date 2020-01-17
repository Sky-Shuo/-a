<template>
    <div class="item" @click="clickItem">
        <span v-if="flag"><slot name="activeImg"></slot></span>
        <span v-else><slot name="normalImg"></slot></span>
        <span :class="{active:flag}">{{txt}}</span>
    </div>
</template>

<script>
export default {
    props:["txt","mark","selected"],
    computed:{
        flag(){
            if(this.mark === this.selected){
                return true
            }
            return false
        }
    },
    methods:{
        clickItem(){
            // this.changeSelected(this.mark)
            //之前为什么需要组件通信？因为之前的话Tabbar从来没有销毁过
            //按需引入的话tabbar每次切换的时候经历了销毁到重新创建的过程
            // this.$emit("changeSelected",this.mark)
            this.$router.replace("/"+this.mark)
        }
    },
}
</script>

<style lang="scss">
    .item{
        flex:1;
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            width:40px;
            height:40px;
        }
        .active{
            color:#42bd56;
        }
    }
</style>

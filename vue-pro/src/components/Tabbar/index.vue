<template>
    <div class="tabbar border-1px">
        <Item 
            v-for="nav in navs"
            :key="nav.id"
            :txt="nav.txt" 
            :mark="nav.mark" 
            :selected="selected" 
        >
            <img slot="activeImg" :src="nav.activeImg"/>
            <img slot="normalImg" :src="nav.normalImg"/>
        </Item>
        <!-- <Item txt="书影音" mark="audio" :selected="selected" @changeSelected="changeSelected">
            <img slot="activeImg" src="../../assets/ic_tab_audio_active.png"/>
            <img slot="normalImg" src="../../assets/ic_tab_audio_normal.png"/>
        </Item>
        <Item txt="广播" mark="broadcast" :selected="selected" @changeSelected="changeSelected">
            <img slot="activeImg" src="../../assets/ic_tab_broadcast_active.png"/>
            <img slot="normalImg" src="../../assets/ic_tab_broadcast_normal.png"/>
        </Item>
        <Item txt="分组" mark="group" :selected="selected" @changeSelected="changeSelected">
            <img slot="activeImg" src="../../assets/ic_tab_group_active.png"/>
            <img slot="normalImg" src="../../assets/ic_tab_group_normal.png"/>
        </Item>
        <Item txt="我的" mark="mine" :selected="selected" @changeSelected="changeSelected">
            <img slot="activeImg" src="../../assets/ic_tab_mine_active.png"/>
            <img slot="normalImg" src="../../assets/ic_tab_mine_normal.png"/>
        </Item> -->
    </div>
</template>

<script>
import Item from "./Item"
export default {
    data(){
        return {
            selected:this.$route.name,
            navs:[
                {id:1,txt:"首页",mark:"home",activeImg:require("../../assets/ic_tab_home_active.png"),normalImg:require("../../assets/ic_tab_home_normal.png")},
                {id:2,txt:"书影音",mark:"audio",activeImg:require("../../assets/ic_tab_audio_active.png"),normalImg:require("../../assets/ic_tab_audio_normal.png")},
                {id:3,txt:"广播",mark:"broadcast",activeImg:require("../../assets/ic_tab_broadcast_active.png"),normalImg:require("../../assets/ic_tab_broadcast_normal.png")},
                {id:4,txt:"分组",mark:"group",activeImg:require("../../assets/ic_tab_group_active.png"),normalImg:require("../../assets/ic_tab_group_normal.png")},
                {id:5,txt:"我的",mark:"mine",activeImg:require("../../assets/ic_tab_mine_active.png"),normalImg:require("../../assets/ic_tab_mine_normal.png")},
            ]
        }
    },
    methods:{
        changeSelected(selected){
            this.selected = selected
        }
    },
    components:{
        Item
    }
}
</script>

<style lang="scss">
    //引入border-1.scss文件
    @import "@/stylesheets/border-1.scss";
    .tabbar{
        // border-top:20px solid #ccc;
        @include border-top(1px, #ccc);
        position: fixed;
        left:0;
        bottom:0;
        width:100%;
        display: flex;
        background: #fff;
    }
</style>

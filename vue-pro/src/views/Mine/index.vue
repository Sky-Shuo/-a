<template>
    <div class="mine">
        <router-view></router-view>
        <mt-tabbar fixed>
            <mt-tab-item
                v-for="nav in navs"
                :key="nav.id"
            >
                <router-link active-class="active" :to="{name:nav.name}">
                    <i :class="['fa','fa-'+nav.icon]"></i>
                    {{nav.title}}
                </router-link>
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
export default {
    name:"mine",
    data(){
        return {
            navs:[
                {id:1,title:"列表",name:"list",icon:"list"},
                {id:2,title:"购物",name:"car",icon:"shopping-cart"}
            ]
        }
    }
}
</script>

<style>
    .mint-tab-item{
        padding:18px 0;
    }
    .active{
        color:orange;
    }
</style>

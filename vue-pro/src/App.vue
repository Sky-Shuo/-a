<template>
  <div id="app">
    <AppHeader/>
    <!--显示路由组件  include属性指明那个组件需要被缓存-->
    <keep-alive include="home">
      <router-view></router-view>  <!--放置动态切换的组件 -->  
    </keep-alive>
  </div>
</template>

<style lang="scss">

</style>

<script>
import AppHeader from "@/components/Header"
export default {
  components:{
    AppHeader
  },
  created(){
    this.$router.push("/")
    this.$store.dispatch("initCar")
  }
}
</script>

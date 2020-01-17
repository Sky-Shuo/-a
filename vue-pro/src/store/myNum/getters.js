export default {
    //跟vuex的state建立好关联，类似于计算属性一样的概念
    //当state里面的num发生变化了，getDoubleNum会动态计算 ，始终是state.num的2倍关系
    getDoubleNum(state){
        return state.num*2
    }
}
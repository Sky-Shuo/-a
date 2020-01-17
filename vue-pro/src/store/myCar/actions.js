export default {
    initCar({commit}){
        let cars = getCar()
        commit("changeCars",cars)  //更改vuex里面的cars
    },
    addGoodInCar({commit},good){ //cars=[]  cars=[{,num:1},{}]
       setTimeout(()=>{
            //从后端拿到购物车
            let cars = getCar()
            //需要判断后端给我的cars里面是否包含good这个商品
            let isHas = cars.some(item=>{
                if(item.CommodityId === good.CommodityId){ //代表外面传来的这个商品在购物车里面存着
                    item.num++
                    return true
                }
            })
            if(!isHas){  //代表传递来的商品对象在cars里面不存在
                good.num = 1
                cars.push(good)
            }
            //将本地存储里面的cars设置一下
            localStorage.cars = JSON.stringify(cars)
            //同步vuex里面的cars
            commit("changeCars",cars)
       },2000)
    },
    redeceGoodInCar({commit},good){
        let cars = getCar()
        cars = cars.filter(item=>{
            if(item.CommodityId === good.CommodityId){
                item.num--
                if(item.num<=0) return false //代表商品从购物车清除了
            }
            return true    //return true代表商品在购物车里面存在
        })
        localStorage.cars = JSON.stringify(cars)
        commit("changeCars",cars)
    }
}


//通过localStorage模拟一下后端
function getCar(){
    return JSON.parse(localStorage.cars?localStorage.cars:'[]')
}
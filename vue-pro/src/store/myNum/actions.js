export default {
    getNumFromBackend({commit}){ //let commit = ctx.commit;
        setTimeout(()=>{
            //获取随机数
            let random =parseInt(Math.random()*100)
            commit("changeNum",random) 
        },2000)
    }
}
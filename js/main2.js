console.log("main2加载成功");

require.config({
    paths:{
        "jquery":"jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "fangdajing":"fangdajing"
    },
    shim:{
            "jquery-cookie": ["jquery"],
            //抛物线不支持AMD规范
            "parabola": {
                exports: "_"
            }
        }
})

require(["fangdajing"],function(fangdajing){
    fangdajing.fangdajing()
})
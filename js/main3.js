console.log("main3加载成功");
/*
    通过require引入模块
    第一个参数是引入模块的名字--[传的是数组]
     第二个参数是回调函数
*/
// require(["js/xxx"],function(add){
//     alert(add.addOut(10,20));
//     add.hello();
// })
require.config({
    paths:{
        "jquery":"jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "list":"list",
    },
    shim:{
            "jquery-cookie": ["jquery"],
            //抛物线不支持AMD规范
            "parabola": {
                exports: "_"
            }
        }
})


require(['list'],function(list222){
    list222.list();
    list222.change();
})
console.log("加载成功");
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
        "header":"header",
        "topxxk":"topxxk",
        "navXXK":"navXXK",
        // "banner":"banner"
        "banner2":"banner2",
        "showBox1":"showBox1",
        "showBox2":"showBox2"
    },
    shim:{
            "jquery-cookie": ["jquery"],
            //抛物线不支持AMD规范
            "parabola": {
                exports: "_"
            }
        }
})

require(["header","topxxk","navXXK",/*"banner"*/"banner2","showBox1","showBox2"],function(header,topxxk,navXXK,/*banner*/banner2,showBox1,showBox2){
   header.header();
   topxxk.topxxk();
   navXXK.navXXK();
//    banner.banner();
    banner2.banner2();
    showBox1.showBox1();
    showBox2.showBox2();
})
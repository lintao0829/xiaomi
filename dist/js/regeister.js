define(["jquery"],function($){
    function regeister(){
        var aInputs = $(".box input")
        // $.ajax({
        //     method: "post",
        //     url: "register.php",
        //     data: {
        //         tel: aInputs[2].value,
        //         addTime: (new Date()).getTime()
        //     },
        //     success: function(result){
        //         // console.log(result);
        //         var obj = JSON.parse(result);
        //         if(obj.code){
                    
        //             alert("手机号码不正确")
        //         }else{
        //             alert("注册成功")
        //             setTimeout(function(){
        //                 location.assign("index.html");
        //             }, 2000);
        //         }
        //     },
        //     error: function(msg){
        //         alert(msg);
        //     }
        // })

    }
    return{
        regeister:regeister
    }
})
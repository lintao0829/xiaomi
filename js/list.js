define(["jquery","jquery-cookie"],function($){
    function list(){
    // alert(1)
        $.ajax({
            url:"../data/list.json",
            success:function(arr){
                // alert(arr)
               var obj = arr[0];
               var oDiv1 = $(`<div class="showBoxtop1">
                                <span>${obj.title}</span>
                            </div>`)
                oDiv1.appendTo(".showBox1");
                var arr1 = obj.child;
                var oDivCon = $(`<div class="showBoxCon"></div>`)
                oDivCon.appendTo(".showBox1");
                for(var i = 0; i < arr1.length; i++){
                    var obj2 = arr1[i];
                    // console.log(obj2)
                    var oDiv2 =  $(`<div id="${obj2.id}">
                    <a href="http://localhost:6789/fangdajing.html"><img src="${obj2.img}" alt=""></a>
                            <span>${obj2.span}</span>
                            <i>${obj2.i}</i>
                            <em id="${obj2.id}">${obj2.em}</em>
                            <button id=${obj2.id}>立即购买</button>
                        </div>`)

                    oDiv2.appendTo(oDivCon);
                }
                oDivCon.appendTo(".showBox1");

            },
            error:function(msg){
                alert(msg);
            }
        })

        $.ajax({
            url:"../data/list.json",
            success:function(arr){
                // alert(arr)
                var obj2 = arr[1];
                var oDiv2 = $(`<div class="showBoxtop2">
                                <span>${obj2.title}</span>
                            </div>`)
                oDiv2.appendTo(".showBox2");
                var arr1 = obj2.child;
                var oDivCon2 = $(`<div class="showBoxCon"></div>`)
                oDivCon2.appendTo(".showBox2");
                for(var i = 0; i < arr1.length; i++){
                    var obj3 = arr1[i];
                    var oDiv3 =  $(`<div id="${obj3.id}">
                                        <img src="${obj3.img}" alt="">
                                        <span>${obj3.span}</span>
                                        <i>${obj3.i}</i>
                                        <em id="${obj3.id}">${obj3.em}</em>
                                        <button id="${obj3.id}">立即购买</button>
                                    </div>`)
                    oDiv3.appendTo(oDivCon2);
                }
                oDivCon2.appendTo(".showBox2");
            },
            error:function(msg){
                alert(msg);
            }
        })

    }

    function change(){
        $(".showBox1").on("mouseenter",".showBoxCon div",function(){
            // alert(this.id);
            $(this).children("img").stop(true,true).animate({
                width:610,
                height:367,
                marginLeft:-5
            })
        })
        $(".showBox1").on("mouseleave",".showBoxCon div",function(){
            // alert(this.id);
            $(this).children("img").stop(true,true).animate({
                width:600,
                height:357,
                marginLeft:0
            })
        })
        $(".showBox2").on("mouseenter",".showBoxCon div",function(){
            // alert(this.id);
            $(this).children("img").stop().animate({
                width:610,
                height:367,
                marginLeft:-5
            })
        })
        $(".showBox2").on("mouseleave",".showBoxCon div",function(){
            // alert(this.id);
            $(this).children("img").stop().animate({
                width:600,
                height:357,
                marginLeft:0
            })
        })

    }

    //点击加入购物车，将商品数据存入cookie中
    $(".showBox1").on("click",".showBoxCon div button",function(){
       
        var id = this.id;
        //  alert(id);
        //判断是否是第一次添加商品
        var first = $.cookie("goods") == null ? true : false ;
        if(first){
            $.cookie("goods",`[{"id":${id},"num":1}]`,{
                expires:7
            })
        }else{
            //进一步判断之前是否添加过
            var same = false; //假设之前没有添加过

            var cookieStr = $.cookie("goods");
            var cookieArr = JSON.parse(cookieStr);
            for(var i = 0; i < cookieArr.length; i++){
                if(cookieArr[i].id == id){
                    same = true;
                    cookieArr[i].num++;
                    break;
                }
            }

            if(!same){
                var obj = {id:id,num:1};
                cookieArr.push(obj);
            }
            $.cookie("goods",JSON.stringify(cookieArr),{
                expires:7
            })
        }
        //刷新页面
        // window.location.reload();
    })




    return {
        list:list,
        change:change
    }
})
define(["jquery","jquery-cookie"],function($){
    
        //刷新页面
        // window.location.reload();
    function jiesuan(){
        // alert(1)
        sc_num();
        sc_msg();

        //给全选框添加点击事件
        $(".showBox .showBoxTop ").on("click","span:eq(0)",function(){
            // console.log($(this));
            $(this).css("color","orangered");
            $(".btnx").css("backgroundColor","orangered")
            $(this).parents(".showBoxTop").siblings(".showBoxCon").find("li").find("span:eq(0)").attr("class","active");
            
            //计算合计
            var sum = 0;
            $(".showBoxCon ul li").each(function(index, item){
                sum += Number($(item).find("em").html());
            })
            $(".bottomL em").html(sum);
            // alert(sum)
           
            // $(".bottom .bottomL em").html();
        })

        $(".showBox .showBoxCon ul").on("click"," li .spanX",function(){
            $(this).attr("class","active");
            alert(1)
        })

        $(".bottom .btnx").click(function(){
            //计算合计
            var sum = 0;
            $(".showBoxCon ul li").each(function(index, item){
                sum += Number($(item).find("em").html());
            })
            $(".bottomL em").html(sum);
            $(this).css("backgroundColor","orangered");
        })






        //给删除添加点击事件
        $(".showBoxCon ul").on("click","li b",function(){
            // alert(111);
            var id = this.id;
            var cookieArr = JSON.parse($.cookie("goods"));
            for(var i = 0; i < cookieArr.length; i++){
                if(cookieArr[i].id == id){
                    cookieArr.splice(i,1);
                    break;
                }
            }
            //判断删除后数组是否为空
            if(!cookieArr.length){
                $.cokie("goods",null);
            }else{
                $.cookie("goods", JSON.stringify(cookieArr),{
                    expires:7
                });
            }
            // alert($.cookie("goods"));
            //删除当前节点
            $(this).closest("li").remove();
            sc_num();
            return false;
        })

        //给+-按钮添加点击事件
        $(".showBoxCon ul").on("click","li button",function(){
            var id = this.id;
            // alert(id)
            var cookieArr = JSON.parse($.cookie("goods"));
            for(var i = 0; i < cookieArr.length; i++){
                if(id == cookieArr[i].id){
                    if(this.innerHTML == '+'){
                        cookieArr[i].num++;
                        $(this).siblings("i").html(cookieArr[i].num);
                    }else{
                        if(cookieArr[i].num == 1){
                            alert("数量不能小于1");
                        }else{
                            cookieArr[i].num--;
                            $(this).siblings("i").html(cookieArr[i].num);
                        }
                    }
                    break;
                }
            }
            //重新存储到cookie中
            $.cookie("goods",JSON.stringify(cookieArr),{
                expires:7
            })
            sc_num();
            
            //给按钮添加刷新小计
            var a = $(this).siblings("i").html();
            // alert(a)
            var b = $(this).parents(".btnBox").siblings("span:eq(2)").html();
            // alert(b.substring(1))
            var c = a * b.substring(1);
            // alert(c);
            $(this).parents(".btnBox").siblings("em").html(c);
        })


    }
//计算加入购物车商品数量
	function sc_num(){
        // alert(1)
		var cookieStr = $.cookie("goods");
		if(cookieStr){
			var cookieArr = JSON.parse(cookieStr);
			var sum = 0;

			for(var i = 0; i < cookieArr.length; i++){
				sum += cookieArr[i].num;
			}

			$(".bottomL .sc_num").html(sum);
			
		}else{
            // alert(1)
			$(".bottomL .sc_num").html(0);
		}
    }
    


//加载商品信息
    function sc_msg(){
        $(".showBoxCon ul").empty();
        $.ajax({
            url:"../data/list.json",
            success:function(arr){
                // console.log(arr)
                
                //拿到全部商品数据
                var cookieStr = $.cookie("goods");
                if(cookieStr){
                    var cookieArr = JSON.parse(cookieStr);
                    var goodsArr = [];
                    //将存储在cookie中的数据拿出来 
                    for(var i = 0; i < arr.length; i++){
                        var obj = arr[i];
                        var newArr = obj.child;
                        // console.log(newArr)
                        for(var j = 0; j < newArr.length; j++){
                            // console.log(newArr[j])
                            for(var k = 0; k < cookieArr.length; k++){
                                if(newArr[j].id == cookieArr[k].id){
                                    newArr[j].num = cookieArr[k].num;
                                    goodsArr.push(newArr[j]);
                                }
                            }
                        }
                    }


                    // console.log(goodsArr)
                    // console.log(goodsArr.length)
                    // 拿到cookie中完整的商品数据后，直接在页面加载数据
                    for(var i = 0; i < goodsArr.length; i++){
                            var node = $(`<li>
                                                <span class="spanX">□</span>
                                                <img src="${goodsArr[i].img}" alt="">
                                                <span>${goodsArr[i].span}</span>
                                                <span class="spanP">${goodsArr[i].em}</span>
                                                <div class="btnBox">
                                                    <button id=${goodsArr[i].id}>-</button>
                                                    <i>${goodsArr[i].num}</i>
                                                    <button id=${goodsArr[i].id}>+</button>
                                                </div>
                                                <em>${goodsArr[i].em.substring(1) * goodsArr[i].num}</em>
                                                <b id=${goodsArr[i].id}>X</b>
                                        </li>`)    
                                        node.appendTo(".showBoxCon ul");    
                        }
                        
                }
            },
            error:function(msg){
                alert(msg);
            }
        })
    }

    return{
        jiesuan:jiesuan,
        sc_num:sc_num
    }
})
<?php 
	header('content-type:text/html;charset="utf-8"');

	//定义一个关联数组，放着统一的返回格式。
	$responseData = array("code" => 0, "message" => "");


	//取出提交过来的所有的数据
	$tel = $_POST['tel'];
	$password = $_POST['password'];

	//简单的验证
	if(!$tel){
		$responseData['code'] = 1;
		$responseData["message"] = "用户名为空";
		echo json_encode($responseData);
		exit;
	}
	if(!$password){
		$responseData['code'] = 2;
		$responseData["message"] = "密码为空";
		echo json_encode($responseData);
		exit;
	}

	/*
		对密码进行md5加密
	*/
	$str = md5(md5(md5($password)."qianfeng")."qingdao");

	//天龙八部
	$link = mysql_connect("localhost", "root", "123456");
	if(!$link){
		$responseData['code'] = 3;
		$responseData["message"] = "服务器忙，请稍后再试！";
		echo json_encode($responseData);
		exit;
	}

	mysql_set_charset("utf8");

	mysql_select_db("xiaomi");

	$sql = "SELECT * FROM user WHERE tel='{$tel}' AND password='{$str}'";

	$res = mysql_query($sql);
	//取出一行数据
	$row = mysql_fetch_assoc($res);

	if(!$row){
		$responseData['code'] = 4;
		$responseData["message"] = "用户名或密码错误";
		echo json_encode($responseData);
		exit;
	}else{
		$responseData["message"] = "登陆成功";
		echo json_encode($responseData);
	}

	mysql_close($link);

 ?>
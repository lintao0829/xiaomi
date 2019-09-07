<?php 
	header('content-type:text/html;charset="utf-8"');

	//定义一个关联数组，放着统一的返回格式。
	$responseData = array("code" => 0, "message" => "");

	// var_dump($_POST);
	$tel = $_POST['tel'];
	// $password = $_POST["password"];
	// $repassword = $_POST["repassword"];
	$addTime = $_POST["addTime"];

	

	/*
		我们要做一个简单的数据验证，验证完毕以后要将验证的结果反馈给前台。
		统一将反馈返回的格式，给他规定好。
	*/
	if(!$tel){
		$responseData["code"] = 1;
		$responseData["message"] = "用户名不能为空";
		echo json_encode($responseData);
		exit;
	}
	
	/*
		对密码进行md5加密
	*/
	$str = md5(md5(md5($password)."qianfeng")."qingdao");

	/*
		在数据库中判断我们之前是否添加过该用户名
	*/
	//天龙八部
	$link = mysql_connect("localhost", "root", "123456");
	if(!$link){
		$responseData["code"] = 4;
		$responseData["message"] = "服务器忙，请稍后重试！";
		echo json_encode($responseData);
		exit;
	}
	mysql_set_charset("utf8");

	mysql_select_db("xiaomi");

	//从数据库中查找该用户是否存在
	$sql = "SELECT * FROM user WHERE username='{$username}'";

	$res = mysql_query($sql);

	//取出一行数据
	$row = mysql_fetch_assoc($res);
	if($row){
		$responseData["code"] = 5;
		$responseData["message"] = "用户名已经存在";
		echo json_encode($responseData);
		exit;
	}

	//可以注册
	$sql2 = "INSERT INTO users(tel,addTime) VALUES('{$tel}',{$addTime})";

	$res2 = mysql_query($sql2);

	if(!$res2){
		$responseData["code"] = 6;
		$responseData["message"] = "注册失败";
		echo json_encode($responseData);
		exit;
	}else{
		$responseData["message"] = "注册成功";
		echo json_encode($responseData);
	}

	mysql_close($link);


 ?>
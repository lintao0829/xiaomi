// 编写gulp的任务
// CommonJS 规范
const gulp = require("gulp");
gulp.task("copy-html", function(){
	return gulp.src("*.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
})

//拷贝所有的图片
gulp.task("images", function(){
	return gulp.src(["*.{jpg,png}", "images/*.{jpg,png}"]) 
	//("images/**/* ")
	.pipe(gulp.dest("dist/images"))
	.pipe(connect.reload());
})

//拷贝.js文件 用了jquery禁止压缩
gulp.task("scripts", function(){
	return gulp.src(["js/*.js", "!gulpfile.js"])
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})

// 数据
gulp.task("data", function(){
	return gulp.src(["data/*.{json,php}", "!package.json"])
	.pipe(gulp.dest("dist/data"))
	.pipe(connect.reload());  
})



//编译scss文件  gulp-sass gulp-minify-css gulp-rename
const sass = require("gulp-sass");
const minifyCSS = require("gulp-minify-css");
const rename = require("gulp-rename");
gulp.task("sass", function(){
	return gulp.src("css/index.scss")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("index.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("sass2", function(){
	return gulp.src("css/fangdajing.scss")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("fangdajing.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("sass3",function(){
	return gulp.src("css/list.scss")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("list.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("sass4",function(){
	return gulp.src("css/jiesuan.scss")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("jiesuan.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("sass5",function(){
	return gulp.src("css/login.scss")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("login.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("sass6",function(){
	return gulp.src("css/regeister.scss")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("regeister.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})


//上述所有任务都是用来处理静态资源
gulp.task("build", ["copy-html", "images", "scripts", "data","sass","sass2","sass3","sass4","sass5","sass6"], function(){
	console.log("项目建立成功");
})

//监听
gulp.task("watch", function(){
	gulp.watch("*.html", ["copy-html"]);
	gulp.watch(["*.{jpg,png}", "images/*.jpg,png"], ['images']);
	gulp.watch(["js/*.js", "!gulpfile.js"], ["scripts"]);
	gulp.watch(["data/*.json", "!package.json"], ["data"]);
	gulp.watch("css/index.scss", ['sass']);
	gulp.watch("css/fangdajing.scss",['sass2']);
	gulp.watch("css/list.scss",['sass3']);
	gulp.watch("css/jiesuan.scss",['sass4']);
	gulp.watch(["css/login.scss"],['sass5']);
	gulp.watch(["css/regeister.scss"],['sass6']);
})



const connect = require("gulp-connect");
gulp.task("server", function(){
	connect.server({
		root: "dist", //根目录
		port: 6789,
		livereload: true
	})
})


//同时启动watch和server
gulp.task("default", ["watch", "server"]);




















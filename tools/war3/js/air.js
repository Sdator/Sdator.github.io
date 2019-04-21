window.onload = Strat


//生成一个元素 并插入到body中
function 添加DIV(ID, 类名 = "mybox") 
{
	
	const 元素 = document.createElement("DIV")				//创建节点元素LI
	元素.classList.add(类名) ;								 //添加元素属性class名字
	元素.id = ID											//改变ID
	document.body.appendChild(元素) 						//把节点加入 body元素中
	return 元素 ;

}


function Strat() {


	//测试用
	//run() ;

	//插入div
	const [旋转框A, 旋转框B, 渐变层] = [添加DIV("AirKK"), 添加DIV("AirKKK"), 添加DIV("AirJB")]

	//返回所有样式数组实例
	const 样式表 = document.styleSheets ;

	//==========判断是否存在样式表=================
	if (样式表.length == 0) {
		//console.log(getComputedStyle(asd))				//获取元素的全局样式 只读
		console.log("此页面没有附带样式")
	}
	else 
	{
		//添加自定义样式
		const 样式 = [
			样式处理(旋转方框_C2,  取前缀("animation"), 旋转框A.id),
			样式处理(旋转方框_C3,  取前缀("animation"), 旋转框A.id),
			样式处理(旋转方框B_C2, 取前缀("animation"), 旋转框B.id),
			样式处理(旋转方框B_C3, 取前缀("animation"), 旋转框B.id),
			样式处理(背景渐变_C2,  取前缀("animation"), 'body'),
			样式处理(背景渐变_C3,  取前缀("animation"), 'body')
		] ;

		//获取第一个样式表 插入样式
		for (const i of 样式) {
			样式表[0].insertRule(i, 0);
		}
	}

}


//要添加的属性，元素ID    处理样式文本
function 样式处理(str, name = "animation", id) {

	//自制的js样式 实现  获取注释部分的字符串
	const vv   = str.toString().match(/.+/g).slice(1, -1).join("")			//匹配所有过滤注释合并数组
	const 后缀 = vv.replace(/(\$ID\$)/g, function () {						//正则二次处理
			return id														//返回替换匹配部分
		}).replace(/(\$NAME\$)/g, function () {
			return name														//前缀替换 兼容浏览器
		})
	return 后缀
}


//兼容全浏览器css样式 解决方案  返回兼容前缀
//const target = target || 	document.documentElement.style  //如果参数target为空则取style对象
function 取前缀(name = "animation", target = document.documentElement.style) {
	const prefixes = ['', '-ms-', '-moz-', '-webkit-', '-khtml-', '-o-']

	//遍历文本数组检测浏览器是否支持 指定的属性
	for (const i of prefixes) 
	{
		let tmp = (i + name)	//组合属性检测用
		if (tmp in target) {
			return i			//返回支持浏览器属性的前缀 前缀 前缀 别搞错了
		}
		
	}
	//不存在则 提交的属性
	return name
}





//=========================================================//
//=========================================================//
//=========================================================//
//========================样式块===========================//
//=========================================================//
//=========================================================//



//JS添加样式模板
function 旋转方框_C2() {/*

	#$ID$ {
		z-index: -999;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		border: solid 1px #7387ab;
		width: 800px;
		height: 800px;
		margin: auto;
		$NAME$animation: Myspin 60s linear infinite;
	}
	
*/}

function 旋转方框_C3() {/*

	@$NAME$keyframes Myspin {
		  0% {transform: rotate(0deg);}
		100% {transform: rotate(360deg);}
	}
	
*/}



//================================


function 旋转方框B_C2() {/*

	#$ID$ {
		z-index: -999;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		border: solid 1px #7387ab;
		width: 400px;
		height: 400px;
		margin: auto;
		$NAME$animation: MyspinA 60s linear infinite;
	}
	
*/}


function 旋转方框B_C3() {/*

	@$NAME$keyframes MyspinA {
		  0% {transform: rotate(360deg);}
		100% {transform: rotate(0deg);}
	}
	
*/}



//======================================



function 背景渐变_C2() {/*

 $ID$ {
		background:red;
		width: 100%;
		height: 100%;
		$NAME$animation: MyBjjb 10s infinite alternate ease-in-out;

	}

*/}


function 背景渐变_C3() {/*

 @$NAME$keyframes MyBjjb
	{
		0% {background:#000000;}
		25% {background:#ff0000;}
		50% {background:#00ff00;}
		75% {background:#0000ff;}
		100% {background:#ffffff;}
	}
	
*/}


//-----------------测试
//-----------------测试
//-----------------测试
/*
var Tween = {
	Quad: {
		easeOut(t, b, c, d) {
			return -c * (t /= d) * (t - 2) + b;
		}
	}
}



function run() {

	const 元素 = 添加DIV("abcd")
	元素.style.width = "200px"
	元素.style.height = "200px"
	元素.style.backgroundColor = "#FFff00";
	元素.style.position = "absolute"


	元素.onmousedown = function (e) {
		let b = 50, c = 100, d = 100, t = 0
		e.style.left = parseFloat(e.style.left) + Math.ceil(Tween.Quad.easeOut(t, b, c, d)) + "px";
		console.log(Math.ceil(Tween.Quad.easeOut(t, b, c, d)))
		if (t < d) 
		{
			t++
			setTimeout(air, 10)
		}
	}


}

*/




export default class ajax extends XMLHttpRequest
{
	  
	//构造函数
	constructor(url)
	{
		super();			//如果有继承其他类 必须先调用
		this.open("GET", url, true);
		this.send();
		this.onreadystatechange = () =>
		{
			if (this.readyState==4 && this.status==200)
			{
				//console.log(this.responseText) ;
				//document.getElementById("echo").innerHTML = this.responseText;
			}
		}
	}

}



/*

Object.assign(ajax.prototype,{
	dddddddddddddd(){},
	eeeeeeeeeeeee(){},
})
*/



/*
	static 获取数据(str)
	{
	
		if (!str)return;
		var ajax = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
		if (!ajax) return;

		//异步
		ajax.onreadystatechange=function()
		{
			if (ajax.readyState==4 && ajax.status==200)
			{
				document.getElementById("echo").innerHTML = ajax.responseText;
			}
		}
		ajax.open("GET","/Lib/get.php?data="+str,true);
		ajax.send();
	}
*/


//===============================
//===========自定义组件的方法
//===============================

//创建一个prototype对象
var XTreehouseProto  = Object.create(HTMLElement.prototype)



	//构造函数	元素创建后调用
	XTreehouseProto.createdCallback = function() 
	{
		// 创建 Shadow Root
		var shadow = this.createShadowRoot();

		//加入要封装的元素================================
		// 添加一个子元素 并做相关的数据交换
		var img = document.createElement('img');
		img.alt = this.getAttribute('data-name');		//获取自定义属性的值代入到源对象中
		img.src = this.getAttribute('data-img');
		//img.width = '150';			   //源属性赋值
		//img.height = '150';
		img.className = 'product-img';

		// 把元素加入 Shadow Root. 进行隐藏封装
		shadow.appendChild(img);



		// 增加点击事件

		img.addEventListener('click', function() {
			echo('测试')
			//window.location = this.getAttribute('data-url');		//跳转到指定页面
		});

		//获取属性
		//echo(this.getAttribute('data-url'))


		//加入要封装的元素================================
		// 创建 a 元素 并设置相关属性
		var link = document.createElement('a');
		link.innerText = this.getAttribute('data-name');			//元素内的内容
		link.href = this.getAttribute('data-url');				//url连接
		link.className = 'product-a';								//元素命名

		// 加入到隐藏中
		shadow.appendChild(link);
	};

	//元素附加到文档后调用
	XTreehouseProto.attachedCallback = function() {}
	//从文档中移除元素后调用
	XTreehouseProto.detachedCallback = function() {}
	//元素任一属性变更后调用  返回属性名字 原值 新值
	XTreehouseProto.attributeChangedCallback = function(attrName, oldValue, newValue) {
		echo('事件触发')
		echo(attrName+':'+oldValue+':'+newValue)
	}



	//加入对象方法
	XTreehouseProto.hello = function(){
		alert('Hello!');
	}
	//类似C#中的属性   作用保护字段 修改字段
	XTreehouseProto.test = function(value){
		return this.badges=value
	}


	//加入对象属性
	Object.defineProperty(XTreehouseProto , 'badges', {
		value: 20,				//属性的值
		writable : true			//权限 true可写  false可读
	});

	//注册一个自定义的元素	之后可以直接在html里面使用
	var XTreehouseElement = document.registerElement('air-treehouse',  {
		prototype: XTreehouseProto
	});


	//创建元素并插入body  可动态创建或手动插入html中
	//var xtreehouse = new XTreehouseElement();
	//document.body.appendChild(xtreehouse);
	//由于对象在初始化的时候就已经定义属性  所以无法在实例化后变更
	//xtreehouse.setAttribute('data-img','a.png')	//这是行不通的


	//xtreehouse.setAttribute('data-img','a.png')

	//调用组件函数
	//xtreehouse.hello()

	//变更属性






//=============================================
//===========扩展现有组件的方法==================
//==========================================

var ThumbImageProto = Object.create(HTMLImageElement.prototype);

	ThumbImageProto.createdCallback = function() {
		this.width = '100';
		this.height = '100';
		this.src = 'img/obt.jpg';
	};

	ThumbImageProto.changeImage = function() {
	};


//注册组件  扩展现有组件
var ThumbImage = document.registerElement('thumb-img', {
	prototype: ThumbImageProto,
	extends: 'img'
});



//实例化组件 即创建加入组件
//var asd=new ThumbImage()
//document.body.appendChild(asd);

//如果是扩展现有的组件可以直接读取相关属性
//asd.src="a.png"



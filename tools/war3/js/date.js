


export default class 时间 extends Date
{
	  
	//构造函数
	constructor(url)
	{
		super();			//如果有继承其他类 必须先调用
        
        const 年月日 = `${d.getFullYear().toString()}-${(d.getMonth() + 1).toString().padStart(2,0)}-${d.getDate().toString().padStart(2,0)}` ;
        const 时分秒 = `${d.getHours().toString().padStart(2,0)}:${d.getMinutes().toString().padStart(2,0)}:${d.getSeconds().toString().padStart(2,0)}` ;
        const 时差 = d.getTimezoneOffset() / 60 ;

        return {
            时: this.getHours(),
            分: this.getMinutes(),
            秒: this.getSeconds(),
        } ;
	}

}



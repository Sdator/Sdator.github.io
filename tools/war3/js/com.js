


//调试输出
function echo(string)
{
    console.log(string)
}

//模JQ获取元素ID
function $(ID){
   return document.createElement(ID)
}


function Cphp(){
    echo(this.method)
    echo('测试')
   // <?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>
    action
   // this.parentNode


}

//判断变量是否为空
function 是否为空(data){
    return (data == "" || data == undefined || data == null) ? true: false;
}


//首先要对HTMLElement进行类型检查，因为即使在支持HTMLElement
//的浏览器中，类型却是有差别的，在Chrome,Opera中HTMLElement的
//类型为function，此时就不能用它来判断了
function  test(){

    var isDOM = ( typeof HTMLElement === 'object' ) ?
        function(obj){
            return obj instanceof HTMLElement;     //判断对象是否属于指定类的实例
        } :
        function(obj){
            return obj && typeof obj === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string';
        }
}







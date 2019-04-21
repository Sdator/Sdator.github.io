const $$ = mdui.JQ;
window.onload=function(){
}
const vm = new Vue({
    el: '#app',
    data: {
        data: [],
        abcd: "",
        searchTextA: "",
        searchTextB: "",
        msg: "看什么看",
        tab: 2,
        bjColor: "",
        styleobj:{
            backgroundColor: "red",
        },
    },
    //创建完毕执行
    created() {
        // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
        // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
        // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
        // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
        // 请参考：https://lodash.com/docs#debounce
        this.debouncedGetAnswer = _.debounce(this.onIn, 800);
        // this.delegate(this.searchTextA);
    },
    //监听器
    watch: {
        //可选两个参数返回 当前值 旧值
        searchTextA(instr) {
            this.delegate(instr);
        },
        searchTextB(instr) {
            this.delegate(instr);
        },
    },
    //方法
    methods: {
        //按钮事件
        按钮特效(e) {
            const dom = e.currentTarget
            //dom.style.backgroundColor="blue"
            //$event.currentTarget.style.backgroundColor=""
            $$(dom).toggleClass('mdui-color-blue-400')
            // const msg = document.getElementById('msg')
            // let [x,y] = [e.screenX,e.screenX]
            // clientX
            // screenX
            // offsetX
            // msg.style.left = x + "px";
            // msg.style.top = y + "px";
            // console.log(x,y)
            // console.log($$('#msg').offset())

            // 等你踏入了这个领域时可能就会有这样的想法不
            // $$('#msg').addClass(`transform:translate(${e.clientX}px,${e.clientY}px)`)
        },
        //委托
        delegate(instr) {
            this.msg = "Loading...";
            this.debouncedGetAnswer(instr);
        },
        //复制到剪贴板
        copyto(s,e) {
            const val = s.整数
            const inputEle = document.createElement('input')
            document.body.appendChild(inputEle)
            inputEle.setAttribute('value', val)
            inputEle.setAttribute('readonly', 'readonly')
            inputEle.select()
            document.execCommand('copy')
            document.body.removeChild(inputEle)
            this.msg="复制成功"
            console.log(e)
           // $$('<p id="msg">复制成功</p>').prependTo("body")
            //.addClass(`transform:translate(${e.clientX}px,${e.clientY}px)`).reflow()

            
        },
        //输入处理逻辑
        onIn(instr) {
            if (instr.length != 4) {
                this.msg = "输入字符过短或过长";
                return;
            }
            //两个元素公用一个方法无法根据参数来判断字符串来自于那个元素 所以用直接访问元素相关绑定的变量
            const a = this.S2I(this.searchTextA) || this.S2I(this.searchTextB) || 0;
            const b = this.S2I(this.searchTextB) || this.S2I(this.searchTextA) || 0;
            //计算长度
            let c = b - a;
            //最多返回50条信息
            c = c < 500 ? c : 500;
            switch (c >> 31 | c & 500) {
                //防止倒序输入
                case -1: this.msg = "输入的值过大或过少"; break;
                case 500: this.msg = "查询的值过大过滤多出部分"; break;
                default: this.msg = "看什么看";
            }

            console.log(a, b, c, c & 256)

            //初始化
            this.data = [];
            //构建输出
            for (let index = 0; index <= c; index++) {
                const str = this.I2S(a + index);
                //console.log(str)
                //过滤无效字符
                if (str.indexOf('?') === -1) this.data.push({
                    序列: index + 1,
                    字符: str,
                    整数: a + index,
                })
            }
        },
        //字符转数值
        S2IEx(str) {
            let num = 0, i = 0;
            for (const s of str) {
                //超过4字节会溢出 内部转换为无符号整形
                num += (s.codePointAt(0) << i * 8)
                i++;
            }
            return num;
        },
        S2I(str) {
            let num = "";
            for (const s of str) {
                //转为十六进制 字符串
                //好处 用字符串方式处理没一个字符理论上支持无限长度
                //缺点1 短字节 如果字符出现个位数的ascii码会有bug 导致长度变短 可以用补0的方式填补
                //缺点2 长字节 碰到中文这类utf16-32长度的字符会超过预想的长度
                let tmp = s.codePointAt(0);
                //单个字符不得超过限制  判断逻辑应该写到外面
                //if ( tmp > 122 ) return 0;
                //字符串拼接
                num += tmp.toString(16);
            }
            //隐式十六进制转十进制    
            return ("0x" + num) * 1;
        },
        //数值转字符
        I2S(num) {
            const s = [];
            let b = "";
            //没必要在程序里添加判断逻辑/*
            /*
            s[0] = num & 0xff
            s[1] = (num < 0xff) ? null : num >> 8 & 0xff
            s[2] = (num < 0xffff) ? null : num >> 16 & 0xff
            s[3] = (num < 0xffffff) ? null : num >> 24 & 0xff
            */
            s[0] = num & 0xff
            s[1] = num >> 8 & 0xff
            s[2] = num >> 16 & 0xff
            s[3] = num >> 24 & 0xff
            //倒序 构建字符
            for (const a of s.reverse()) {
                const s = String.fromCharCode(a);  //转为字符
                //检测每个字符是否特殊字符
                ///w会匹配到下划线
                if (/[0-9a-zA-Z]/.test(s)) b += s;
                else b += "?";
            }
            return b;
        },
    }
})

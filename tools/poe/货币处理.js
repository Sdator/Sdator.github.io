
//由于vue包含的对象中无法读取本体的this所以采用一个全局变量指针代替
const _this = {};
//读取本地数据
// const { 全部物品, 输入内容, currency: 货币类型 } = window.localStorage
const { 全部物品, 输入内容 } = window.localStorage


const vm = new Vue({
    el: "#app",
    data: {
        //读取本地后台数据
        message: 输入内容,
        全部物品: 全部物品 && JSON.parse(全部物品),
        货币类型: new Set(),
        资源加载状态: false,
        过滤器: {
            货币类型: new Map(),
            不值钱的: ["Orb of Alteration", "Chromatic Orb", "Jeweller's Orb", "Orb of Chance", "Blessed Orb", "Scroll of Wisdom", "Portal Scroll", "Armourer's Scrap", "Blacksmith's Whetstone", "Glassblower's Bauble", "Orb of Transmutation", "Orb of Augmentation", "Eternal Orb", "Splinter of Tul", "Splinter of Esh"],
            下等货币: ["Splinter of Uul-Netol", "Silver Coin", "Perandus Coin"],
            中等价值: ["Orb of Regret", "Regal Orb", "Orb of Alchemy", "Orb of Binding", "Splinter of Xoph", "Cartographer's Chisel", "Orb of Fusing", "Orb of Scouring"],
        },
        styleObject: {
            height: "200px",
            width: "300px",
            color: 'red',
            // fontSize: '10px'
        },
        imgcss: {
            height: "30px",
            width: "30px",
        },
    },
    //初始化
    created() {
        //函数内无法读取this所以采用一个变量指针代替
        //局部代替的方法
        //合并对象 由于_this设置了静态属性不能改变指针
        Object.assign(_this, this)

        //提取所有货币类型并保存
        if (this.全部物品 && window.localStorage.length == 2) {

            //初始化赋值  
            for (const { text } of this.全部物品.currency) {
                //  console.log(++i, text)
                // _this.过滤器.货币类型.add(text)
                //_this.货币类型.add(text)
                this.货币类型.add(text)

                //_this.货币.货币图样.add(image)
            }
            console.log("初始化", this.货币类型)
            this.分析()
            return
        }


        //如果本地存在就不读取了
        //this.过滤器.货币类型 = new Set();
        $.getJSON("贸易数据.json", function (data) {
            //console.log(111, [..._this.过滤器.货币类型].join())
            //console.log(111, JSON.stringify([..._this.过滤器.货币类型]))
            //set数组转为json文本
            //保存到本地
            // window.localStorage["货币类型"] = JSON.stringify([..._this.过滤器.货币类型])
            window.localStorage["全部物品"] = JSON.stringify(data)

            //当资源读取完毕后设置状态
            _this.资源加载状态 = true
            // _this.货币 = data.currency
            //由于函数是异步的 不能在外围访问会读取到空的值
            // console.log("货币类型数量：", _this.过滤器.货币类型.size)
        })


    },
    //侦听器
    watch: {
        //当用户输入 即变量发生了变化执行以下方法
        message(uerin) {
            //保存到本地数据库中
            window.localStorage["输入内容"] = uerin
            this.分析()

        }
    },
    //计算属性
    computed: {
        outMsg() {

        }
    },
    //函数库
    methods: {
        分析() {
            //先放进set里面过一次 重复项目
            const 可叠堆货币 = new Set(this.message.split("\n"))
            //再去处空白、空行内容
            可叠堆货币.delete("")

            //生成一个副本用作过滤 由于顺序不重要所以可以用set代替数组或map 但是取值不方便
            const 过滤后 = new Set(可叠堆货币);

            //生成货币副本用作排查 泄漏的货币
            //方法一
            //const 漏网之鱼 = new Set(_this.过滤器.货币类型);
            //方法二
            //生成一个副本 用排除法来找出漏掉没有过滤到的货币
            //const 漏网之鱼 = [..._this.过滤器.货币类型];
            //方法三 set转为map对象进行处理  首先把set转为数组，再执行entries遍历器  entries 遍历器和map有非常密切的关系 相融合可轻松互相转换
            //先转为数组再枚举成键值对 成为map能识别的格式
            //如果直接把set转换为map 会导致键值都是相同的值
            // const 漏网之鱼 = new Map(this.货币类型.entries())  xxx 错误的
            //map和数组一样拥有键值对
            //const 漏网之鱼 = new Map([..._this.过滤器.货币类型].entries());
            //const 漏网之鱼 = new Map(Object.entries(this.全部物品.currency))
            //所以要先把set转为数组，再把数组转为map
            const 漏网之鱼 = new Map([...this.货币类型].entries())

            let i = 0
            const 货币 = new Set()
            let zh = ""
            let en = ""

            //需要过滤的物品作为主循环
            //次循环用作寻找数据库 关键时刻使用break退出循环减少工作量
            for (const 货币类型 of this.货币类型) {
                for (const val of 可叠堆货币) {
                    //字符串寻找 返回布尔值，表示是否找到了参数字符串
                    //在可叠堆货币里面查找是否有名字相同的货币类型
                    if (val.includes(货币类型)) {
                        //方法一 逐个排除  有后遗症 排序被打乱 键值从0开始  还是用数组来做吧
                        //漏网之鱼.delete(货币类型)
                        //方法二 利用数组 清空对应键值 进行定位
                        // 漏网之鱼[i] = ""
                        //方法三 使用map数组 完美 根据键所对应的位置进行排除 但是数组是从0开始的 要注意分辨

                        // 正则过滤
                        zh = val.match(/[\u4E00-\u9FA5]/g).join("")
                        en = val.match(/[0-9a-zA-Z ']/g).join("")
                        this.过滤器.货币类型.set(en, zh)

                        //货币.add(zh + " " + en)


                        漏网之鱼.delete(i)

                        //淘汰方法 直接输出匹配到的值 再配上一个序列进行观测 看漏了哪个没有过滤到 但是这样非常难观测
                        //console.log(++i,货币类型)

                        //计算过滤了多少货币用
                        过滤后.delete(val)

                        //找到了就不要循环了退出这轮循环减少运算 节省资源
                        break
                    }
                }
                //模拟当前键所在的位置
                ++i
            }

            console.log("可叠堆货币总数量：", 可叠堆货币.size)
            console.log("流通货币总数量：", this.货币类型.size)
            console.log(`一共过滤了:${可叠堆货币.size - 过滤后.size}个,剩余${过滤后.size}个.`)
            console.log("漏网之鱼:", 漏网之鱼, 过滤后)
            console.log("可用的:", this.过滤器.货币类型)


            //return [...货币];
        },
        异步(e) {
            console.log("异步内部111" + e)
            //返回一个异步函数
            return new Promise((fn1) => {
                if (e) {
                    console.log("异步内部222")
                    fn1(11)
                }
            })
        }
    },

})



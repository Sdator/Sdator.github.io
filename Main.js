const gitalk = new Gitalk({
    clientID: '994ab328c80b557beea5',
    clientSecret: 'e412bd01a2bae2ec14603c3053fdcbc2b14d4713',
    repo: 'book',
    owner: 'liusikair',
    admin: ['liusikair'],
    id: decodeURI(location.pathname),        // Ensure uniqueness and length less than 50
    distractionFreeMode: false    // Facebook-like distraction free mode
})
gitalk.render('gitalk-container')

window.$docsify = {
    el: '#main',
    name: '絕',
    ga: "UA-134934766-1",
    // 启用加载 _sidebar.md
    loadSidebar: true,
    // 自定义 _sidebar.md 文件
    // loadSidebar: 'sidebar.md',
    // 开启目录功能
    subMaxLevel: 4,
    // maxLevel: 6,
    // 开启封面页
    coverpage: true,
    //执行文档里的 script 标签里的脚本，只执行第一个 script 如果 Vue 存在，则自动开启。
    executeScript: true,
    //展示创库地址
    // repo: '//hxun.vip', //https://gitee.com/sdator/WEB',
    //切换页面后是否自动跳转到页面顶部
    // auto2top: true,
    //标题栏 _navbar.md
    // loadNavbar: true,
    //路由
    alias: {

        //避免不必要得路由直接指定sidebar文件路径
        '/log/game/.*/_sidebar.md': '/log/game/_sidebar.md',
        '/.*/_sidebar.md': '/_sidebar.md',
        '.(jpg|pn|gif)$': '/img/$1'
        // "/*":"/home.md",
        // '/war3/':'/log/game/war3',
        // "/War3": "/log/game/war3/地球生存者.md"
        // "/War3/(.*)": "/log/game/war3/$1",

    },
    // 按照路由切换
    nameLink: {
        "/": "/",
    },


    //设置首页默认加载文件
    homepage: '/home.md',
    //默认加载目录
    plugins: [
        function (hook, vm) {

            hook.init(function () {
                // 初始化时调用，只调用一次，没有参数。

            })

            hook.beforeEach(function (html) {
                // 每次开始解析 Markdown 内容时调用
                // ...

                return html
            })

            hook.afterEach(function (html, next) {
                // 解析成 html 后调用。beforeEach 和 afterEach 支持处理异步逻辑
                // ...
                // 异步处理完成后调用 next(html) 返回结果
                next(html)
            })

            hook.doneEach(function () {
                // 每次路由切换时数据全部加载完成后调用，没有参数。
                // ...
            })

            hook.mounted(function () {
                // 初始化完成后调用 ，只调用一次，没有参数。
            })

            hook.ready(function () {
                // 初始化并第一次加完成数据后调用，没有参数。
            })
        }
    ]
}


window.onload = () => {
    //清空标签部分内联样式 好让style样式取代
    let a = document.querySelector("section").style
    a.background = "";

    // a.backgroundColor = "#FF0000";
    // a.backgroundImage = "url(./img/asuna.jpg)"
    //<div id="gitalk-container"></div>
    // let 页面 = document.getElementsByTagName("main")[0]
    // let 评论 = document.createElement('div')
    // 评论.id = "gitalk-container"
    // 评论.style.width="300px"
    // 页面.appendChild(评论);  

    const gitalk = document.getElementById("gitalk-container")
    //呼出和关闭评论
    let d = true
    document.getElementById("gitalkon").onclick = () => {
        d = !d
        if (d) gitalk.style.animation = "git_1 1s alternate forwards"
        else gitalk.style.animation = "git_2 1s alternate forwards"
    }
}

function 播放器() {
    // 范围随机数
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //随机播放
    const mp3list = [
        "http://music.163.com/song/media/outer/url?id=29027465.mp3",
        "http://music.163.com/song/media/outer/url?id=5308001.mp3",
        "/mp3/sound1.mp3",
    ]
    const mp3 = document.getElementById("playmp3")
    // const mp3 = document.createElement('audio')
    const 播放按钮 = document.getElementById("mp3butt")
    const 播放器 = document.getElementById("mp3")

    // mp3.loop = true
    // mp3.autoplay = true
    // mp3.src = mp3list[getRandomInt(0, mp3list.length - 1)]
    // document.body.appendChild(mp3)



    //播放完毕再随机
    mp3.onended = (e) => {
        console.log("播放完毕")
        mp3.src = mp3list[getRandomInt(0, mp3list.length - 1)]
    }
    // 播放按钮.click()

    播放按钮.onclick = (e) => {

        if (mp3.paused) {
            播放器.style.animation = "git_3 1s"
            // 播放器.target.style.animation = "git_3 1s alternate forwards"
            // 播放按钮.style.animation = "git_3 1s alternate forwards"
            // e.target.style.bordercolor='transparent  transparent transparent #eba716';
            mp3.play()
        }
        else {
            mp3.pause()
            // 播放器.style.animation = "git_3 1s "
        }

    }

    //音频控制器
    document.getElementById("mp3").onclick = (e) => {
    }

}


window.onkeyup = (e) => {
    if (e.keyCode == 68) {
        //  document.getElementById("gitalk-container").className="open"
        document.getElementById("gitalk-container").style.animation = "git_1 1s alternate forwards"
    }
    if (e.keyCode == 65) {
        document.getElementById("gitalk-container").style.animation = "git_2 1s alternate forwards"
    }
    /*
        normal	    默认值。动画应该正常播放。	
        alternate	动画应该轮流反向播放。
    
        infinite	规定动画应该无限次播放。
    
        paused	    规定动画已暂停。
        running	    规定动画正在播放。
    
        none	    不改变默认行为。
        forwards	当动画完成后，保持最后一个属性值（在最后一个关键帧中定义）。
        backwards	在 animation-delay 所指定的一段时间内，在动画显示之前，应用开始属性值（在第一个关键帧中定义）。
        both	    向前和向后填充模式都被应用。
    
    */

}



const vm = new Vue({
    el: "#app",
    data: {
        json: {},
    }, created() {
        fetch('./李永乐老师视频.json')
            .then(response => response.json())
            .then(json => {
                console.log("读取完毕")
                this.json = json
            });
    }, computed: {

    },//方法
    methods: {
        打开页面(url) {
            window.open(url)

        }

    }


})
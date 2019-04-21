Vue.component('button-counter', {
    // data() {
    //     return {
    //         count: 0,
    //         text: ""
    //     }
    // },
    props: ['value'],
    template: `
        <div>
            <textarea 
            :value="value"
            @input="$emit('input', $event.target.value)"
            ></textarea>
        </div>
        `

    // <button v-on:click="$emit('enlarge-text')">过滤</button>
    //获取父节点点击事件传回的自定义属性的值 从外部传入数据到组件内部
    //$emit('enlarge-text')
})


const vm = new Vue({
    el: "#components-demo",
    data: {
        searchText: "",
        msg: "",
    },
    watch: {
        // 如果 `question` 发生改变，这个函数就会运行
        searchText(newQuestion, oldQuestion) {
            
            let str = newQuestion.match(/[▲◇▽].*/g)
            console.log(str)
            this.msg = str


            // var str = ""
            // while ((str = /▽.*/g.exec(newQuestion)) != null) {
            //     console.log(str)
            // }

        }
    },


})
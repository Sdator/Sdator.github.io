
<template>
  <div v-on:drop="drop" v-bind:value="value" class="input" draggable="true"></div>
</template>



<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  computed: {
    drop() {
      console.log(5555555555);
    }
  }
};
</script>



<style scoped>
/* 拖放组件 接收文件 */

[draggable] {
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  /* Required to make elements draggable in old WebKit */
  -khtml-user-drag: element;
  -webkit-user-drag: element;
}

.input.over {
  border: 2px dashed #000;
}

.input {
  height: 200px;
  width: 200px;
  float: left;
  border: 2px solid #666666;
  background-color: #ccc;
  margin-right: 5px;
  -webkit-border-radius: 10px;
  -ms-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 3px #000;
  -ms-box-shadow: inset 0 0 3px #000;
  box-shadow: inset 0 0 3px #000;
  text-align: center;
  cursor: move;
}

.input header {
  color: #fff;
  text-shadow: #000 0 1px;
  box-shadow: 5px;
  padding: 5px;
  background: -moz-linear-gradient(
    left center,
    rgb(0, 0, 0),
    rgb(79, 79, 79),
    rgb(21, 21, 21)
  );
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0, rgb(0, 0, 0)),
    color-stop(0.5, rgb(79, 79, 79)),
    color-stop(1, rgb(21, 21, 21))
  );
  background: -webkit-linear-gradient(
    left center,
    rgb(0, 0, 0),
    rgb(79, 79, 79),
    rgb(21, 21, 21)
  );
  background: -ms-linear-gradient(
    left center,
    rgb(0, 0, 0),
    rgb(79, 79, 79),
    rgb(21, 21, 21)
  );
  border-bottom: 1px solid #ddd;
  -webkit-border-top-left-radius: 10px;
  -moz-border-radius-topleft: 10px;
  -ms-border-radius-topleft: 10px;
  border-top-left-radius: 10px;
  -webkit-border-top-right-radius: 10px;
  -ms-border-top-right-radius: 10px;
  -moz-border-radius-topright: 10px;
  border-top-right-radius: 10px;
}
</style>
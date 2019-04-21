# []()神秘代码合集——B站篇

---

## 提取B站弹幕

* > #### []()2018/10/16 PM By：Air {docsify-ignore} 

```js
//F12 测试过几个地址暂没问题
(() => {
    const s = document.getElementById("link2").value;
    const id = /cid=(.*?)&/i.exec(s)[1];
    window.open(`http://comment.bilibili.com/${id}.xml`);
})()
```

## 获取B站视频当前时间段地址

* > #### []()2019/2/5 PM By：Air {docsify-ignore} 

```js
//可获取当前观看视频的时间戳并生成对应的代码，复制发给小伙伴打开后会自动跳转到你当前所看的时间戳
//使用方式 谷歌浏览器 F12 CV大法
{
    const [mm, dd] = $('.bilibili-player-video-time-now').text().match(/\d+/g)
    const date = (mm * 60) + (dd * 1)
    const t = location.href.indexOf("?") > 0 ? "&t=" : "?&t="
    const url = location.href + t + date
    //打开页面测试 不需要可以把他注释或删掉
    window.open(url)
    //输出到控制台
    console.log(url)
}
```


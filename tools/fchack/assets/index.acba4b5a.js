var e=Object.defineProperty,t=(t,a,l)=>(((t,a,l)=>{a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l})(t,"symbol"!=typeof a?a+"":a,l),l);import{c as a,o as l,r as n,p as o,a as u,b as s,d,e as r,t as c,w as b,f as i,v as p,g as v,h as g,u as m,i as f,j as h,F as y,k,l as w}from"./vendor.ab8ec074.js";const U={setup:e=>(e,t)=>{const o=n("ShuruEx");return l(),a(o)},__scopeId:"data-v-0053ab60"},j="\n力量\n敏捷\n智力\n生命\n魔法\n法防\n物防\n魔抗\n\n".trim().split("\n");function x(e){return Math.floor(Math.random()*e)}const D=class{constructor(){var e;return t(this,"data",[D.defaultData]),D.T=null!=(e=D.T)?e:this,D.T}get size(){return this.data.length}get list(){return this.data}add(e){e&&(e=Object.assign(D.defaultData,e));const t=Object.assign({},null!=e?e:{"属性":j[x(j.length)],"长度":1,"地址":"0x"+x(1e5).toString(16).toUpperCase(),"数值":x(500)});this.data.push(t),console.log("DB:插入数据")}del(e=this.size-1){this.data.splice(e,1),console.log("DB:删除数据")}};let _=D;t(_,"defaultData",{"属性":"力量","长度":1,"地址":"0x10","自定义值":500,"原始值":0,"备注":"test"}),new _;o("data-v-6c669947");const O={class:"inputs"},T=f(" 属性："),V=f(" 长度："),B=f(" 地址："),C=f(" 自定义值："),I=f(" 原始值："),L=f(" 提示：");u();const z={props:{blob:Object,endian:Boolean,data:{type:Object,default:{"属性":"力量","长度":1,"地址":"0x10","原始值":500,"自定义值":500,"备注":"test",addr:200}}},setup(e){const t=e,n=s(!1),o=d((()=>({color:n.value?"darkgreen":"red",backgroundColor:n.value?"aquamarine":"#000"}))),u=d((()=>t.blob?n.value?"读取成功":"地址超出范围":(n.value=!1,"还没有读入文件"))),f=r(t.data),{"长度":h,"地址":y}=c(f);return b([h,y],(([e,a])=>{if(!t.blob)return;const l=t.blob;let o=new Number(a);if(console.log(o,l.byteLength,"长度检查"),o>l.byteLength)return console.log("大于"),void(n.value=!1);n.value=!0,console.log("数据更新",n.value,l,l.byteLength);const u=new DataView(l);let s=0;switch(e){case 1:s=u.getUint8(o);break;case 2:s=u.getUint16(o);break;case 4:s=u.getUint32(o);break;default:return}t.data.原始值=s,console.log(u,22222222)})),(t,n)=>(l(),a("div",O,[T,i(v("input",{type:"text","onUpdate:modelValue":n[1]||(n[1]=t=>e.data.属性=t)},null,512),[[p,e.data.属性]]),V,i(v("input",{type:"number","onUpdate:modelValue":n[2]||(n[2]=t=>e.data.长度=t)},null,512),[[p,e.data.长度,void 0,{number:!0}]]),B,i(v("input",{type:"text","onUpdate:modelValue":n[3]||(n[3]=t=>e.data.地址=t)},null,512),[[p,e.data.地址]]),C,i(v("input",{type:"text","onUpdate:modelValue":n[4]||(n[4]=t=>e.data.自定义值=t),placeholder:"修改的值"},null,512),[[p,e.data.自定义值]]),I,v("label",null,g(e.data.原始值),1),L,v("label",{style:m(o)},g(m(u)),5),v("button",{onClick:n[5]||(n[5]=e=>t.$emit("remote"))},"❌")]))},__scopeId:"data-v-6c669947"};const F={emits:["blob"],setup(e,{emit:t}){const n=s(),o=s("把文件拖放进来"),u=s(!1),r=d((()=>({color:u.value?"darkgreen":"red",backgroundColor:u.value?"aquamarine":"#000"}))),c=(e,t)=>{n.value=null!=t?t:e.target.files[0],u.value=!0,o.value="得到文件:"+n.value.name,console.log("得到文件",n)};function i(e){let t=e.dataTransfer.files;if(!t.length)throw new Error("未找到文件");c(e,t[0]),console.log("在放置区域中释放拖放")}try{b(n,(async(e,a)=>{console.log(n.value.name,"文件发生变化"),""!=n.value.name&&(t("blob",await function(e){return new Promise((t=>{var a=new FileReader;a.onload=function(e){t(e.target.result)},a.readAsArrayBuffer(e)}))}(n.value)),console.log("二进制读取完毕：往父组件发送事件"))}))}catch(p){console.log(p,"读取文件失败")}return(e,t)=>(l(),a(y,null,[v("div",{onDragover:t[1]||(t[1]=h(((...t)=>e.dragover&&e.dragover(...t)),["prevent"])),onDrop:h(i,["prevent"]),class:"drop",style:m(r)},g(o.value),45,["onDrop"]),v("input",{class:"infile",type:"file",onChange:c},null,32)],64))},__scopeId:"data-v-8dcab204"};o("data-v-0b31349c");const S={class:"shuru"},q=v("br",null,null,-1);u();const E={name:"Shuru",components:{Tiaomu:z,InFiles:F}};const R=Object.assign(E,{setup:function(e){const t=s(new _),n=s(t.value.data);b(n.value,((e,t)=>{console.log(e,t,"监听")}));const o=s();function u(e){o.value=e}return(e,s)=>(l(),a("div",S,[v(F,{onBlob:u}),q,v("button",{class:"add",onClick:s[1]||(s[1]=e=>t.value.add())},"添加"),(l(!0),a(y,null,k(n.value,((e,n)=>(l(),a(z,{blob:o.value,key:n,data:e,onDel:e=>t.value.del(n)},null,8,["blob","data","onDel"])))),128))]))}});R.__scopeId="data-v-0b31349c";const A={name:"TabTbody"};const M=Object.assign(A,{props:{blob:Object,endian:Boolean,data:{type:Object,default:{"属性":"力量","长度":1,"地址":"0x10","原始值":500,"自定义值":500,"备注":""}}},setup:function(e){const t=e,n=s(!1),o=d((()=>({color:n.value?"darkgreen":"red",backgroundColor:n.value?"aquamarine":"#000"}))),u=d((()=>t.blob?n.value?"读取成功":"地址超出范围":(n.value=!1,"还没有读入文件"))),f=r(t.data),{"长度":h,"地址":y}=c(f);return b([h,y],(([e,a])=>{if(!t.blob)return;const l=t.blob;let o=new Number(a);if(console.log(o,l.byteLength,"长度检查"),o>l.byteLength)return console.log("大于"),void(n.value=!1);n.value=!0,console.log("数据更新",n.value,l,l.byteLength);const u=new DataView(l);let s=0;switch(e){case 1:s=u.getUint8(o);break;case 2:s=u.getUint16(o);break;case 4:s=u.getUint32(o);break;default:return}t.data.原始值=s,console.log(u,22222222)})),(t,n)=>(l(),a("tbody",null,[v("tr",null,[v("td",null,[i(v("input",{type:"text","onUpdate:modelValue":n[1]||(n[1]=t=>e.data.属性=t)},null,512),[[p,e.data.属性]])]),v("td",null,[i(v("input",{type:"number","onUpdate:modelValue":n[2]||(n[2]=t=>e.data.长度=t)},null,512),[[p,e.data.长度,void 0,{number:!0}]])]),v("td",null,[i(v("input",{class:"zhong",type:"text","onUpdate:modelValue":n[3]||(n[3]=t=>e.data.地址=t)},null,512),[[p,e.data.地址]])]),v("td",null,[i(v("input",{type:"text","onUpdate:modelValue":n[4]||(n[4]=t=>e.data.自定义值=t),placeholder:"修改的值"},null,512),[[p,e.data.自定义值]])]),v("td",null,[i(v("input",{class:"zhong",type:"text","onUpdate:modelValue":n[5]||(n[5]=t=>e.data.备注=t),placeholder:"详细描述"},null,512),[[p,e.data.备注]])]),v("td",null,[v("label",null,g(e.data.原始值),1)]),v("td",null,[v("label",{class:"msg",style:m(o)},g(m(u)),5)]),v("th",null,[v("button",{onClick:n[6]||(n[6]=e=>t.$emit("remote"))},"❌")])])]))}});M.__scopeId="data-v-6f9b7308";const N={name:"Tab",components:{TabTbody:M}};const P=Object.assign(N,{props:{blob:Object},setup:function(e){const t=r(["属性","长度","地址","自定义值","备注","原始值","提示"]),n=r([]);return b((()=>[...n]),((e,t)=>{console.log(e,t,"监听")})),(o,u)=>(l(),a(y,null,[v("button",{class:"add",onClick:u[1]||(u[1]=e=>(n.push({"属性":"力量","长度":1,"地址":"0x10","自定义值":500,"原始值":0,"备注":""}),void console.log(n,"DB")))},"添加"),v("table",null,[v("thead",null,[v("tr",null,[(l(!0),a(y,null,k(m(t),((e,t)=>(l(),a("th",{key:t},g(e),1)))),128))])]),(l(!0),a(y,null,k(m(n),((t,o)=>(l(),a(M,{blob:e.blob,key:o,data:t,onRemote:e=>{return t=o,n.splice(t,1),void console.log("DB:删除数据");var t}},null,8,["blob","data","onRemote"])))),128))])],64))}});P.__scopeId="data-v-a019a754";o("data-v-7187f7e3");const $={class:"shuru"},G=v("br",null,null,-1);u();const H={name:"ShuruEx",components:{InFiles:F,Tab:P}};const J=Object.assign(H,{setup:function(e){const t=s();function n(e){console.log("收到子组件数据",e),t.value=e}return(e,o)=>(l(),a("div",$,[v(F,{onBlob:n}),G,v(P,{blob:t.value},null,8,["blob"])]))}});J.__scopeId="data-v-7187f7e3";const K={install:function(e){e.component(R.name,R),e.component(J.name,J)}};w(U).use(K).mount("#app");

(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c17d5"],{"45ec":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticStyle:{color:"red"}},[t._v("bdd页面")]),t._l(t.list,(function(e,i){return n("div",{key:i},[n("h1",[t._v("姓名:"+t._s(e.name))]),n("span",[t._v("年龄:"+t._s(e.age))]),t._l(e.child,(function(e){return n("p",{key:e.name},[t._v(" 爱好: "+t._s(e)+" ")])}))],2)})),n("button",{on:{click:t.btn}},[t._v("点击改变")]),n("p",[t._v("父亲传过来的数据:"+t._s(t.farier))])],2)},c=[],s={data:function(){return{lis:[{name:"刘俊",age:21,child:["洗碗","睡觉","喝水"]},{name:"赵久",age:95,child:["吃饭","睡觉","喝水"]},{name:"田的",age:10,child:["吃饭","睡觉","喝水"]},{name:"王的",age:8,child:["吃饭","睡觉","喝水"]}]}},computed:{list:function(){return this.$store.state.list}},methods:{btn:function(){this.$store.commit("modification",this.lis)}}},a=s,o=n("2877"),l=Object(o["a"])(a,i,c,!1,null,"f6379de8",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0c17d5.6bf67e21.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42b01bfa"],{b146:function(t,a,i){"use strict";i.r(a);var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{attrs:{id:"songRankDetail"}},[i("mt-header",{staticClass:"nav",attrs:{fixed:""}},[i("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:t.back},slot:"left"})],1),i("div",{attrs:{id:"Pic"}},[i("div",{staticClass:"titlePic"},[i("img",{attrs:{src:this.ListDetail.coverImgUrl}})]),i("div",{staticClass:"title"},[i("ul",t._l(t.ListDetail.tracks,(function(a,n){return i("li",{key:n},[i("router-link",{attrs:{to:{path:"detail",query:{id:a.id,name:a.name}}}},[i("span",{staticClass:"item-index"},[t._v(t._s(n+1)+".")]),i("span",{staticClass:"item-name"},[t._v(t._s(a.name))]),i("div",{staticClass:"img"},[i("img",{attrs:{src:t.playicon}})])])],1)})),0)])])],1)},s=[],e=i("365c"),c={name:"songRank",data:function(){return{ListDetail:[],playicon:"../icons/play.png"}},created:function(){this._getSongRank()},methods:{_getSongRank:function(){var t=this;Object(e["q"])().then((function(a){t.ListDetail=a.data.playlist}))},back:function(){this.$router.back()}}},l=c,r=(i("d065"),i("4ac2")),o=Object(r["a"])(l,n,s,!1,null,"745d92b9",null);a["default"]=o.exports},d065:function(t,a,i){"use strict";i("dad4")},dad4:function(t,a,i){}}]);
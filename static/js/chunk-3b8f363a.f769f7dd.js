(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b8f363a"],{3983:function(t,i,a){},"527d":function(t,i,a){},5293:function(t,i,a){"use strict";a("3983")},"5ac6":function(t,i,a){"use strict";a("527d")},"662e":function(t,i,a){"use strict";a("8f47")},"7b6a":function(t,i,a){"use strict";a("c474")},"8f47":function(t,i,a){},9549:function(t,i,a){"use strict";a("f81c")},c474:function(t,i,a){},f75a:function(t,i,a){"use strict";a.r(i);var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.getListDataMore,expression:"getListDataMore"}],attrs:{id:"index","infinite-scroll-disabled":"loading","infinite-scroll-immediate-check":"false","infinite-scroll-distance":"0"}},[a("mt-header",{staticClass:"nav",attrs:{title:"WHISPER MUSIC"}},[a("mt-button",{attrs:{slot:"left"},slot:"left"},[a("img",{attrs:{slot:"icon",src:t.more_iconurl,height:"16",width:"15"},slot:"icon"})]),a("router-link",{attrs:{slot:"right",to:{path:"/search"}},slot:"right"},[a("mt-button",{attrs:{icon:"search"}})],1)],1),a("music-banner"),a("div",{staticClass:"recommend"},[a("ul",{staticClass:"nav-recommend"},[a("li",[a("div",{staticClass:"nav-icon"},[a("router-link",{attrs:{to:{path:"recommendSong"}}},[a("mt-button",{staticClass:"nav-icon-button",attrs:{size:"small"}},[a("img",{attrs:{slot:"icon",src:t.recommend_iconurl},slot:"icon"})])],1)],1),a("div",{staticClass:"nav-icontext"},[t._v("推荐")])]),a("li",[a("div",{staticClass:"nav-icon"},[a("router-link",{attrs:{to:{path:"recommendPlaylist"}}},[a("mt-button",{staticClass:"nav-icon-button",attrs:{size:"small"}},[a("img",{attrs:{slot:"icon",src:t.musicList_iconurl},slot:"icon"})])],1)],1),a("div",{staticClass:"nav-icontext"},[t._v("歌单")])]),a("li",[a("div",{staticClass:"nav-icon"},[a("router-link",{attrs:{to:{path:"songRank"}}},[a("mt-button",{staticClass:"nav-icon-button",attrs:{size:"small"}},[a("img",{attrs:{slot:"icon",src:t.rankingList_iconurl},slot:"icon"})])],1)],1),a("div",{staticClass:"nav-icontext"},[t._v("排行榜")])]),a("li",[a("div",{staticClass:"nav-icon"},[a("router-link",{attrs:{to:{path:"dj"}}},[a("mt-button",{staticClass:"nav-icon-button",attrs:{size:"small"}},[a("img",{attrs:{slot:"icon",src:t.radio_iconurl},slot:"icon"})])],1)],1),a("div",{staticClass:"nav-icontext"},[t._v("电台")])]),a("li",[a("div",{staticClass:"nav-icon"},[a("router-link",{attrs:{to:{path:"mv"}}},[a("mt-button",{staticClass:"nav-icon-button",attrs:{size:"small"}},[a("img",{attrs:{slot:"icon",src:t.video_iconurl},slot:"icon"})])],1)],1),a("div",{staticClass:"nav-icontext"},[t._v("视频")])])]),a("div",{staticClass:"recommendlist"},[a("div",{staticClass:"recommendlist-title recommendlist-title-hot"},[t._v("热门歌单")]),a("router-link",{attrs:{to:{path:"recommendPlaylist"}}},[a("mt-button",{staticClass:"recommendlist-title-more"},[t._v("查看更多")])],1)],1),a("music-list"),a("div",{staticClass:"DividingLine"}),a("new-album")],1),a("bottom-loading",{attrs:{loading:t.loading}})],1)},e=[];a("ac67"),a("1bc7"),a("32ea");function s(t,i){(null==i||i>t.length)&&(i=t.length);for(var a=0,n=new Array(i);a<i;a++)n[a]=t[a];return n}function o(t){if(Array.isArray(t))return s(t)}function r(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function l(t,i){if(t){if("string"===typeof t)return s(t,i);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?s(t,i):void 0}}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return o(t)||r(t)||l(t)||c()}var m=a("46d3"),d=a("7736"),b=a("365c"),g=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{attrs:{id:"banner"}},[a("mt-swipe",{staticClass:"swiper",attrs:{auto:2e3}},t._l(t.bannerJson,(function(t,i){return a("mt-swipe-item",{key:i,staticClass:"swiper-item"},[a("router-link",{attrs:{to:{path:"detail",query:{id:t.targetId}}}},[a("img",{attrs:{src:t.imageUrl}})])],1)})),1)],1)},f=[],v={data:function(){return{bannerJson:[]}},created:function(){this.getBannerData()},methods:{getBannerData:function(){var t=this;Object(b["a"])().then((function(i){t.bannerJson=i.data.banners}))}}},p=v,h=(a("5293"),a("4ac2")),_=Object(h["a"])(p,g,f,!1,null,"24e21bbb",null),y=_.exports,C=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("ul",{staticClass:"list"},t._l(t.HighQualityPlayList.slice(0,6),(function(i,n){return a("li",{key:i.id,staticClass:"list-item"},[a("router-link",{staticClass:"item-link",attrs:{to:{path:"playlistDetail",query:{id:i.id}}}},[a("div",{staticClass:"item-image-container"},[a("img",{staticClass:"item-image",attrs:{src:i.coverImgUrl}})]),a("div",{staticClass:"item-name"},[t._v(t._s(i.name))])])],1)})),0)},O=[],w={data:function(){return{HighQualityPlayList:[]}},created:function(){this.getHighQualityPlayListData()},methods:{getHighQualityPlayListData:function(){var t=this;Object(b["d"])().then((function(i){t.HighQualityPlayList=i.data.playlists}))}}},D=w,k=(a("7b6a"),Object(h["a"])(D,C,O,!1,null,"6a592d4d",null)),j=k.exports,S=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[a("div",{staticClass:"recommendlist"},[a("div",{staticClass:"recommendlist-title recommendlist-title-new title1"},[a("mt-button",{staticClass:"main-album-tab main-album-tab-1",attrs:{size:"small"},nativeOn:{click:function(i){i.preventDefault(),t.active="tab-container-mainNewSong"}}},[t._v("新歌")]),a("mt-button",{staticClass:"main-album-tab",attrs:{size:"small"},nativeOn:{click:function(i){i.preventDefault(),t.active="tab-container-mainNewAlbum"}}},[t._v("新碟")])],1),a("router-link",{attrs:{to:{path:"recommendSong"}}},[a("mt-button",{staticClass:"recommendlist-title-more",attrs:{size:"small"}},[t._v("查看更多")])],1)],1),a("div",{staticClass:"page-tab-container"},[a("mt-tab-container",{staticClass:"page-tabbar-tab-container",attrs:{swipeable:""},model:{value:t.active,callback:function(i){t.active=i},expression:"active"}},[a("mt-tab-container-item",{attrs:{id:"tab-container-mainNewSong"}},t._l(t.NewSongUrlData.slice(0,5),(function(t,i){return a("mt-cell",{attrs:{title:t.name,label:t.artists.name}},[a("img",{staticClass:"item-image",attrs:{slot:"icon",src:t.album.picUrl},slot:"icon"})])})),1),a("mt-tab-container-item",{attrs:{id:"tab-container-mainNewAlbum"}},t._l(t.NewAlbumUrlData.slice(0,5),(function(t,i){return a("mt-cell",{attrs:{title:t.name,label:t.artist.name}},[a("img",{staticClass:"item-image",attrs:{slot:"icon",src:t.picUrl},slot:"icon"})])})),1)],1)],1)])},A=[],L={data:function(){return{active:"tab-container-mainNewSong",NewAlbumUrlData:[],NewSongUrlData:[]}},created:function(){this.getNewAlbumUrlData(),this.getNewSongUrlData()},methods:{getNewAlbumUrlData:function(){var t=this;Object(b["k"])().then((function(i){t.NewAlbumUrlData=i.data.albums}))},getNewSongUrlData:function(){var t=this;Object(b["l"])().then((function(i){t.NewSongUrlData=i.data.data}))}}},P=L,E=(a("662e"),Object(h["a"])(P,S,A,!1,null,"797bcb5a",null)),U=E.exports,N=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"loading-container"},["loading"===t.loading?a("span",{staticClass:"loading"},[a("mt-spinner",{attrs:{type:"triple-bounce",color:"#6ed56c"}})],1):"nothing"===t.loading?a("span",{staticClass:"nothing"},[t._v("没有更多了")]):"error"===t.loading?a("span",{staticClass:"error"},[t._v("出错啦")]):t._e()])},x=[],I={props:{loading:{type:[String,Boolean],default:"",required:!0}}},T=I,J=(a("5ac6"),Object(h["a"])(T,N,x,!1,null,"346cf38a",null)),M=J.exports,$=a("271d");function z(t,i){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),a.push.apply(a,n)}return a}function H(t){for(var i=1;i<arguments.length;i++){var a=null!=arguments[i]?arguments[i]:{};i%2?z(Object(a),!0).forEach((function(i){Object(m["a"])(t,i,a[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):z(Object(a)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(a,i))}))}return t}var B={name:"index",components:{MusicList:j,MusicBanner:y,BottomLoading:M,NewAlbum:U},data:function(){return{listJson:[],page:1,loading:!1,lock:!1,more_iconurl:"../icons/more.png",musicList_iconurl:"../icons/musicList.png",recommend_iconurl:"../icons/recommend.png",rankingList_iconurl:"../icons/rankingList.png",radio_iconurl:"../icons/radio.png",video_iconurl:"../icons/video.png"}},computed:H({},Object(d["e"])(["audio"])),mounted:function(){this.getListData()},beforeRouteLeave:function(t,i,a){this.lock=!0,a()},methods:H(H({},Object(d["d"])(["SET_AUDIO_DATA","SET_AUDIO_MODE","SET_PLAY_LIST","SET_PLAY_MODE"])),{},{getListData:function(){var t=this;this.$indicator.open(),this.page=1,Object(b["g"])().then((function(i){t.listJson=i.data.result,t.page=2,t.$indicator.close()})).catch((function(i){t.$indicator.close()}))},getListDataMore:function(){var t=this;this.lock=!0,this.loading="loading",Object(b["g"])(this.page).then((function(i){var a;i.data&&i.data.length>0?((a=t.listJson).push.apply(a,u(i.data)),t.page++,t.loading="",t.lock=!1):t.loading="nothing"})).catch((function(){t.loading="error",t.lock=!1}))},playAll:function(){this.SET_PLAY_LIST(this.listJson),this.SET_PLAY_MODE($["b"].listRepeat.value),this.audio.data&&this.listJson[0].sound.id===this.audio?(this.audio.ele.load(),this.audio.ele.play()):this.SET_AUDIO_DATA(this.listJson[0])}})},Q=B,R=(a("9549"),Object(h["a"])(Q,n,e,!1,null,null,null));i["default"]=R.exports},f81c:function(t,i,a){}}]);
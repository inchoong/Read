(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{505:function(e,t,n){"use strict";n.r(t);var a=n(797),r=n(553);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);n(693);var i=n(3),s=Object(i.a)(r.default,a.a,a.b,!1,null,null,null);t.default=s.exports},551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=p(n(61)),a=p(n(132)),o=p(n(197)),i=p(n(131)),r=p(n(133));t.default=function(){var e,t;return{state:{books:[],bookProgress:[],balanceIOS:0,balanceAndroid:0,memberCardSummary:{}},mutations:(e={},(0,r.default)(e,c.UPDATE_SHELF,function(e,t){e.books=t.books||[],e.bookProgress=t.bookProgress||[]}),(0,r.default)(e,c.UPDATE_SHELF_BALANCE,function(e,t){e.balanceIOS=v.get(t,"balance",0),e.balanceAndroid=v.get(t,"peerBalance",0)}),(0,r.default)(e,c.UPDATE_SHELF_MEMBER_CARD,function(e,t){e.memberCardSummary=t.memberCardSummary}),(0,r.default)(e,c.UPDATE_SHELF_UPDATED_BOOKS,function(e,t){t&&0<t.length&&e.books.forEach(function(e){-1<t.indexOf(e.bookId)&&(e.updated=1)})}),e),actions:(t={},(0,r.default)(t,f.FETCH_SHELF,function(e,t){var r=e.commit;return(0,s.default)("/web/shelf/sync",(0,i.default)({},t),function(e){var t=e.data,n=v.get(t,"books",[]),a=v.get(t,"bookProgress",[]);0<n.length&&(n=n.filter(function(e){return d.default.isSupportedBookType(e.type)}).sort(function(e,t){return t.readUpdateTime-e.readUpdateTime}).map(function(t){var e=v.findIndex(a,function(e){return t.bookId===e.bookId}),n=-1<e?a[e].progress:0;return(0,o.default)(v.pick(t,["bookId","title","author","cover","secret","format","soldout","payType","finished","finishReading","lastChapterIdx","readUpdateTime","updateTime"]),{progress:n,updated:0})})),r(c.UPDATE_SHELF,{books:n,bookProgress:a})},function(e){b("Error in fetchShelf",e)})}),(0,r.default)(t,f.FETCH_SHELF_ACCOUNT,function(e){var t=e.dispatch;return a.default.all([t(f.FETCH_SHELF_BALANCE,{pf:"ios_html"}),t(f.FETCH_SHELF_MEMBER_CARD,{pf:"ios"})])}),(0,r.default)(t,f.FETCH_SHELF_BALANCE,function(e,t){var n=e.commit,a=t.pf;return(0,l.default)("/web/pay/balance",{pf:a},function(e){n(c.UPDATE_SHELF_BALANCE,e.data)},function(e){b("Error in fetchShelfBalance",e)})}),(0,r.default)(t,f.FETCH_SHELF_MEMBER_CARD,function(e,t){var n=e.commit,a=t.pf;return(0,s.default)("/web/pay/memberCardSummary",{pf:a},function(e){n(c.UPDATE_SHELF_MEMBER_CARD,{memberCardSummary:e.data})},function(e){b("Error in fetchShelfMemberCard",e)})}),(0,r.default)(t,f.FETCH_SHELF_UPDATED_BOOKS,function(e,t){var n=e.commit,a=e.state,r=h.default.getBookLastChaptersOperator(t),o=r.exist,i=r.value,s={},l=[];a.books.filter(function(e){return d.default.isBuyUnitChapter(e)}).forEach(function(e){var t=v.get(e,"lastChapterIdx",0),n=v.get(i,e.bookId,"");n?(t&&n<t&&0===v.get(e,"finished")&&v.get(e,"updateTime",0)>v.get(e,"readUpdateTime",0)&&l.push(e.bookId),s[e.bookId]=n):s[e.bookId]=t}),n(c.UPDATE_SHELF_UPDATED_BOOKS,l),0<(0,u.default)(s).length?(r.setValue(s),r.save()):o&&(r.clearValue(),r.save())}),t)}};var s=p(n(192)),l=p(n(62)),f=_(n(34)),c=_(n(60)),d=p(n(191)),h=p(n(63));function _(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function p(e){return e&&e.__esModule?e:{default:e}}var m=n(7),v=n(22);function b(){var e;m.inDevelopment()&&(e=console).log.apply(e,["[chantlog] module/shelf"].concat(Array.prototype.slice.call(arguments)))}},553:function(e,t,n){"use strict";n.r(t);var a=n(554),r=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t.default=r.a},554:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=d(n(132)),a=d(n(131)),o=d(n(691)),i=d(n(551)),s=c(n(34)),l=d(n(19)),u=c(n(60)),f=n(35);function c(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function d(e){return e&&e.__esModule?e:{default:e}}var h=n(7),_=n(22),p="shelf";t.default={name:p,components:{ShelfBook:o.default},data:function(){return{}},watch:{books:function(){this.updateEmptyViewState()}},computed:(0,a.default)({},(0,f.mapState)({books:function(e){return e[p].books},balanceIOS:function(e){return e[p].balanceIOS},balanceAndroid:function(e){return e[p].balanceAndroid},memberCardSummary:function(e){return e[p].memberCardSummary}}),{shelfTitle:function(){return this.user&&this.user.name?this.user.name:"我的书架"},accountDetail:function(){return[this.balanceString,this.memberShipString].filter(function(e){return e}).join(" · ")},balanceString:function(){var e=this.balanceIOS,t=this.balanceAndroid,n=Math.max(e,t);return 0<n?"余额 "+n+" 书币":""},memberShipString:function(){var e=this.memberCardSummary;if(1===e.permanent)return"无限卡终身会员";var t=e.expiredTime||0,n=new Date;if(t&&1e3*t>n.getTime()){var a=new Date(1e3*t+864e5);a.setHours(0,0,0,0);var r=Math.floor((a.getTime()-n.getTime())/864e5);return 0===r?"无限卡今日到期":"无限卡剩余 "+r+" 天"}return""}}),methods:{handleLogin:function(){this.$showLoginDialog()},handleDownloadApp:function(){this.reportClientBusiness({itemName:"Web_Shelf_DownloadClk"}),this.reportClientBusiness({itemName:"Web_Download_ShelfExp"}),this.$showDownloadAppDialog(),this.$downloadAppComponent.beginToLoadQrCode({schemeName:"shelf",subTitle:"在手机上管理我的书架",from:"ShelfDownload"})},updateEmptyViewState:function(){if(h.isEnvClient){var e=document.querySelector("#app");e&&(0<this.books.length?e.classList.remove("app_fullHeight"):e.classList.add("app_fullHeight"))}}},asyncData:function(e){var t=e.store,n=e.user,a=e.envConfig;if(t.registerModule(p,(0,i.default)()),(new l.default).isPhone(a.userAgent)&&t.commit(u.UPDATE_SHOW_NAV_BAR,!1),h.hasLogin(n))return r.default.all([t.dispatch(s.FETCH_SHELF,a)])},created:function(){h.isEnvClient&&this.$store.registerModule(p,(0,i.default)(),{preserveState:!0})},mounted:function(){this.hasLogin&&(this.$store.dispatch(s.FETCH_SHELF_UPDATED_BOOKS,_.get(this.user,"vid")),this.$store.dispatch(s.FETCH_SHELF_ACCOUNT)),h.isEnvClient&&(this.haveReportInfo("Index_Shelf")&&this.reportClientBusiness({itemName:"Web_Shelf_EnterFromHome"},"Index_Shelf"),this.haveReportInfo("Nav_Shelf")&&this.reportClientBusiness({itemName:"Web_Shelf_EnterFromMe"},"Nav_Shelf"),this.haveReportInfo("Reader_NavBar")&&this.reportClientBusiness({itemName:"Web_Shelf_EnterFromReaderNavBar"},"Reader_NavBar"),this.haveReportInfo("Reader_BottomBar")&&this.reportClientBusiness({itemName:"Web_Shelf_EnterFromReaderBottomBar"},"Reader_BottomBar"),this.haveReportInfo("Global_TabBar")&&this.reportClientBusiness({itemName:"Web_Shelf_EnterFromGlobalTabBar"},"Global_TabBar"),this.reportClientBusiness({itemName:"Web_Shelf_DownloadExp"}),this.reportClientBusiness({itemName:"Web_Shelf_DownloadExp"})),this.updateEmptyViewState()},destroyed:function(){this.$store.unregisterModule(p)}}},555:function(e,t,n){"use strict";n.r(t);var a=n(556),r=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t.default=r.a},556:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(276),o=(a=r)&&a.__esModule?a:{default:a};t.default={name:"ShelfBook",components:{BookCover:o.default},props:{book:{type:Object}},computed:{infoString:function(){return""}}}},557:function(e,t,n){},558:function(e,t,n){},691:function(e,t,n){"use strict";n.r(t);var a=n(805),r=n(555);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);n(692);var i=n(3),s=Object(i.a)(r.default,a.a,a.b,!1,null,null,null);t.default=s.exports},692:function(e,t,n){"use strict";var a=n(557);n.n(a).a},693:function(e,t,n){"use strict";var a=n(558);n.n(a).a},797:function(e,t,n){"use strict";function a(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app_content shelf_container"},[e.hasLogin&&0<e.books.length?n("div",{staticClass:"shelf_header"},[n("h2",{staticClass:"shelf_title"},[e._v(e._s(e.shelfTitle))]),e.accountDetail&&0<e.accountDetail.length?n("div",{staticClass:"shelf_accountDetail"},[e._v(e._s(e.accountDetail))]):e._e(),n("div",{staticClass:"shelf_download_app"},[n("a",{attrs:{href:"javascript:"},on:{click:e.handleDownloadApp}},[n("span",{staticClass:"shelf_download_app_text"},[e._v("下载微信读书 App 管理书架")]),n("span",{staticClass:"shelf_download_app_icon"})])])]):e._e(),e.hasLogin&&0<e.books.length?n("div",{staticClass:"shelf_list"},[e._l(e.books,function(e){return n("shelf-book",{key:e.bookId,attrs:{book:e}})}),e._m(0),e._l(7,function(e){return n("span",{key:e,staticClass:"shelfBook_placeholder"})})],2):e.hasLogin?n("div",{staticClass:"shelf_empty"},[n("div",{staticClass:"shelf_empty_title"},[e._v("你还没有添加任何书籍")]),n("div",{staticClass:"shelf_empty_line"}),e._m(1),e._m(2)]):n("div",{staticClass:"shelf_login"},[n("p",[e._v("暂未登录，请用微信登录后再查看书架")]),n("a",{attrs:{href:"javascript:"},on:{click:e.handleLogin}},[e._v("微信扫码登录")])])])}var r=[function(){var e=this.$createElement,t=this._self._c||e;return t("a",{staticClass:"shelfBook shelfBook_add",attrs:{href:"/web/category"}},[t("div",{staticClass:"shelfBook_add_cover"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"shelf_empty_detail"},[this._v("重拾阅读的习惯"),t("br"),this._v("为生活埋下微小的信仰")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"shelf_empty_button"},[t("a",{attrs:{href:"/web/category"}},[this._v("去发现更多好书")])])}];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r})},805:function(e,t,n){"use strict";function a(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"shelfBook",attrs:{href:t.readerURL(t.book.bookId)},on:{click:function(e){return t.saveReportInfo("Shelf_Enter_Reader")}}},[n("book-cover",{attrs:{"custom-selector":"cover",src:t.book.cover,"is-secret":1===t.book.secret,"is-updated":1===t.book.updated,needGradientDecor:!0}}),n("div",{staticClass:"title"},[t._v(t._s(t.book.title))]),0<t.infoString.length?n("div",{staticClass:"info"},[t._v(t._s(t.infoString))]):t._e()],1)}var r=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r})}}]);
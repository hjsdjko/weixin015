(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"0dfe":function(e,t,i){"use strict";var n,r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"box",style:{minHeight:"100vh",width:"100%",padding:"424rpx 44rpx 244rpx 44rpx",background:"url(http://codegen.caihongy.cn/20230815/be5343490bf4412389da1378210fd727.jpg) no-repeat center top / 100%,url(http://codegen.caihongy.cn/20230819/02e684664ba64fb5a0952058fa08d246.png) no-repeat center bottom / 100%,#ffffff",height:"100%"}},[i("v-uni-view",{style:{padding:"48rpx 48rpx 24rpx 48rpx",boxShadow:"0px 0px 12rpx #dddddd",margin:"0 0 244rpx 0",borderRadius:"16rpx 100rpx",background:"#ffffff",display:"block",width:"100%",height:"auto"}},[i("v-uni-image",{style:{width:"160rpx",margin:"0",borderRadius:"100%",objectFit:"cover",display:"none",height:"160rpx"},attrs:{src:"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg",mode:"aspectFill"}}),1==e.loginType?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{width:"100%",margin:"0 0 24rpx 0",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{border:"2rpx solid #eeeeee",padding:"0px 24rpx 0 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"0px",background:"#ffffff",borderWidth:"0 0 2rpx 0",width:"100%",fontSize:"28rpx",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"请输入账号"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1):e._e(),1==e.loginType?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{width:"100%",margin:"0 0 24rpx 0",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{border:"2rpx solid #eeeeee",padding:"0px 24rpx 0 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"0px",background:"#ffffff",borderWidth:"0 0 2rpx 0",width:"100%",fontSize:"28rpx",height:"88rpx"},attrs:{type:"password",name:"",placeholder:"请输入密码"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1):e._e(),e.roleNum>1?i("v-uni-view",{staticClass:"userType_three"},[i("v-uni-radio-group",{staticClass:"userType_three_itemBox",on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.optionsChange.apply(void 0,arguments)}}},e._l(e.options,(function(t,n){return n>0?i("v-uni-label",{key:n,staticClass:"userType_three_item"},[i("v-uni-view",[i("v-uni-radio",{attrs:{value:String(n),checked:n==e.index}})],1),i("v-uni-view",{staticClass:"userType_three_text",class:n==e.index?"userType_three_textActive":""},[e._v(e._s(t))])],1):e._e()})),1)],1):e._e(),1==e.loginType?i("v-uni-button",{staticClass:"btn-submit",style:{border:"0",padding:"0 0 0 0",margin:"0 0 24rpx 0",color:"#ffffff",borderRadius:"60rpx",background:"#75ebde",width:"100%",lineHeight:"88rpx",fontSize:"32rpx",height:"88rpx"},attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onLoginTap.apply(void 0,arguments)}}},[e._v("登录")]):e._e(),2==e.loginType?i("v-uni-button",{staticClass:"btn-submit",style:{border:"0",padding:"0 0 0 0",margin:"0 0 24rpx 0",color:"#ffffff",borderRadius:"60rpx",background:"#75ebde",width:"100%",lineHeight:"88rpx",fontSize:"32rpx",height:"88rpx"},attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onFaceLoginTap.apply(void 0,arguments)}}},[e._v("人脸识别登录")]):e._e(),i("v-uni-view",{staticClass:"links",style:{width:"100%",margin:"0 0 24rpx 0",flexWrap:"wrap",display:"flex",height:"auto"}},[i("v-uni-view",{staticClass:"link-highlight",style:{color:"#999999",padding:"0 8rpx 0 8rpx",fontSize:"28rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onRegisterTap("yonghu")}}},[e._v("注册用户")])],1)],1)],1)],1)},a=[];i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}))},3285:function(e,t,i){"use strict";i.r(t);var n=i("6263"),r=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},"583f":function(e,t,i){var n=i("dae0");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=i("4f06").default;r("1f8fa05c",n,!0,{sourceMap:!1,shadowMode:!1})},6263:function(e,t,i){"use strict";var n=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("96cf");var r=n(i("3b8d")),a=n(i("2971")),s={data:function(){return{username:"",password:"",loginType:1,codes:[{num:1,color:"#000",rotate:"10deg",size:"16px"},{num:2,color:"#000",rotate:"10deg",size:"16px"},{num:3,color:"#000",rotate:"10deg",size:"16px"},{num:4,color:"#000",rotate:"10deg",size:"16px"}],options:["请选择登录用户类型"],optionsValues:["","yonghu"],index:1,roleNum:0}},onLoad:function(){var e=["请选择登录用户类型"],t=a.default.list();this.menuList=t;for(var i=0;i<this.menuList.length;i++)"是"==this.menuList[i].hasFrontLogin&&(e.push(this.menuList[i].roleName),this.roleNum++);1==this.roleNum&&(this.index=1),this.options=e,this.styleChange()},methods:{styleChange:function(){this.$nextTick((function(){}))},onRegisterTap:function(e){uni.setStorageSync("loginTable",e),this.$utils.jump("../register/register")},onLoginTap:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.username){e.next=3;break}return this.$utils.msg("请输入用户名"),e.abrupt("return");case 3:if(this.password){e.next=6;break}return this.$utils.msg("请输入用户密码"),e.abrupt("return");case 6:if(this.optionsValues[this.index]){e.next=9;break}return this.$utils.msg("请选择登录用户类型"),e.abrupt("return");case 9:return e.next=11,this.$api.login("".concat(this.optionsValues[this.index]),{username:this.username,password:this.password});case 11:return t=e.sent,uni.removeStorageSync("useridTag"),uni.setStorageSync("token",t.token),uni.setStorageSync("nickname",this.username),uni.setStorageSync("nowTable","".concat(this.optionsValues[this.index])),e.next=18,this.$api.session("".concat(this.optionsValues[this.index]));case 18:t=e.sent,t.data.touxiang?uni.setStorageSync("headportrait",t.data.touxiang):t.data.headportrait&&uni.setStorageSync("headportrait",t.data.headportrait),uni.setStorageSync("userid",t.data.id),t.data.vip&&uni.setStorageSync("vip",t.data.vip),uni.setStorageSync("appRole","".concat(this.options[this.index])),this.$utils.tab("../index/index");case 24:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value}}};t.default=s},"754f":function(e,t,i){"use strict";var n=i("583f"),r=i.n(n);r.a},a86a:function(e,t,i){"use strict";i.r(t);var n=i("0dfe"),r=i("3285");for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);i("754f");var s,o=i("f0c5"),u=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"2e51884e",null,!1,n["a"],s);t["default"]=u.exports},dae0:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-2e51884e]{min-height:calc(100vh - 44px);box-sizing:border-box}.userType_three[data-v-2e51884e]{padding:%?20?% 0 %?20?% 0;width:100%}.userType_three .userType_three_itemBox[data-v-2e51884e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.userType_three .userType_three_itemBox .userType_three_item[data-v-2e51884e]{margin:0 %?20?% 0 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.userType_three .userType_three_itemBox .userType_three_item[data-v-2e51884e] .uni-radio-input{background:#fff!important;border-color:#666!important}.userType_three .userType_three_itemBox .userType_three_item[data-v-2e51884e] .uni-radio-input-checked{background:#409eff!important;border-color:#409eff!important}.userType_three .userType_three_itemBox .userType_three_item .userType_three_text[data-v-2e51884e]{color:#666}.userType_three .userType_three_itemBox .userType_three_item .userType_three_textActive[data-v-2e51884e]{color:#409eff}',""]),e.exports=t}}]);
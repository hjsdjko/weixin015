(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-discusscaipinxinxi-add-or-update"],{"1bf4":function(e,t,r){var n=r("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-99e572be]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=t},"380d":function(e,t,r){"use strict";r.r(t);var n=r("b4c1"),i=r("c30a");for(var a in i)"default"!==a&&function(e){r.d(t,e,(function(){return i[e]}))}(a);r("af1d");var o,s=r("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"99e572be",null,!1,n["a"],o);t["default"]=c.exports},af1d:function(e,t,r){"use strict";var n=r("bf2c"),i=r.n(n);i.a},b4c1:function(e,t,r){"use strict";var n,i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"content"},[r("v-uni-view",{style:{width:"100%",padding:"0 0 0 0",position:"relative",background:"#ffffff",height:"100%"}},[r("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"24rpx 24rpx 24rpx 24rpx",background:"#ffffff",display:"block",height:"auto"}},[r("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#cccccc",alignItems:"center",borderRadius:"8rpx 0 0 8rpx",borderWidth:"0px",background:"#e7fefc",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("评论内容")]),r("v-uni-textarea",{style:{border:"0px solid #eeeeee",padding:"24rpx 24rpx 24rpx 24rpx",margin:"0 0 0 0",color:"#000000",borderRadius:"8rpx",flex:"1",background:"none",fontSize:"28rpx",height:"240rpx"},attrs:{placeholder:"评论内容"},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}})],1),r("v-uni-view",{staticClass:"btn",style:{width:"100%",justifyContent:"center",display:"flex",height:"auto"}},[r("v-uni-button",{staticClass:"bg-red",style:{border:"0px solid #eeeeee",padding:"0 0 0 0",boxShadow:"0px 12rpx 12rpx -12rpx #228a7f",margin:"0 4% 0 0",color:"#ffffff",borderRadius:"40rpx 0 0 0",background:"#75ebde",width:"30%",lineHeight:"80rpx",fontSize:"28rpx",height:"80rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)],1)},a=[];r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return n}))},bf2c:function(e,t,r){var n=r("1bf4");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=r("4f06").default;i("38e669a3",n,!0,{sourceMap:!1,shadowMode:!1})},c1be:function(e,t,r){"use strict";var n=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("c5f6"),r("f559"),r("a481"),r("3b2b"),r("456d"),r("ac6a"),r("28a5"),r("96cf");var i=n(r("3b8d")),a=n(r("e2b1")),o=n(r("064f")),s=n(r("bd56")),c={data:function(){return{cross:"",ruleForm:{refid:"",userid:"",avatarurl:"",nickname:"",content:"",reply:""},user:{},ro:{refid:!1,userid:!1,avatarurl:!1,nickname:!1,content:!1,reply:!1}}},components:{wPicker:a.default,xiaEditor:o.default,multipleSelect:s.default},watch:{},onLoad:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(t){var r,n,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(r);case 3:if(n=e.sent,this.user=n.data,this.ruleForm.userid=uni.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!t.id){e.next=13;break}return this.ruleForm.id=t.id,e.next=11,this.$api.info("discusscaipinxinxi",this.ruleForm.id);case 11:n=e.sent,this.ruleForm=n.data;case 13:if(this.cross=t.cross,!t.cross){e.next=45;break}i=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(i);case 17:if((e.t1=e.t0()).done){e.next=45;break}if(a=e.t1.value,"refid"!=a){e.next=23;break}return this.ruleForm.refid=i[a],this.ro.refid=!0,e.abrupt("continue",17);case 23:if("userid"!=a){e.next=27;break}return this.ruleForm.userid=i[a],this.ro.userid=!0,e.abrupt("continue",17);case 27:if("avatarurl"!=a){e.next=31;break}return this.ruleForm.avatarurl=i[a].split(",")[0],this.ro.avatarurl=!0,e.abrupt("continue",17);case 31:if("nickname"!=a){e.next=35;break}return this.ruleForm.nickname=i[a],this.ro.nickname=!0,e.abrupt("continue",17);case 35:if("content"!=a){e.next=39;break}return this.ruleForm.content=i[a],this.ro.content=!0,e.abrupt("continue",17);case 39:if("reply"!=a){e.next=43;break}return this.ruleForm.reply=i[a],this.ro.reply=!0,e.abrupt("continue",17);case 43:e.next=17;break;case 45:this.styleChange(),this.$forceUpdate();case 47:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),computed:{baseUrl:function(){return this.$base.url}},methods:{styleChange:function(){this.$nextTick((function(){document.querySelectorAll(".radioText").forEach((function(e){e.removeAttribute("style");var t={color:"#666666"};Object.keys(t).forEach((function(r){e.style[r]=t[r]}))})),document.querySelectorAll(".radioTextActive").forEach((function(e){e.removeAttribute("style");var t={color:"#00babd"};Object.keys(t).forEach((function(r){e.style[r]=t[r]}))})),document.querySelectorAll(".checkText").forEach((function(e){e.removeAttribute("style");var t={color:"#666666"};Object.keys(t).forEach((function(r){e.style[r]=t[r]}))})),document.querySelectorAll(".checkTextActive").forEach((function(e){e.removeAttribute("style");var t={color:"#00babd"};Object.keys(t).forEach((function(r){e.style[r]=t[r]}))})),document.querySelectorAll(".uni-radio-input").forEach((function(e){e.removeAttribute("style");var t={border:"2rpx solid #999999",borderRadius:"100%",background:"#ffffff"};Object.keys(t).forEach((function(r){e.style[r]=t[r]}))})),document.querySelectorAll(".uni-radio-input-checked").forEach((function(e){e.removeAttribute("style");var t={border:"2rpx solid #00babd",borderRadius:"100%",background:"#19d2d5"};Object.keys(t).forEach((function(r){e.style[r]=t[r]}))})),document.querySelectorAll(".uni-checkbox-input").forEach((function(e){e.removeAttribute("style");var t={border:"2rpx solid #999999",borderRadius:"100%",background:"#ffffff"};Object.keys(t).forEach((function(r){e.style[r]=t[r]}))})),document.querySelectorAll(".uni-checkbox-input-checked").forEach((function(e){e.removeAttribute("style");var t={border:"2rpx solid #00babd",color:"#ffffff",borderRadius:"100%",background:"#19d2d5"};Object.keys(t).forEach((function(r){e.style[r]=t[r]}))}))}))},avatarurlTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.avatarurl="file/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(){var t,r,n,i,a,o,s,c,u,l,d,f,p,h;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(this.ruleForm.avatarurl=uni.getStorageSync("headportrait")?uni.getStorageSync("headportrait"):"",t="",r=[],t&&(r=t.split(",")),n=0;n<r.length;n++)i=new RegExp(r[n],"g"),this.ruleForm.content.indexOf(r[n])>-1&&(this.ruleForm.content=this.ruleForm.content.replace(i,"**"));if(this.ruleForm.refid){e.next=8;break}return this.$utils.msg("关联表id不能为空"),e.abrupt("return");case 8:if(this.ruleForm.userid){e.next=11;break}return this.$utils.msg("用户id不能为空"),e.abrupt("return");case 11:if(this.ruleForm.content){e.next=14;break}return this.$utils.msg("评论内容不能为空"),e.abrupt("return");case 14:if(!this.cross){e.next=31;break}if(uni.setStorageSync("crossCleanType",!0),u=uni.getStorageSync("statusColumnName"),l=uni.getStorageSync("statusColumnValue"),""==u){e.next=31;break}if(a||(a=uni.getStorageSync("crossObj")),u.startsWith("[")){e.next=27;break}for(d in a)d==u&&(a[d]=l);return f=uni.getStorageSync("crossTable"),e.next=25,this.$api.update("".concat(f),a);case 25:e.next=31;break;case 27:o=Number(uni.getStorageSync("userid")),s=a["id"],c=uni.getStorageSync("statusColumnName"),c=c.replace(/\[/,"").replace(/\]/,"");case 31:if(!s||!o){e.next=55;break}return this.ruleForm.crossuserid=o,this.ruleForm.crossrefid=s,p={page:1,limit:10,crossuserid:o,crossrefid:s},e.next=37,this.$api.list("discusscaipinxinxi",p);case 37:if(h=e.sent,!(h.data.total>=c)){e.next=44;break}return this.$utils.msg(uni.getStorageSync("tips")),uni.removeStorageSync("crossCleanType"),e.abrupt("return",!1);case 44:if(!this.ruleForm.id){e.next=49;break}return e.next=47,this.$api.update("discusscaipinxinxi",this.ruleForm);case 47:e.next=51;break;case 49:return e.next=51,this.$api.add("discusscaipinxinxi",this.ruleForm);case 51:uni.setStorageSync("discusscaipinxinxiCleanType",!0),this.$utils.msgBack("提交成功");case 53:e.next=64;break;case 55:if(!this.ruleForm.id){e.next=60;break}return e.next=58,this.$api.update("discusscaipinxinxi",this.ruleForm);case 58:e.next=62;break;case 60:return e.next=62,this.$api.add("discusscaipinxinxi",this.ruleForm);case 62:uni.setStorageSync("discusscaipinxinxiCleanType",!0),this.$utils.msgBack("提交成功");case 64:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,r=t.getFullYear(),n=t.getMonth()+1,i=t.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),n=n>9?n:"0"+n,i=i>9?i:"0"+i,"".concat(r,"-").concat(n,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};t.default=c},c30a:function(e,t,r){"use strict";r.r(t);var n=r("c1be"),i=r.n(n);for(var a in n)"default"!==a&&function(e){r.d(t,e,(function(){return n[e]}))}(a);t["default"]=i.a}}]);
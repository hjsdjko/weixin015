(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-peisongdingdan-add-or-update"],{"3f8a":function(e,r,t){"use strict";t.r(r);var i=t("99e2"),n=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(r,e,(function(){return i[e]}))}(a);r["default"]=n.a},"562c":function(e,r,t){var i=t("24fb");r=i(!1),r.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-bd15526a]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=r},"99e2":function(e,r,t){"use strict";var i=t("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,t("a481"),t("c5f6"),t("f559"),t("456d"),t("ac6a"),t("28a5"),t("96cf");var n=i(t("3b8d")),a=i(t("e2b1")),o=i(t("064f")),u=i(t("bd56")),s={data:function(){return{cross:"",ruleForm:{dingdanbianhao:"",shouhuoren:"",dizhi:"",shoujihaoma:"",dingdanzhuangtai:"未接单",beizhu:""},dingdanzhuangtaiOptions:[],dingdanzhuangtaiIndex:0,user:{},ro:{dingdanbianhao:!1,shouhuoren:!1,dizhi:!1,shoujihaoma:!1,dingdanzhuangtai:!1,beizhu:!1}}},components:{wPicker:a.default,xiaEditor:o.default,multipleSelect:u.default},watch:{},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(r){var t,i,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(t);case 3:if(i=e.sent,this.user=i.data,this.dingdanzhuangtaiOptions="已接单,未接单".split(","),this.ruleForm.userid=uni.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!r.id){e.next=14;break}return this.ruleForm.id=r.id,e.next=12,this.$api.info("peisongdingdan",this.ruleForm.id);case 12:i=e.sent,this.ruleForm=i.data;case 14:if(this.cross=r.cross,!r.cross){e.next=46;break}n=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(n);case 18:if((e.t1=e.t0()).done){e.next=46;break}if(a=e.t1.value,"dingdanbianhao"!=a){e.next=24;break}return this.ruleForm.dingdanbianhao=n[a],this.ro.dingdanbianhao=!0,e.abrupt("continue",18);case 24:if("shouhuoren"!=a){e.next=28;break}return this.ruleForm.shouhuoren=n[a],this.ro.shouhuoren=!0,e.abrupt("continue",18);case 28:if("dizhi"!=a){e.next=32;break}return this.ruleForm.dizhi=n[a],this.ro.dizhi=!0,e.abrupt("continue",18);case 32:if("shoujihaoma"!=a){e.next=36;break}return this.ruleForm.shoujihaoma=n[a],this.ro.shoujihaoma=!0,e.abrupt("continue",18);case 36:if("dingdanzhuangtai"!=a){e.next=40;break}return this.ruleForm.dingdanzhuangtai=n[a],this.ro.dingdanzhuangtai=!0,e.abrupt("continue",18);case 40:if("beizhu"!=a){e.next=44;break}return this.ruleForm.beizhu=n[a],this.ro.beizhu=!0,e.abrupt("continue",18);case 44:e.next=18;break;case 46:this.styleChange(),this.$forceUpdate();case 48:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}(),computed:{baseUrl:function(){return this.$base.url}},methods:{styleChange:function(){this.$nextTick((function(){document.querySelectorAll(".radioText").forEach((function(e){e.removeAttribute("style");var r={color:"#666666"};Object.keys(r).forEach((function(t){e.style[t]=r[t]}))})),document.querySelectorAll(".radioTextActive").forEach((function(e){e.removeAttribute("style");var r={color:"#00babd"};Object.keys(r).forEach((function(t){e.style[t]=r[t]}))})),document.querySelectorAll(".checkText").forEach((function(e){e.removeAttribute("style");var r={color:"#666666"};Object.keys(r).forEach((function(t){e.style[t]=r[t]}))})),document.querySelectorAll(".checkTextActive").forEach((function(e){e.removeAttribute("style");var r={color:"#00babd"};Object.keys(r).forEach((function(t){e.style[t]=r[t]}))})),document.querySelectorAll(".uni-radio-input").forEach((function(e){e.removeAttribute("style");var r={border:"2rpx solid #999999",borderRadius:"100%",background:"#ffffff"};Object.keys(r).forEach((function(t){e.style[t]=r[t]}))})),document.querySelectorAll(".uni-radio-input-checked").forEach((function(e){e.removeAttribute("style");var r={border:"2rpx solid #00babd",borderRadius:"100%",background:"#19d2d5"};Object.keys(r).forEach((function(t){e.style[t]=r[t]}))})),document.querySelectorAll(".uni-checkbox-input").forEach((function(e){e.removeAttribute("style");var r={border:"2rpx solid #999999",borderRadius:"100%",background:"#ffffff"};Object.keys(r).forEach((function(t){e.style[t]=r[t]}))})),document.querySelectorAll(".uni-checkbox-input-checked").forEach((function(e){e.removeAttribute("style");var r={border:"2rpx solid #00babd",color:"#ffffff",borderRadius:"100%",background:"#19d2d5"};Object.keys(r).forEach((function(t){e.style[t]=r[t]}))}))}))},dingdanzhuangtaiChange:function(e){this.dingdanzhuangtaiIndex=e.target.value,this.ruleForm.dingdanzhuangtai=this.dingdanzhuangtaiOptions[this.dingdanzhuangtaiIndex]},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var r,t,i,n,a,o,u,s,d,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.dingdanbianhao){e.next=3;break}return this.$utils.msg("订单编号不能为空"),e.abrupt("return");case 3:if(this.ruleForm.shouhuoren){e.next=6;break}return this.$utils.msg("收货人不能为空"),e.abrupt("return");case 6:if(this.ruleForm.dizhi){e.next=9;break}return this.$utils.msg("地址不能为空"),e.abrupt("return");case 9:if(this.ruleForm.shoujihaoma){e.next=12;break}return this.$utils.msg("手机号码不能为空"),e.abrupt("return");case 12:if(!this.cross){e.next=29;break}if(uni.setStorageSync("crossCleanType",!0),a=uni.getStorageSync("statusColumnName"),o=uni.getStorageSync("statusColumnValue"),""==a){e.next=29;break}if(r||(r=uni.getStorageSync("crossObj")),a.startsWith("[")){e.next=25;break}for(u in r)u==a&&(r[u]=o);return s=uni.getStorageSync("crossTable"),e.next=23,this.$api.update("".concat(s),r);case 23:e.next=29;break;case 25:t=Number(uni.getStorageSync("userid")),i=r["id"],n=uni.getStorageSync("statusColumnName"),n=n.replace(/\[/,"").replace(/\]/,"");case 29:if(!i||!t){e.next=52;break}return this.ruleForm.crossuserid=t,this.ruleForm.crossrefid=i,d={page:1,limit:10,crossuserid:t,crossrefid:i},e.next=35,this.$api.list("peisongdingdan",d);case 35:if(c=e.sent,!(c.data.total>=n)){e.next=42;break}return this.$utils.msg(uni.getStorageSync("tips")),uni.removeStorageSync("crossCleanType"),e.abrupt("return",!1);case 42:if(!this.ruleForm.id){e.next=47;break}return e.next=45,this.$api.update("peisongdingdan",this.ruleForm);case 45:e.next=49;break;case 47:return e.next=49,this.$api.add("peisongdingdan",this.ruleForm);case 49:this.$utils.msgBack("提交成功");case 50:e.next=60;break;case 52:if(!this.ruleForm.id){e.next=57;break}return e.next=55,this.$api.update("peisongdingdan",this.ruleForm);case 55:e.next=59;break;case 57:return e.next=59,this.$api.add("peisongdingdan",this.ruleForm);case 59:this.$utils.msgBack("提交成功");case 60:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var r=new Date,t=r.getFullYear(),i=r.getMonth()+1,n=r.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,n=n>9?n:"0"+n,"".concat(t,"-").concat(i,"-").concat(n)},toggleTab:function(e){this.$refs[e].show()}}};r.default=s},afa1:function(e,r,t){var i=t("562c");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=t("4f06").default;n("792237ae",i,!0,{sourceMap:!1,shadowMode:!1})},b09f:function(e,r,t){"use strict";t.r(r);var i=t("b672"),n=t("3f8a");for(var a in n)"default"!==a&&function(e){t.d(r,e,(function(){return n[e]}))}(a);t("cf5b");var o,u=t("f0c5"),s=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"bd15526a",null,!1,i["a"],o);r["default"]=s.exports},b672:function(e,r,t){"use strict";var i,n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-uni-view",{staticClass:"content"},[t("v-uni-view",{style:{width:"100%",padding:"0 0 0 0",position:"relative",background:"#ffffff",height:"100%"}},[t("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"24rpx 24rpx 24rpx 24rpx",background:"#ffffff",display:"block",height:"auto"}},[t("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#cccccc",alignItems:"center",borderRadius:"8rpx 0 0 8rpx",borderWidth:"0px",background:"#e7fefc",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("订单编号")]),t("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.dingdanbianhao,placeholder:"订单编号"},model:{value:e.ruleForm.dingdanbianhao,callback:function(r){e.$set(e.ruleForm,"dingdanbianhao",r)},expression:"ruleForm.dingdanbianhao"}})],1),t("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#cccccc",alignItems:"center",borderRadius:"8rpx 0 0 8rpx",borderWidth:"0px",background:"#e7fefc",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("收货人")]),t("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.shouhuoren,placeholder:"收货人"},model:{value:e.ruleForm.shouhuoren,callback:function(r){e.$set(e.ruleForm,"shouhuoren",r)},expression:"ruleForm.shouhuoren"}})],1),t("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#cccccc",alignItems:"center",borderRadius:"8rpx 0 0 8rpx",borderWidth:"0px",background:"#e7fefc",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("地址")]),t("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.dizhi,placeholder:"地址"},model:{value:e.ruleForm.dizhi,callback:function(r){e.$set(e.ruleForm,"dizhi",r)},expression:"ruleForm.dizhi"}})],1),t("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#cccccc",alignItems:"center",borderRadius:"8rpx 0 0 8rpx",borderWidth:"0px",background:"#e7fefc",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("手机号码")]),t("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.shoujihaoma,placeholder:"手机号码"},model:{value:e.ruleForm.shoujihaoma,callback:function(r){e.$set(e.ruleForm,"shoujihaoma",r)},expression:"ruleForm.shoujihaoma"}})],1),t("v-uni-view",{staticClass:"select",style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#cccccc",alignItems:"center",borderRadius:"8rpx 0 0 8rpx",borderWidth:"0px",background:"#e7fefc",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("订单状态")]),t("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{value:e.dingdanzhuangtaiIndex,range:e.dingdanzhuangtaiOptions},on:{change:function(r){arguments[0]=r=e.$handleEvent(r),e.dingdanzhuangtaiChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{width:"100%",lineHeight:"80rpx",fontSize:"28rpx",color:"#666666"}},[e._v(e._s(e.ruleForm.dingdanzhuangtai?e.ruleForm.dingdanzhuangtai:"请选择订单状态"))])],1)],1),t("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#cccccc",alignItems:"center",borderRadius:"8rpx 0 0 8rpx",borderWidth:"0px",background:"#e7fefc",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("备注")]),t("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.beizhu,placeholder:"备注"},model:{value:e.ruleForm.beizhu,callback:function(r){e.$set(e.ruleForm,"beizhu",r)},expression:"ruleForm.beizhu"}})],1),t("v-uni-view",{staticClass:"btn",style:{width:"100%",justifyContent:"center",display:"flex",height:"auto"}},[t("v-uni-button",{staticClass:"bg-red",style:{border:"0px solid #eeeeee",padding:"0 0 0 0",boxShadow:"0px 12rpx 12rpx -12rpx #228a7f",margin:"0 4% 0 0",color:"#ffffff",borderRadius:"40rpx 0 0 0",background:"#75ebde",width:"30%",lineHeight:"80rpx",fontSize:"28rpx",height:"80rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)],1)},a=[];t.d(r,"b",(function(){return n})),t.d(r,"c",(function(){return a})),t.d(r,"a",(function(){return i}))},cf5b:function(e,r,t){"use strict";var i=t("afa1"),n=t.n(i);n.a}}]);
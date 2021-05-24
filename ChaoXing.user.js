// ==UserScript==
// @name          超星便捷
// @description   视频解除鼠标限制，允许快进、拖动，PDF快速翻页、跳转，作业允许粘贴（请勿大量刷课，封号斗罗警告）
// @namespace     FuckChaoxingScript
// @author        涛之雨
// @version       1.4.8
// @grant         GM_addStyle
// @run-at        document-start
// @require       https://greasyfork.org/scripts/18715-hooks/code/Hooks.js?version=661566
// @require       https://libs.baidu.com/jquery/2.1.4/jquery.min.js
// @require       https://greasyfork.org/scripts/29782-docsready/code/docsReady.js?version=603417
// @require       https://greasyfork.org/scripts/399356-dtoast/code/DToast.js?version=787349
// @match         *://*.fanya.chaoxing.com/*
// @match         *://i.mooc.chaoxing.com/*
// @match         *://*.chaoxing.com/space/*
// @match         *://*.chaoxing.com/mycourse/studentcourse*
// @match         *://*.chaoxing.com/mycourse/studentstudy*
// @match         *://*.chaoxing.com/ananas/modules/pdf/index.html*
// @match         *://*.chaoxing.com/ananas/modules/ppt/index.html*
// @match         *://*.chaoxing.com/ananas/modules/video/index.html*
// @match         *://*.chaoxing.com/ananas/modules/work/index.html*
// @match         *://*.chaoxing.com/work/doHomeWorkNew*
// @match         *://*.chaoxing.com/knowledge/cards*
// @license       BSD 2-Clause
// @icon          https://i.loli.net/2020/03/04/D3h1iWSFeyc8AKG.png
// @updateURL     https://cdn.jsdelivr.net/gh/taozhiyu/tampermonkeyjs@master/ChaoXing.user.js
// @downloadURL   https://cdn.jsdelivr.net/gh/taozhiyu/tampermonkeyjs@master/ChaoXing.user.js
// @supportURL    https://github.com/taozhiyu/tampermonkeyjs/issues
// @homepageURL   https://github.com/taozhiyu/tampermonkeyjs/
// ==/UserScript==
/**************************\
 * greasyfork: https://greasyfork.org/zh-CN/scripts/403935
 * V1.4.8
 * 修复了对新版ppt/pdf按钮的适配问题
 * V1.4.7
 * 对新版视频播放器的适配（怎么又更新了。。。）
 * V1.4.6
 * 新增Ctrl+左右键快速跳转首末页
 * 修复按键绑定事异常
 * 修复对于图片加载的判定报错问题
 * V1.4.5
 * 修复页面旧数据无效导致的bug
 * V1.4.4
 * 修复部分历史问题，增加稳定性和纠正语法错误
 * 新增考试/作业见面Ctrl+s随手保存功能（防止手滑）
 * 新增对新版的PPT页面支持
 * V1.4.3
 * 删除超星和腾讯课堂的签到支持，单独抽取出新的脚本
 * 参见：https://greasyfork.org/zh-CN/scripts/401115
 * V1.4.2
 * 适配新版超星的PDF/PPT翻页（天天要重新适配(╬￣皿￣)=○）
 * 顺便精简了部分的代码
 * V1.4.1
 * 增加了一个右下角的HOME图标（其实没啥用。。。）
 * 精简代码，删除臃肿部分
 * 优化了流程，（大更改。。。新旧版本的比较可以查看我的git小站）
 * 删除了所有注释。。。。（其实是不小心删除的。。。。。）
 * 如果需要看注释请查看旧版本（链接：http://taozhiyu.rthe.net/fuckcx_52_v1.3.11_backup.js）
 * V1.3.12
 * 修改了部分遮挡文本的布局
 * 增加PDF/PPT页面左右按键快速翻页
 * 增加视频上下（音量增减）左右（快退进）空格（暂停/播放）的按键操作
 * 增加了一些奇怪的文字
 * V1.3.11
 * 增加对于非任务点的视频页面切换的支持（互相切换按钮）
 * V1.3.10
 * 修复了对于非任务PDF/PPT界面
 * 对部分流程进行了优化
 * 增加对于不同版本的适配，之前咱不知道啊(╬￣皿￣)=○
 * 增加了视屏倍速的选择框和视频实际倍速同步的功能
 * V1.3.9
 * 修复了对于视屏倍速的重新适配
 * 精简了部分代码
 * V1.3.8
 * 修复了新版ppt/pdf页面动态加载导致无法快速跳转的bug
 * 修复了【作业】界面提示文字不显示的bug
 * V1.3.7
 * 修复了部分ppt/pdf页面只有一页时跳转功能显示和点击跳转后出错的bug
 * 修复了对于部分学校视频界面显示不全的bug
 * V1.3.6
 * 增加了对于ppt页面的适配（参见pdf的功能）
 * V1.3.5
 * 增加了快速跳转到某一页
 * 增加了对于【拓展】页面视频的支持
 * V1.3.4
 * 增加了PDF快速跳转到某一页
 * V1.3.3
 * 增加了取消作业界面禁止粘贴的限制
 * 增加了对于PDF页面2分钟后显示上下页时间的修改（改为1秒）和渐隐插件未生效提醒
 * 增加了对于学习所有网页的图标支持
 * 多视频时视频同时自动播放，混乱，去除。
 * V1.3.2
 * 增加了对于PDF的时长强制改为1秒钟（我们学校为2分钟一页）
 * 增加了5秒后视频自动播放
 * V1.3.1
 * 增加了对于新版json的支持
\**************************/
!function(){var e;!function(){var e=document.createElement("link");e.type="image/x-icon",e.rel="icon",e.href="https://i.loli.net/2020/03/04/D3h1iWSFeyc8AKG.png",document.getElementsByTagName("head")[0].appendChild(e);var t=document.createElement("link");t.type="image/x-icon",t.rel="shortcut icon",t.href="https://i.loli.net/2020/03/04/D3h1iWSFeyc8AKG.png",document.getElementsByTagName("head")[0].appendChild(t)}(),null!==location.href.match(/knowledge\/cards/)&&(window.onload=function(){$(document).keydown(function(e){var t=e||window.event;38!==t.keyCode&&40!==t.keyCode&&37!==t.keyCode&&39!==t.keyCode&&32!==t.keyCode||t.preventDefault()}),0!==$("iframe").length&&(console.log("%c\u5f53\u524d\u754c\u9762\u6709%c"+$("iframe").length+"\u4e2a%c\u5b66\u4e60\u5b50\u9875\u9762","color:black","color:red;font-size:20px","color:black"),$("iframe").each(function(){var e=$(this)[0].src;if(null!==e.match(/video/)){var t=$.parseJSON($(this)[0].getAttribute("data").toString());t.danmaku=0,t.fastforward=!1,t.switchwindow=!1,$(this)[0].setAttribute("data",JSON.stringify(t)),$(this)[0].style.height="645px",$(this)[0].src=$(this)[0].src}if(null!==e.match(/doHomeWorkNew/)){$(".ans-job-icon")[0].style.width="100%";$(".ans-job-icon").append('<p style="color:blue;float:right;font-size: 13px;">\u5141\u8bb8\u7c98\u8d34&nbsp;\uff1a\u6d9b\u4e4b\u96e8&nbsp;&nbsp;\u5982\u679c\u5931\u6548\uff0c\u53ef\u4ee5\u6309\u3010F5\u3011\u952e\u5237\u65b0\uff08\u6ce8\u610f\u4fdd\u5b58\u54e6\uff09</p>')}null===e.match(/pdf/)&&null===e.match(/ppt/)||top.window.scrollBy(0,241)}))}),null===location.href.match(/pdf/)&&null===location.href.match(/ppt/)||($(document).ready(function(){GM_addStyle(".imglook{height:unset!important;}")}),window.onload=function(){var e,t,n,o,i=function(e){Number(e)!=Number(c)?$("#btn_r")[0].style.display="":$("#btn_r")[0].style.display="none",1!=Number(e)?$("#btn_l")[0].style.display="":$("#btn_l")[0].style.display="none"},r=!1;function l(e){var t=e||window.event;return t&&37===t.keyCode&&t.ctrlKey?($("#btn_l")[0].click(),!1):t&&39===t.keyCode&&t.ctrlKey?($("#btn_r")[0].click(),!1):t&&37===t.keyCode?(Number($(".num")[0].innerHTML)>1?$(".preBtn")[0].click():alert("\u8fd9\u5df2\u7ecf\u662f\u7b2c\u4e00\u9875\u4e86\u3002\u6211\u6000\u7591\u4f60\u518d\u641e\u4e8b\u60c5\u4f46\u662f\u6211\u6ca1\u6709\u8bc1\u636e\n\u6253\u6d17\u4f60 \uff08\u256c\uffe3\u76bf\uffe3\uff09\uff1d\u25cb\uff03\uff08\uffe3\uff03\uff09\uff13\uffe3\uff09 "),!1):t&&39===t.keyCode?(Number($(".num")[0].innerHTML)<c?$(".nextBtn")[0].click():alert("\u5df2\u7ecf\u5230\u6700\u540e\u4e86\u3002\u3002\u3002\u3002\u3002\n\u5b66\u4e60\u4e5f\u4e0d\u81f3\u4e8e\u8fd9\u4e48\u6295\u5165\u5427\u3002\u3002\u3002\u3002"),!1):void(t&&38===t.keyCode?$(".imglook")[0].scrollTop-=30:t&&40===t.keyCode&&($(".imglook")[0].scrollTop+=30))}var a=$.parseJSON(window.frameElement.getAttribute("data").toString());if(a.jobid||a.btime){var c=-1;try{c=window.data.pagenum}catch(e){}if(-1==c)var d=setInterval(function(){0!==$(".documentImg").length&&void 0!==$(".documentImg")[0]&&$(".documentImg")[0].complete&&r&&(clearInterval(d),c=Number($(".all")[0].innerHTML),i(Number($(".num")[0].innerHTML)))},10);else setTimeout(()=>{i(c)},1e3);try{window.data.timing=0}catch(e){}!function d(){var s=setTimeout(function(){0==document.querySelectorAll(".turnpage_Btn").length&&(clearTimeout(s),d());var u=0,p=0,m=0;e='<p style="color:red;position:fixed;top:0;left:0;width:100%;font-size: 10px;opacity:1">PDF\u4e0a\u4e0b\u9875\u5f3a\u5236\u663e\u793a&\u7b2c\u4e00\u9875\u6700\u540e\u4e00\u9875&\u9875\u9762\u8df3\u8f6c&nbsp;\uff1a\u6d9b\u4e4b\u96e8</br>\u7b2c\u4e00\u6b21\u52a0\u8f7d\u53ef\u80fd\u6bd4\u8f83\u6162\uff0c\u5982\u679c\u9875\u9762\u52a0\u8f7d\u5b8c\uff0c\u201c\u524d\u540e\u9875\u201d\u548c\u201c\u7b2c\u4e00/\u6700\u540e\u4e00\u9875\u201d\u6309\u94ae5\u79d2\u949f\u5185\u6ca1\u6709\u51fa\u73b0\uff0c\u8bf7\u6309\u3010F5\u3011\u952e\u5237\u65b0</p>',(t=document.createElement("div")).id="mysellectid",document.querySelectorAll(".turnpage_Btn")[0].insertBefore(t,document.querySelectorAll(".turnpage_Btn")[0].children[0].firstChild),$("#mysellectid").append(e);var f=document.createElement("div");f.id="btn_l",f.title="\u7b2c\u4e00\u9875",f.style="display:none;background: url(https://s2.ax1x.com/2020/03/09/8pKLNQ.png) no-repeat;width: 60px;height: 60px;position: fixed;left: 20px;top: 50%;margin-top: -30px;z-index: 10;cursor: pointer;",$(".imglook")[0].insertBefore(f,$(".imglook")[0].firstChild);var y=document.createElement("div");y.id="btn_r",y.title="\u6700\u540e\u4e00\u9875",y.style="display:none;background: url(https://s2.ax1x.com/2020/03/09/8pKOhj.png) no-repeat;width: 60px;height: 60px;position: fixed;right: 20px;top: 50%;margin-top: -30px;z-index: 10;cursor: pointer;",$(".imglook")[0].insertBefore(y,$(".imglook")[0].firstChild),document.createElement("span").innerHTML="\u8df3\u8f6c\u5230\u7b2c[<input id='goto_num' style='width:20px;BACKGROUND-COLOR:aliceblue;BORDER-RIGHT: 0px solid; BORDER-TOP: 0px solid; BORDER-LEFT: 0px solid; BORDER-BOTTOM: 0px solid;' type='editor'/>]\u9875";var h=document.createElement("span");h.innerHTML="<span style='font-size:2px;color:blue'>   POWER BY\uff1a\u6d9b\u4e4b\u96e8</span>",$(".fl.pageInfo").append(h),r=!0;var g=function(){m=0,clearInterval(u),clearTimeout(p),$("#mysellectid")[0].style.opacity=1,p=setTimeout(function(){u=setInterval(function(){$("#mysellectid")[0].style.opacity<=0?($("#mysellectid")[0].style.opacity=0,$("#mysellectid")[0].innerHTML='<p style="color:blue;position:fixed;top:0;left:0;width:100%;font-size: 10px;opacity:1">PDF\u4e0a\u4e0b\u9875\u5f3a\u5236\u663e\u793a&\u7b2c\u4e00\u9875\u6700\u540e\u4e00\u9875&\u9875\u9762\u8df3\u8f6c&nbsp;\uff1a\u6d9b\u4e4b\u96e8</p>',clearInterval(u)):$("#mysellectid")[0].style.opacity-=.07},100)},5e3)};$(".preBtn")[0].onclick=function(){i(Number($(".num")[0].innerHTML)),g()},$(".nextBtn")[0].onclick=function(){i(Number($(".num")[0].innerHTML)),g()},g();var w=function(e=c){var t=!0,n=Number(e)-Number($(".num")[0].innerHTML);for(0===n?alert("\u4f60\u81ea\u5df1\u770b\u770b\u4f60\u73b0\u5728\u591a\u5c11\u9875\uff1f\uff01\n\u6709\u610f\u601d\u6492\uff1f"):n>0?t=!0:(t=!1,n=-n);n;n--)t?$(".nextBtn")[0].click():$(".preBtn")[0].click()};$("#btn_r").click(function(){w()}),$("#btn_l").click(function(){w(1)}),$("#goto_num").keydown(function(e){if(13==e.keyCode){var t,n=$(this)[0].value;return new RegExp("[0-9]+").test(n)?(t=Number(n))<=0||t>c?(o(t,!0),!1):(1==t?alert("\u4f60\u778e\u554a\uff0c\u770b\u4e0d\u89c1\u5de6\u8fb9\u6709\u4e2a\u201c\u7b2c\u4e00\u9875\u201d\u7684\u56fe\u6807\u554a\uff01\uff01\uff01\n\u5206\u4e0d\u6e05\u54ea\u4e00\u4e2a\uff1f\u9f20\u6807\u653e\u4e0a\u53bb\u7b49\u4e00\u4f1a\u5c31\u6709\u63d0\u9192\u4e86\u554a\uff01\n\u867d\u7136\u4e00\u884c\u8bdd\u5c31\u80fd\u89e3\u51b3\u8df3\u8f6c\u5230\u7b2c\u4e00\u9875\uff0c\u4f46\u662f\u6211\u4e0d\u613f\u610f\uff01"):t==Number(c)?alert("\u4f60\u778e\u554a\uff0c\u770b\u4e0d\u89c1\u53f3\u8fb9\u6709\u4e2a\u201c\u6700\u540e\u4e00\u9875\u201d\u7684\u56fe\u6807\u554a\uff01\uff01\uff01\n\u5206\u4e0d\u6e05\u54ea\u4e00\u4e2a\uff1f\u9f20\u6807\u653e\u4e0a\u53bb\u7b49\u4e00\u4f1a\u5c31\u6709\u63d0\u9192\u4e86\u554a\uff01\n\u867d\u7136\u4e00\u884c\u8bdd\u5c31\u80fd\u89e3\u51b3\u8df3\u8f6c\u5230\u7b2c\u4e00\u9875\uff0c\u4f46\u662f\u6211\u4e0d\u613f\u610f\uff01"):w(t),$(this)[0].value="",!0):(o(n,!1),!1)}function o(e,t){return m>=3?(alert("\u76ae\u76ae\u76ae\uff01\uff01\uff01\u8fd8\u76ae\uff01\n\u76ae\u65ad\u817f\u4e86\u5427o(\xb4^\uff40)o"),void(window.top.location.href="https://taozhiyu.gitee.io/bd?q=.")):(t?alert("\u4e0d\u8981\u76ae\u597d\u4e0d\u597d\u30fe(\uff61\uff40\u0414\xb4\uff61)\uff89\u5f61\u3002\u3002\u3002\n\u4e00\u5171\u53ea\u6709"+c+"\u9875\uff0c\u4f60\u8ba9\u6211\u600e\u4e48\u8df3\u5230\u7b2c"+e+"\u9875 (\u256c\uffe3\u76bf\uffe3)\n\u505a\u811a\u672c\u5f88\u7d2f\u7684\u597d\u4f10\uff01\uff01\uff01"):alert("\u4e0d\u8981\u76ae\u597d\u4e0d\u597d\u30fe(\uff61\uff40\u0414\xb4\uff61)\uff89\u5f61\u3002\u3002\u3002\n\u4f60\u8ba9\u6211\u600e\u4e48\u8df3\u5230\u7b2c"+e+"\u9875 (\u256c\uffe3\u76bf\uffe3)\n\u4f60\u544a\u8bc9\u6211\u90a3\u4e00\u9875\u662f\u7b2c"+e+"\u9875\uff1f\uff01\uff01\n\u4f60\u5bb6\u9875\u6570\u4e0d\u662f\u6570\u5b57\u554a\uff01\uff01\uff01\n\u505a\u811a\u672c\u5f88\u7d2f\u7684\u597d\u4f10\uff01\uff01\uff01"),$(this)[0].value="",m++,!1)}}),top.document.onkeydown=function(e){return l(e),0},parent.document.onkeydown=function(e){return l(e),0},document.onkeydown=function(e){return l(e),0},1==a.isTao&&(o='<p style="width: 25px;height: 25px;line-height: 25px;text-align: center; font-size: 3px; color: #ffffff;">On</p>',(n=document.createElement("div")).id="My_choose",n.style="border-radius: 50%;background-color:#d71345;width:25px;height:25px;position:fixed;right:2px;top:0%;z-index:10;cursor:pointer;-moz-background-size:100% 100%;-o-background-size:100% 100%;-webkit-background-size:100% 100%;background-size:100% 100%;",$(".imglook")[0].insertBefore(n,$(".imglook")[0].firstChild),$("#My_choose").append(o),$("#My_choose").click(function(){a.isTao=0,a.jobid="",a.btime="",window.frameElement.setAttribute("data",JSON.stringify(a)),location.href=location.href+(location.href.indexOf("?")>-1?"&":"?")+"wuai="+(new Date).getTime()}))},100)}()}else e='<p style="color:red;position:fixed;top:0;left:0;width:100%;font-size:15px;">\u6ca1\u6709\u4f5c\u4e1a\u4efb\u52a1\u7684PDF\u5c31\u4e0d\u9700\u8981\u6211\u4e86\u5427\u3002\uff08\u90a3\u6211\u9690\u9000\u4e86,\u53f3\u8fb9\u6709\u5f00\u5173\u3002\u81ea\u5df1\u73a9\u5427\uff09</p>',(t=document.createElement("div")).id="mysellectid",document.querySelectorAll(".turnpage_Btn")[0].insertBefore(t,document.querySelectorAll(".turnpage_Btn")[0].children[0].firstChild),$("#mysellectid").append(e),o='<p style="width: 25px;height: 25px;line-height: 25px;text-align: center; font-size: 3px; color: #ffffff;">Off</p>',(n=document.createElement("div")).id="My_choose",n.style="border-radius: 50%;background-color:#ffc20e;width:25px;height:25px;position:fixed;right:20px;top:0%;z-index:10;cursor:pointer;-moz-background-size:100% 100%;-o-background-size:100% 100%;-webkit-background-size:100% 100%;background-size:100% 100%;",$(".imglook")[0].insertBefore(n,$(".imglook")[0].firstChild),$("#My_choose").append(o),$("#My_choose").click(function(){a.isTao=1,""!==a._jobid?a.jobid=a._jobid:a.btime=1,window.frameElement.setAttribute("data",JSON.stringify(a)),location.href=location.href+(location.href.indexOf("?")>-1?"&":"?")+"time="+(new Date).getTime()}),setTimeout(function(){$("#mysellectid")[0].style.opacity=1;var e=setInterval(function(){$("#mysellectid")[0].style.opacity-=.01,$("#mysellectid")[0].style.opacity<=0&&(clearInterval(e),$("#mysellectid")[0].style.opacity=0)},200)},1e3)}),null!==location.href.match(/doHomeWorkNew/)&&$(document).ready(function(){document.onkeydown=function(e){e.preventDefault();var t=e||event||window.event;if(83==(t.keyCode||t.which||t.charCode)&&(t.ctrlKey||t.metaKey))return noSubmit(),!1};var e=setInterval(function(){try{window.myEditor_paste="",window.pasteText=""}catch(e){}},1);setTimeout(function(){clearInterval(e)},5e3)}),null!==location.href.match(/video/)&&(e=setInterval(function(){try{var e=window.frameElement.getAttribute("data").toString();e.indexOf('"danmaku":1')&&(window.frameElement.setAttribute("data",e.replace(/"danmaku":1/g,'"danmaku":0')),console.log("danmaku\u62e6\u622a")),e.indexOf('"fastforward":false')&&(window.frameElement.setAttribute("data",e.replace(/"fastforward":false/g,'"fastforward":true')),console.log("fastforward\u62e6\u622a")),e.indexOf('"switchwindow":1')&&(window.frameElement.setAttribute("data",e.replace(/"switchwindow":false/g,'"switchwindow":true')),console.log("switchwindow\u62e6\u622a"));var t=0;window.Ext.EventManager.mouseLeaveRe={test:e=>{/mouseout/.test(e)&&(t++,console.log("\u5df2\u4e3a\u60a8\u8fc7\u6ee4"+t+"\u6b21\u9f20\u6807\u79fb\u51fa\u6682\u505c"))}}}catch(e){}},1),setTimeout(function(){clearInterval(e)},5e3),window.onload=function(){var e=document.createElement("div");e.id="mysellectid",$("body")[0].insertBefore(e,$("body")[0].firstChild),$("#mysellectid").append("<font color='#238E23' size=2>\u64ad\u653e\u901f\u5ea6\uff1a</font><select style='text-align:center;text-align-last:center;padding-left:6px;margin:-0.6rem 0;' class='select_class_name'><option value='0.5'>0.5</option><option value='1' selected='selected'>1</option><option value='1.25'>1.25\uff08\u6162\u5feb\u63a8\u8350\uff09</option><option value='1.5'>1.5</option><option value='2'>2</option><option value='2.6'>2.6\uff08\u5feb\u63a8\u8350\uff09</option><option value='3'>3</option><option value='4'>4</option></select><font color='blue' size=2>  POWER BY\uff1a\u6d9b\u4e4b\u96e8  </font><font style='background-color: rgb(255,165,0);color: white;position: fixed;right: 0px;' size=1>\u672c\u9875\u9762\u4e0a\u4e0b\u5de6\u53f3\u7a7a\u683c\u5df2\u7ed1\u5b9a\u89c6\u9891\uff0c\u53ef\u4ee5\u5feb\u8fdb\u9000\u3001\u589e\u51cf\u97f3\u91cf</font><br /><font color='red' size=2>\u5982\u679c\u672a\u751f\u6548\u8bf7\u5237\u65b0\uff0c\u591a\u6b21\u5237\u65b0\u65e0\u6548\u8bf4\u660e\u5931\u6548\u4e86\uff0c\u8bf7\u8ba4\u771f\u5b66\u4e60\uff0c\u7b49\u6211\u8865\u5427(\u540e\u9762\u6ca1\u6709\u5b57\u4e86)</font><font color='azure' size=1>\uff08\u90a3\u662f\u4e0d\u53ef\u80fd\u7684\uff09</font>"),$(".select_class_name").change(function(){$("video")[0].playbackRate=$(this).val()});var t=setInterval(function(){try{$("video")[0].onratechange=function(){$(".select_class_name").val($("video")[0].playbackRate)},clearInterval(t),e=$("video")[0],$(document).keydown(function(e){if("input"==e.target.tagName.toLowerCase())return 1;var t=e||window.event;38!==t.keyCode&&40!==t.keyCode&&37!==t.keyCode&&39!==t.keyCode&&32!==t.keyCode||t.preventDefault()}),document.onkeyup=function(t){if("input"==t.target.tagName.toLowerCase())return 1;var n=t||window.event;return n&&38===n.keyCode?(1===e.volume||(e.volume+=.1),!1):n&&40===n.keyCode?(0===e.volume||(e.volume-=.1),!1):n&&37===n.keyCode?(0===e.currentTime||(e.currentTime-=10),!1):n&&39===n.keyCode?(e.volume===e.duration||(e.currentTime+=10),!1):n&&32===n.keyCode?(!0===e.paused?e.play():e.pause(),!1):void 0}}catch(e){}var e},1)})}();

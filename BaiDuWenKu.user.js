// ==UserScript==
// @icon         https://edu-wenku.bdimg.com/v1/na/0807/%E6%96%87%E5%BA%93APPicon-1603434254133.png
// @name         百度文库-精简&优化
// @namespace    wenku.taozhiyu.gitee.io
// @version      0.3.14
// @description  删除主页广告、邀请、垃圾内容
// @author       涛之雨
// @home-url	 https://greasyfork.org/zh-CN/scripts/422847
// @match        *://wenku.baidu.com/*
// @grant	     GM_addStyle
// @grant	     unsafeWindow
// @license      GPL-3.0-only
// @run-at       document-start
// ==/UserScript==
/**********************************************\
 * V 0.3.14
 * 解！锁！免！VIP！复！制！
 * 规范化插件命名空间（如果重复安装请手动删除旧版本）
 * V 0.3.13
 * 新增屏蔽“兴趣”弹窗
 * V 0.3.12
 * 新增“自动滚屏”按钮（位于右下角）（主要用于ctrl+p渲染页面使用）
 * 点击后自动滚屏，再次点击后停止滚屏
 * 滚动过程中：向上滚动页面，滚动暂停；向下滚动则会继续滚动
 * 新增页面对打印的优化（包括移除防止打印、删除顶部栏、缩放界面等）
 * 修复了一个未识别到的广告
 * V 0.3.11
 * 新增对于【工具箱】引导的拦截
 * V 0.3.10
 * 添加对新版开屏弹窗的支持
 * V 0.3.9
 * 修复新弹窗未屏蔽的bug
 * V 0.3.8
 * 修复新弹窗未屏蔽的bug
 * 修复部分页面广告、logo未删除的bug，等
 * V 0.3.7
 * 移除文件页的水印
 * 对文库搜索页添加适配
 * 首页banner广告改为固定图片
 * 移除首页bd恰饭内容（推荐，限时降价，VIP推荐等）
 * 修改脚本运行的时机，以减少延时感
 * V 0.3.6
 * 因仅word支持背景色，暂时移除
 * V 0.3.5
 * 添加背景色
 * V 0.3.4
 * 删除文章尾部版权说明
 * V 0.3.3
 * 版本号错乱，强制升级
 * V 0.3.2
 * 修复按钮判断逻辑错误！
 * V 0.3.1
 * 修复不能自动展开文章的bug
 * 添加未登录的逻辑算法
 * 新增对于屏蔽登录框配置的保存
 * 新增点击【登陆】按钮还原的算法
 * V 0.2.2
 * 添加GPL-3.0-only协议
 * V 0.2.1
 * 锁定隐藏首页“邀请好友”banner
 * 实现免VIP全屏阅读
 * 全局滚动条美化
 * 修改文库页面的图标
 * 重构去除广告代码
 * 屏蔽文章末尾的结束提示（因为会遮盖部分界面）
 * 自动加载全部页面
 * 移除主题按钮
 * V 0.1.1
 * 初版，删除精简大部分垃圾、广告等
 * TODO : 实现免VIP全屏阅读
 * TODO : 免VIP复制等
\************************************************/
!()=>{"use strict";const n=unsafeWindow||window,e=n=>{localStorage.setItem("taozhiyuWKBeautify",JSON.stringify(n))},r=()=>JSON.parse(localStorage.getItem("taozhiyuWKBeautify"));let A=r()&&Object.keys(r()).length>0?r():{noLogin:0};setTimeout(()=>{n.pageData&&n.pageData.vipInfo&&(n.pageData.vipInfo.global_vip_status=2),(n=>{let e=document.querySelector('link[rel="shortcut icon"]'),r=document.querySelector('link[rel="icon"]');e&&(e.href=n),r&&(r.href=n),e||r||((e=document.createElement("link")).rel="icon",e.href=n,document.head.appendChild(e))})("https://edu-wenku.bdimg.com/v1/na/0807/%E6%96%87%E5%BA%93APPicon-1603434254133.png")},1e3);const a=(n=!0)=>{if(n)GM_addStyle(".\u6d9b\u4e4b\u96e8\u52ab\u6301\u767b\u5f55style,.pop-mask,.tang-foreground,.left-login,.tang-background,#passport-login-pop{display:none!importantwidth:0!important;overflow:hidden!important;z-index:-99999!important;}"),document.querySelector(".user-icon-wrap").onclick=(n=>{a(!1)});else{A.noLogin=0,e(A);for(var r=document.getElementsByTagName("style"),t=0;t<r.length;t++)r[t].innerHTML.indexOf("\u6d9b\u4e4b\u96e8\u52ab\u6301\u767b\u5f55style")>=0&&r[t].remove()}};GM_addStyle('.copyright-wrap,.edit-subscription-dialog-wrapper.mod,.cover-img-ie8,.user-guide-mask,.opening-season-dialog,[class*=pay-],.vip-wrapper,.client-wrapper,.privilege-merging-dialog-wrap,.notice-info-wrap,.dialog-wraper,.active-dialog-wrapper,.client-download-wrap,.product,.red-text.bold-text,#fengchaoad,.tousu,.new-vip-card-position,.top-recommend-dsp-ad,.woniu-wrap,.topicBox,.search-topicBox-wrap,.author-organizition-wrapper,.search-aside-adWrap,#mywenku,.doc-pack-wrapper,.vip-content-wrapper,.promotion-wrapper,.user-card-wrapper,.slide-wrapper,.bg-wrapper,.slide-circle-wrapper,.operate-wrapper,.voucher-pop-tip,.theme-wap,.experience-card-wrap,.convert-btn-point,.try-end-fold-page,.bottom-pop-wrap,.pure-guide-dialog,.vip-card-wrap,.vip-pop-wrap,.inner-vip,.vip-pop-wrap,.inner-vip,.hx-bottom-wrapper,.hx-recom-wrapper,.qr-wrapper,.feedback-wrapper,.hx-right-wrapper.sider-edge,.app-btn,.hx-warp,.client-btn-wrap,.relative-doc-ad-wrapper,.red-point,.tips,.ex-wrapper,.vip-activity-wrap-new,.bz-doc-tool-dialog-fix,.fixed-activity-bar,.hx-warp,.operation-wrapper,.reader-page > div:nth-last-child(1),.ppt-page-item > div:nth-last-child(1),.doc-tool-dialog-wrapper{display:none!important;width:0!important;overflow:hidden!important;}/*:last-of-type:nth-last-child(1)*/.header-wrapper{background-repeat: no-repeat;background-position: 50% 0;background-size: cover;height: 100%;background-image: url(https://edu-wenku.bdimg.com/v1/pc/2020%E4%BA%8C%E7%BA%A7%E9%A1%B5/%E5%AD%A6%E5%89%8D%E6%95%99%E8%82%B2-1584342432680.png)!important;}.product-line-wrap{float: left;padding-left: 22px;}.red-dot,.red-dot:after{background-color:unset!important;}.small-btn-wrap{float:unset!important;}.bg-items-wrapper{margin-left:0!important;}body{overflow-y: scroll!important;}::-webkit-scrollbar-track{-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);border-radius: 10px;background-color: #F5F5F5;}::-webkit-scrollbar{width: 8px;height: 8px;background-color: #F5F5F5;}::-webkit-scrollbar-thumb{border-radius: 10px;-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);background-color: #c1c1c1;}/*\u6253\u5370\u5c4f\u853d*/@media print {body {display: unset!important}.reader-topbar,.lazy-load{display:none}.content-wrapper{padding:0}/*\u5c4f\u853d\u5bfc\u51fa\u811a\u672c*/.crx_bdwk_down_wrap{display:none}}/*\u6eda\u52a8\u6309\u94ae*/.backtop-wrapper #autoroll {    margin-bottom: 5px;    width: 40px;    height: 40px;    border-radius: 6px;    border: 1px solid #f5f5f5;    background-size: 40px 40px;    background-repeat: no-repeat;    background-image: url("data:image/gif;base64,R0lGODlhMAAwAHAAACH5BAEAAPwALAAAAAAwADAAhwAAAAAAMwAAZgAAmQAAzAAA/wArAAArMwArZgArmQArzAAr/wBVAABVMwBVZgBVmQBVzABV/wCAAACAMwCAZgCAmQCAzACA/wCqAACqMwCqZgCqmQCqzACq/wDVAADVMwDVZgDVmQDVzADV/wD/AAD/MwD/ZgD/mQD/zAD//zMAADMAMzMAZjMAmTMAzDMA/zMrADMrMzMrZjMrmTMrzDMr/zNVADNVMzNVZjNVmTNVzDNV/zOAADOAMzOAZjOAmTOAzDOA/zOqADOqMzOqZjOqmTOqzDOq/zPVADPVMzPVZjPVmTPVzDPV/zP/ADP/MzP/ZjP/mTP/zDP//2YAAGYAM2YAZmYAmWYAzGYA/2YrAGYrM2YrZmYrmWYrzGYr/2ZVAGZVM2ZVZmZVmWZVzGZV/2aAAGaAM2aAZmaAmWaAzGaA/2aqAGaqM2aqZmaqmWaqzGaq/2bVAGbVM2bVZmbVmWbVzGbV/2b/AGb/M2b/Zmb/mWb/zGb//5kAAJkAM5kAZpkAmZkAzJkA/5krAJkrM5krZpkrmZkrzJkr/5lVAJlVM5lVZplVmZlVzJlV/5mAAJmAM5mAZpmAmZmAzJmA/5mqAJmqM5mqZpmqmZmqzJmq/5nVAJnVM5nVZpnVmZnVzJnV/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wrAMwrM8wrZswrmcwrzMwr/8xVAMxVM8xVZsxVmcxVzMxV/8yAAMyAM8yAZsyAmcyAzMyA/8yqAMyqM8yqZsyqmcyqzMyq/8zVAMzVM8zVZszVmczVzMzV/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8rAP8rM/8rZv8rmf8rzP8r//9VAP9VM/9VZv9Vmf9VzP9V//+AAP+AM/+AZv+Amf+AzP+A//+qAP+qM/+qZv+qmf+qzP+q///VAP/VM//VZv/Vmf/VzP/V////AP//M///Zv//mf//zP///wAAAAAAAAAAAAAAAAjPAPcJHEiwoMGDCBMqXMiwocOHECNKnEixosWLGDNq3MixI0QAAAqC9JhwJEGQIUkaNDkQZUqVLV8KdClTJcuZIVHCxCkypU6YN/ex/Eky6M2gFmsaVbrxqNKaHIku3flzKtWRVq8S5bkTZ9auW4VCBfq0q9mzaNOqXSt2q1OvNGOGRRg35kmfNIe6XPiWq9+/X3vetUu4sFjBdPO+7Gs48N28jcsaPpxYZGTEfykfNHp58GSknzuLzuy5ZU/QSOuWZPp4bOq9bGPLnk27tsaAADs=");}.backtop-wrapper #autoroll:hover {filter: drop-shadow(2px 3px 5px black);}.backtop-wrapper #autoroll.btnon {    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAXIaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwMiA3OS4xNjQ0NjAsIDIwMjAvMDUvMTItMTY6MDQ6MTcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDUtMDZUMTM6MzA6NTUrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMDUtMDZUMTM6MzA6NTUrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA1LTA2VDEzOjMwOjU1KzA4OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE5MWU4MzdjLTY3NTItNWM0OC05MDgyLThiNDg3ZGYyYTQ1NSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjc5OGYzMGM0LTEzMmYtZWU0YS1hNzIwLTFjZjc4YTA5ZTczYSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmRlNjMxZmZmLWY3NDEtNzY0NS1iZGRhLWQ2MmIzMjg4NjlhNCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmRlNjMxZmZmLWY3NDEtNzY0NS1iZGRhLWQ2MmIzMjg4NjlhNCIgc3RFdnQ6d2hlbj0iMjAyMS0wNS0wNlQxMzozMDo1NSswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxOTFlODM3Yy02NzUyLTVjNDgtOTA4Mi04YjQ4N2RmMmE0NTUiIHN0RXZ0OndoZW49IjIwMjEtMDUtMDZUMTM6MzA6NTUrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7H2v9ZAAABoklEQVRoQ+2ajXHCMAxG7XQT+rMQXYTuURgEulB7HaVAPhNdhJqaYumwnOPdBS5gWj1LVkqdeOgJAy8fm/AznrrkIcbwuVwNZyEkgRYCl3y/vqXnDg+tBQ8ed+v0HJ936wMX6PoUgdOjHyjCPYsV5dSxJZCCR+AYBClPB2JCbDTBALF3++GEwGCvyNgQe1oDBE+PV2Rpnwm0yF2Ag95M/VmSe0/DzTNgLVGlhCwlqq0BK4mbC9CfAMBCokoGLCWqlZCVRDUBwCVKKRKw7CJaieIMeJFQlZClRClFApZdREtxBrxIqErIg4RKAGi7iBa1AKgpYSIAaknExfbd/xdhBv6Vwr/cm2WgFneB2jQvkF3EUxcn2W1ozKXXL13o+Odzv3d2i3gyA/+dVXDNWELzGbmX0VwG5GxnBWDND4/Mu42iFuXhjXlnwCNyg+OqNgrw3l+vc3Lllvv5YKph0Nj5Xcie+gzIjT7PYJeS9vIw+81lQG5E9kJyWZwsUWueDr4/TCD2Zu+VgNDXcjWWECxbgYIHv263oVNvC5tmGmUz3m4TwhGnXEZREtuo9wAAAABJRU5ErkJggg==");}');setInterval(()=>{let n=document.querySelector(".read-all");n&&n.click(),(n=document.querySelector(".btn-know"))&&n.click()},100);let t=setInterval(()=>{if(document.querySelector(".no-login"))if(clearInterval(t),0===A.noLogin){let n=setInterval(()=>{document.querySelector(".pop-mask,#passport-login-pop")&&(clearInterval(n),confirm("\u662f\u5426\u5c4f\u853d\u767b\u5f55\u7a97\u53e3\uff1f\n\u672c\u6d4f\u89c8\u5668\u672c\u7f51\u7ad9\u5c06\u4e00\u76f4\u6709\u6548\uff0c\n\u5982\u9700[\u767b\u5f55]\u6216[\u6e05\u9664\u8bbe\u7f6e]\u8bf7\n\n\u3010\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684\u767b\u9646\u6309\u94ae\u3011")?(A.noLogin=1,e(A),a()):(A.noLogin=2,e(A)))},100)}else 1===A.noLogin&&a()},100);setTimeout(()=>{clearInterval(t);let n=document.querySelector(".small-btn-wrap");if(n){const e=document.createElement("span");e.innerHTML="\u3010\u6d9b\u4e4b\u96e8\u3011\u63d2\u4ef6\u89e3\u9501\u590d\u5236",e.style="color: #666;font-size: 14px;font-family: PingFangSC-Regular;",n.append(e)}document.querySelector("body").addEventListener("copy",n=>{try{n.clipboardData.setData("text",n.target.value.replace(/\n-{56}\n\u4f5c\u8005\uff1a(.|\n)+/,"")),n.preventDefault()}catch(n){console.log("\u53bb\u9664\u5c0f\u5c3e\u5df4\u5931\u8d25o(\u2565\ufe4f\u2565)o")}})},2e3)}();
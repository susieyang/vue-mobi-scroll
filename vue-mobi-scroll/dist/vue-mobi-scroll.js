!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("VueMobiScroll",[],t):"object"==typeof exports?exports.VueMobiScroll=t():e.VueMobiScroll=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(i){if(s[i])return s[i].exports;var a=s[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var s={};return t.m=e,t.c=s,t.d=function(e,s,i){t.o(e,s)||Object.defineProperty(e,s,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,"a",s),s},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=5)}([function(e,t){function s(e,t){var s=e[1]||"",a=e[3];if(!a)return s;if(t&&"function"==typeof btoa){var n=i(a);return[s].concat(a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"})).concat([n]).join("\n")}return[s].join("\n")}function i(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var i=s(t,e);return t[2]?"@media "+t[2]+"{"+i+"}":i}).join("")},t.i=function(e,s){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},a=0;a<this.length;a++){var n=this[a][0];"number"==typeof n&&(i[n]=!0)}for(a=0;a<e.length;a++){var o=e[a];"number"==typeof o[0]&&i[o[0]]||(s&&!o[2]?o[2]=s:s&&(o[2]="("+o[2]+") and ("+s+")"),t.push(o))}},t}},function(e,t,s){function i(e){for(var t=0;t<e.length;t++){var s=e[t],i=h[s.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](s.parts[a]);for(;a<s.parts.length;a++)i.parts.push(n(s.parts[a]));i.parts.length>s.parts.length&&(i.parts.length=s.parts.length)}else{for(var o=[],a=0;a<s.parts.length;a++)o.push(n(s.parts[a]));h[s.id]={id:s.id,refs:1,parts:o}}}}function a(){var e=document.createElement("style");return e.type="text/css",p.appendChild(e),e}function n(e){var t,s,i=document.querySelector("style["+m+'~="'+e.id+'"]');if(i){if(u)return b;i.parentNode.removeChild(i)}if(x){var n=f++;i=d||(d=a()),t=o.bind(null,i,n,!1),s=o.bind(null,i,n,!0)}else i=a(),t=r.bind(null,i),s=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else s()}}function o(e,t,s,i){var a=s?"":i.css;if(e.styleSheet)e.styleSheet.cssText=g(t,a);else{var n=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(n,o[t]):e.appendChild(n)}}function r(e,t){var s=t.css,i=t.media,a=t.sourceMap;if(i&&e.setAttribute("media",i),v.ssrId&&e.setAttribute(m,t.id),a&&(s+="\n/*# sourceURL="+a.sources[0]+" */",s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=s;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(s))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=s(9),h={},p=l&&(document.head||document.getElementsByTagName("head")[0]),d=null,f=0,u=!1,b=function(){},v=null,m="data-vue-ssr-id",x="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,s,a){u=s,v=a||{};var n=c(e,t);return i(n),function(t){for(var s=[],a=0;a<n.length;a++){var o=n[a],r=h[o.id];r.refs--,s.push(r)}t?(n=c(e,t),i(n)):n=[];for(var a=0;a<s.length;a++){var r=s[a];if(0===r.refs){for(var l=0;l<r.parts.length;l++)r.parts[l]();delete h[r.id]}}}};var g=function(){var e=[];return function(t,s){return e[t]=s,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t,s,i,a,n){var o,r=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(o=e,r=e.default);var c="function"==typeof r?r.options:r;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),s&&(c.functional=!0),a&&(c._scopeId=a);var h;if(n?(h=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(n)},c._ssrRegister=h):i&&(h=i),h){var p=c.functional,d=p?c.render:c.beforeCreate;p?(c._injectStyles=h,c.render=function(e,t){return h.call(t),d(e,t)}):c.beforeCreate=d?[].concat(d,h):[h]}return{esModule:o,exports:r,options:c}}},function(e,t,s){"use strict";var i=s(10);t.a={name:"vue-mobi-scroll",components:{mobiScrollPart:i.a},props:["options"],data:function(){return{show:!1,value:"",lastValue:"",parts:[]}},methods:{ready:function(){switch(this.parts=[],this.options.type){case"select":for(var e=0;e<1;e++)this.parts.push({options:{loop:!1,freeMode:!0,label:["",""],height:{allH:180,itemH:34,startTrans:73}},value:"1",selection:[{name:"请选择",disabled:!0},{name:"1",disabled:!1},{name:"2",disabled:!1},{name:"3",disabled:!1},{name:"4",disabled:!1},{name:"5",disabled:!1}]});break;case"date":var t=this.options.origin.split("-");this.parts.push({options:{loop:!1,freeMode:!0,label:["",""],height:{allH:180,itemH:34,startTrans:73}},value:Number(t[0]),selection:this.getYears()}),this.parts.push({options:{loop:!0,freeMode:!0,label:["","月"],height:{allH:180,itemH:34,startTrans:73}},value:Number(t[1]),selection:this.getMonthsByYear(this.parts[0].value)}),this.parts.push({options:{loop:!0,freeMode:!0,label:["",""],height:{allH:180,itemH:34,startTrans:73}},value:Number(t[2]),selection:this.getDaysByMonthYear(this.parts[0].value,this.parts[1].value)});break;case"time":var s=this.options.origin.split(":");this.parts.push({options:{loop:!0,freeMode:!0,label:["",""],height:{allH:180,itemH:34,startTrans:73}},value:s[0],selection:this.getHours()}),this.parts.push({options:{loop:!0,freeMode:!0,label:["",""],height:{allH:180,itemH:34,startTrans:73}},value:s[1],selection:this.getMins()})}},changeVal:function(e,t){if(console.log(e+" "+t),this.parts[t].value=e,"date"===this.options.type)switch(t){case 0:this.parts[t+1].selection=this.getMonthsByYear(this.parts[t].value),this.changeVal(this.parts[t+1].value,1);break;case 1:this.parts[t+1].selection=this.getDaysByMonthYear(this.parts[t-1].value,this.parts[t].value)}},setValue:function(e){switch(this.options.type){case"select":this.parts[0].value=e,this.$refs.part[0].setValue(this.parts[0].value);break;case"date":for(var t=e.split("-"),s=0;s<t.length;s++)this.parts[s].value=Number(t[s]),this.$refs.part[s].setValue(this.parts[s].value);break;case"time":for(var i=e.split(":"),a=0;a<i.length;a++)this.parts[a].value=i[a],this.$refs.part[a].setValue(this.parts[a].value)}},ok:function(){switch(this.show=!1,this.options.type){case"select":this.value="";for(var e=0;e<this.parts.length;e++)this.value+=this.parts[e].value;break;case"date":this.value=this.parts[0].value+"-"+this.parts[1].value+"-"+this.parts[2].value;break;case"time":this.value=this.parts[0].value+":"+this.parts[1].value}},cancel:function(){this.show=!1,""!==this.lastValue&&this.setValue(this.lastValue)},getHours:function(){for(var e=[],t=0;t<10;t++)e.push({name:"0"+t,disabled:!1});for(var s=10;s<24;s++)e.push({name:""+s,disabled:!1});return e},getMins:function(){for(var e=[],t=0;t<10;t++)e.push({name:"0"+t,disabled:!1});for(var s=10;s<60;s++)e.push({name:""+s,disabled:!1});return e},getYears:function(){var e=this.options.min.split("-"),t=this.options.max.split("-"),s=[];s=[];for(var i=Number(e[0]);i<=Number(t[0]);i++)s.push({name:i,disabled:!1});return s},getMonthsByYear:function(e){var t=this.options.min.split("-"),s=this.options.max.split("-"),i=[];switch(e){case Number(t[0]):for(var a=1;a<=12;a++)a<Number(t[1])?i.push({disabled:!0,name:a}):i.push({disabled:!1,name:a});break;case Number(s[0]):for(var n=1;n<=12;n++)n>Number(t[1])?i.push({disabled:!0,name:n}):i.push({disabled:!1,name:n});break;default:for(var o=1;o<=12;o++)i.push({disabled:!1,name:o})}return i},getDaysByMonthYear:function(e,t){var s=e%4==0&&e%100!=0||e%400==0,i=31;switch(Number(t)){case 1:case 3:case 5:case 7:case 8:case 10:case 12:i=31;break;case 2:i=s?29:28;break;case 4:case 6:case 9:case 11:i=30}var a=this.options.min.split("-"),n=this.options.max.split("-"),o=[];if(e===Number(a[0])&&t===Number(a[1]))for(var r=1;r<=i;r++)r<Number(a[2])?o.push({disabled:!0,name:r}):o.push({disabled:!1,name:r});else if(e===Number(n[0])&&t===Number(n[1]))for(var l=1;l<=i;l++)l>Number(n[2])?o.push({disabled:!0,name:l}):o.push({disabled:!1,name:l});else for(var c=1;c<=i;c++)o.push({disabled:!1,name:c});return o},showScoll:function(){this.show=!0,this.lastValue=this.value}},mounted:function(){this.ready()}}},function(e,t,s){"use strict";t.a={props:["options","selection","value","index"],data:function(){return{localSelection:[],startTrans:0,trans:0,duration:0,chosenIndex:0,start:0,move:0,end:0,last:0,limitUp:0,limitDown:0,speeds:[],speed:null,loopMarginTop:0}},computed:{chosenName:function(){var e=this.loopIndex(this.selection,this.chosenIndex);return e.disabled?"":e.name}},watch:{selection:function(e,t){this.ready()}},methods:{ready:function(){this.options.loop?(this.localSelection=this.copyDoubleArray(this.selection),this.trans=(this.options.height.allH-this.options.height.itemH*(this.localSelection.length+1))/2,this.loopMarginTop=0):(this.localSelection=this.selection,this.limitUp=this.options.height.startTrans,this.limitDown=this.options.height.startTrans-this.options.height.itemH*(this.localSelection.length-1),this.trans=this.options.height.startTrans),this.chosenIndex=0,this.startTrans=this.trans,this.last=this.trans,this.setValue(this.value)},touchStart:function(e){console.log("touchStart"),e.preventDefault(),this.start=e.touches[0].pageY},touchMove:function(e){console.log("touchMove"),e.preventDefault(),this.move=e.touches[0].pageY,this.actualMove(this.move-this.start,0),this.speedRecord(),this.start=this.move},touchEnd:function(e){if(console.log("touchEnd"),e.preventDefault(),this.end=e.changedTouches[0].pageY,this.options.freeMode){var t=this.speeds.pop(),s=this.speeds.pop();if(t&&s){var i=s.position-t.position,a=s.time-t.time;this.speed=i/a}this.duration=300,this.speed<=.1&&this.speed>=-.1?this.actualMove(this.speed*this.duration,0,!0,!0):this.actualMove(this.speed*this.duration,this.duration,!0,!0)}else this.actualMove(this.end-this.move,0,!0,!0)},actualMove:function(e,t,s,i){function a(e){n.trans=.5*e+n.last,n.duration=0,n.limitTrans(),o=(n.startTrans-n.trans)/n.options.height.itemH,n.options.loop&&n.loopShift(n.localSelection,n.chosenIndex-Math.round(o)),n.chosenIndex=Math.round(o),n.last=n.trans}var n=this,o=null;if(s&&function(){var t=.5*e+n.last;n.options.loop||(t>=n.limitUp&&(t=n.limitUp),t<=n.limitDown&&(t=n.limitDown));var s=Math.round((n.startTrans-t)/n.options.height.itemH),a=n.disabledNext(n.selection,s,n.options.loop);i&&n.$emit("change-val",n.loopIndex(n.selection,a).name,n.index),e=2*(n.startTrans-a*n.options.height.itemH-n.last)}(),t>0)for(var r=0;r<t;r+=20)setTimeout(function(){a(e/t*20)},r);else a(e)},setValue:function(e){var t=null;if(""===e)t=0;else{for(var s=0;s<this.selection.length;s++)if(this.selection[s].name===e){t=s;break}if(this.selection[t].disabled)for(var i=t;i<this.selection.length;i++)if(!this.selection[i].disabled){t=i;break}}this.actualMove((this.chosenIndex-t)*this.options.height.itemH/.5,0,!0)},limitTrans:function(){this.options.loop||(this.trans>=this.limitUp&&(this.trans=this.limitUp),this.trans<=this.limitDown&&(this.trans=this.limitDown))},speedRecord:function(){this.options.freeMode&&(this.speeds.length<4?this.speeds.push({position:this.trans,time:(new Date).getTime()}):(this.speeds.shift(),this.speeds.push({position:this.trans,time:(new Date).getTime()})))},copyDoubleArray:function(e){for(var t=[],s=0;s<e.length;s++)t.push(e[s]);return t.push.apply(t,e),t},loopIndex:function(e,t){var s=t%e.length;return s<0&&(s+=e.length),s>=e.length?e[0]:e[s]},loopShift:function(e,t){if(t>0)for(var s=0;s<t;s++)e.unshift(e.pop());else for(var i=0;i<-t;i++)e.push(e.shift());t&&(this.loopMarginTop=this.loopMarginTop-t*this.options.height.itemH)},disabledNext:function(e,t,s){if(!this.loopIndex(e,t).disabled)return t;if(s)for(var i=0;i<e.length;i++){if(!this.loopIndex(e,t+i).disabled)return t+i;if(!this.loopIndex(e,t-i).disabled)return t-i}else{for(var a=t;a<e.length;a++)if(!e[a].disabled)return a;for(var n=t;n>=0;n--)if(!e[n].disabled)return n}}},mounted:function(){this.ready()}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(6),a={install:function(e){e.component(i.a.name,i.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(a),t.default=a},function(e,t,s){"use strict";function i(e){s(7)}var a=s(3),n=s(14),o=s(2),r=i,l=o(a.a,n.a,!1,r,"data-v-3f61279c",null);t.a=l.exports},function(e,t,s){var i=s(8);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);s(1)("0935a7fa",i,!0,{})},function(e,t,s){t=e.exports=s(0)(!1),t.push([e.i,'.flex[data-v-3f61279c]{display:-webkit-box;display:-moz-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex}.flex-1[data-v-3f61279c]{flex:1;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-moz-flex:1;box-flex:1;-ms-flex:1}.flex-between[data-v-3f61279c]{-webkit-justify-content:space-between;-moz-box-pack:justify;-webkit--moz-box-pack:space-between;box-pack:space-between;justify-content:space-between}.after-line[data-v-3f61279c]:after{bottom:0}.after-line[data-v-3f61279c]:after,.before-line[data-v-3f61279c]:before{position:absolute;left:0;content:"";background:#e1e1e1;height:1px;width:100%;transform:scaleY(.5)}.before-line[data-v-3f61279c]:before{top:0}.mbsc[data-v-3f61279c]{width:100%;height:100%;position:fixed;top:0;left:0;z-index:10}.mbsc-mask[data-v-3f61279c]{background:rgba(0,0,0,.2);width:100%;height:100%;position:fixed;top:0;left:0}.mbsc-fr[data-v-3f61279c]{background:#fff;width:100%;position:fixed;bottom:0;left:0}.mbsc-btn>div[data-v-3f61279c]{height:40px;line-height:40px;padding:0 10px}.mbsc-content[data-v-3f61279c]{height:180px;overflow:hidden;margin:10px}.mbsc-line[data-v-3f61279c]{position:absolute;top:51%;height:34px;width:100%;margin-left:-10px}.mbsc-part-wrapper[data-v-3f61279c]{text-align:center}.mbsc-item[data-v-3f61279c]{height:34px;line-height:34px;padding:0 10px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:#9d9d9d}.mbsc-chosen[data-v-3f61279c]{color:#000}.mbsc-disable[data-v-3f61279c]{opacity:.3}',""])},function(e,t){e.exports=function(e,t){for(var s=[],i={},a=0;a<t.length;a++){var n=t[a],o=n[0],r=n[1],l=n[2],c=n[3],h={id:e+":"+a,css:r,media:l,sourceMap:c};i[o]?i[o].parts.push(h):s.push(i[o]={id:o,parts:[h]})}return s}},function(e,t,s){"use strict";function i(e){s(11)}var a=s(4),n=s(13),o=s(2),r=i,l=o(a.a,n.a,!1,r,"data-v-fdb4f096",null);t.a=l.exports},function(e,t,s){var i=s(12);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);s(1)("2bd3c5d3",i,!0,{})},function(e,t,s){t=e.exports=s(0)(!1),t.push([e.i,'.flex[data-v-fdb4f096]{display:-webkit-box;display:-moz-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex}.flex-1[data-v-fdb4f096]{flex:1;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-moz-flex:1;box-flex:1;-ms-flex:1}.flex-between[data-v-fdb4f096]{-webkit-justify-content:space-between;-moz-box-pack:justify;-webkit--moz-box-pack:space-between;box-pack:space-between;justify-content:space-between}.after-line[data-v-fdb4f096]:after{bottom:0}.after-line[data-v-fdb4f096]:after,.before-line[data-v-fdb4f096]:before{position:absolute;left:0;content:"";background:#e1e1e1;height:1px;width:100%;transform:scaleY(.5)}.before-line[data-v-fdb4f096]:before{top:0}.mbsc[data-v-fdb4f096]{width:100%;height:100%;position:fixed;top:0;left:0;z-index:10}.mbsc-mask[data-v-fdb4f096]{background:rgba(0,0,0,.2);width:100%;height:100%;position:fixed;top:0;left:0}.mbsc-fr[data-v-fdb4f096]{background:#fff;width:100%;position:fixed;bottom:0;left:0}.mbsc-btn>div[data-v-fdb4f096]{height:40px;line-height:40px;padding:0 10px}.mbsc-content[data-v-fdb4f096]{height:180px;overflow:hidden;margin:10px}.mbsc-line[data-v-fdb4f096]{position:absolute;top:51%;height:34px;width:100%;margin-left:-10px}.mbsc-part-wrapper[data-v-fdb4f096]{text-align:center}.mbsc-item[data-v-fdb4f096]{height:34px;line-height:34px;padding:0 10px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:#9d9d9d}.mbsc-chosen[data-v-fdb4f096]{color:#000}.mbsc-disable[data-v-fdb4f096]{opacity:.3}',""])},function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"mbsc-part-container flex-1",on:{touchstart:function(t){e.touchStart(t)},touchmove:function(t){e.touchMove(t)},touchend:function(t){e.touchEnd(t)}}},[s("div",{staticClass:"mbsc-part-wrapper flex-1",style:{transform:"translate3d(0px, "+e.trans+"px, 0px)","transition-duration":e.duration+"ms","margin-top":e.loopMarginTop+"px"}},e._l(e.localSelection,function(t,i){return s("div",{staticClass:"mbsc-item",class:{"mbsc-chosen":t.name===e.chosenName,"mbsc-disable":t.disabled}},[e._v("\n      "+e._s(e.options.label[0])+e._s(t.name)+e._s(e.options.label[1])+"\n    ")])}))])},a=[],n={render:i,staticRenderFns:a};t.a=n},function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("input",{attrs:{type:"text",placeholder:"请选择",readonly:""},domProps:{value:e.value},on:{click:e.showScoll}}),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"mbsc"},[s("div",{staticClass:"mbsc-mask"}),e._v(" "),s("div",{staticClass:"mbsc-fr"},[s("div",{staticClass:"mbsc-btn flex flex-between after-line"},[s("div",{on:{click:function(t){e.cancel()}}},[e._v("取消")]),e._v(" "),s("div",{on:{click:function(t){e.ok()}}},[e._v("确定")])]),e._v(" "),s("div",{staticClass:"mbsc-content flex flex-between"},[s("div",{staticClass:"mbsc-line after-line before-line"}),e._v(" "),e._l(e.parts,function(t,i){return s("mobi-scroll-part",{ref:"part",refInFor:!0,attrs:{options:t.options,value:t.value,selection:t.selection,index:i},on:{"change-val":e.changeVal}})})],2)])])])},a=[],n={render:i,staticRenderFns:a};t.a=n}])});
//# sourceMappingURL=vue-mobi-scroll.js.map
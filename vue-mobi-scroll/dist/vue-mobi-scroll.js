!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("VueMobiScroll",[],e):"object"==typeof exports?exports.VueMobiScroll=e():t.VueMobiScroll=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(i){if(s[i])return s[i].exports;var n=s[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var s={};return e.m=t,e.c=s,e.d=function(t,s,i){e.o(t,s)||Object.defineProperty(t,s,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(s,"a",s),s},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=5)}([function(t,e){function s(t,e){var s=t[1]||"",n=t[3];if(!n)return s;if(e&&"function"==typeof btoa){var o=i(n);return[s].concat(n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"})).concat([o]).join("\n")}return[s].join("\n")}function i(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=s(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,s){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},n=0;n<this.length;n++){var o=this[n][0];"number"==typeof o&&(i[o]=!0)}for(n=0;n<t.length;n++){var a=t[n];"number"==typeof a[0]&&i[a[0]]||(s&&!a[2]?a[2]=s:s&&(a[2]="("+a[2]+") and ("+s+")"),e.push(a))}},e}},function(t,e,s){function i(t){for(var e=0;e<t.length;e++){var s=t[e],i=p[s.id];if(i){i.refs++;for(var n=0;n<i.parts.length;n++)i.parts[n](s.parts[n]);for(;n<s.parts.length;n++)i.parts.push(o(s.parts[n]));i.parts.length>s.parts.length&&(i.parts.length=s.parts.length)}else{for(var a=[],n=0;n<s.parts.length;n++)a.push(o(s.parts[n]));p[s.id]={id:s.id,refs:1,parts:a}}}}function n(){var t=document.createElement("style");return t.type="text/css",h.appendChild(t),t}function o(t){var e,s,i=document.querySelector("style["+m+'~="'+t.id+'"]');if(i){if(f)return v;i.parentNode.removeChild(i)}if(g){var o=d++;i=u||(u=n()),e=a.bind(null,i,o,!1),s=a.bind(null,i,o,!0)}else i=n(),e=r.bind(null,i),s=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else s()}}function a(t,e,s,i){var n=s?"":i.css;if(t.styleSheet)t.styleSheet.cssText=x(e,n);else{var o=document.createTextNode(n),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function r(t,e){var s=e.css,i=e.media,n=e.sourceMap;if(i&&t.setAttribute("media",i),b.ssrId&&t.setAttribute(m,e.id),n&&(s+="\n/*# sourceURL="+n.sources[0]+" */",s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),t.styleSheet)t.styleSheet.cssText=s;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(s))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=s(9),p={},h=l&&(document.head||document.getElementsByTagName("head")[0]),u=null,d=0,f=!1,v=function(){},b=null,m="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,s,n){f=s,b=n||{};var o=c(t,e);return i(o),function(e){for(var s=[],n=0;n<o.length;n++){var a=o[n],r=p[a.id];r.refs--,s.push(r)}e?(o=c(t,e),i(o)):o=[];for(var n=0;n<s.length;n++){var r=s[n];if(0===r.refs){for(var l=0;l<r.parts.length;l++)r.parts[l]();delete p[r.id]}}}};var x=function(){var t=[];return function(e,s){return t[e]=s,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e,s,i,n,o){var a,r=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(a=t,r=t.default);var c="function"==typeof r?r.options:r;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),s&&(c.functional=!0),n&&(c._scopeId=n);var p;if(o?(p=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=p):i&&(p=i),p){var h=c.functional,u=h?c.render:c.beforeCreate;h?(c._injectStyles=p,c.render=function(t,e){return p.call(e),u(t,e)}):c.beforeCreate=u?[].concat(u,p):[p]}return{esModule:a,exports:r,options:c}}},function(t,e,s){"use strict";var i=s(10);e.a={name:"vue-mobi-scroll",components:{mobiScrollPart:i.a},props:["options"],data:function(){return{show:!1,value:"",lastValue:"",parts:[]}},methods:{ready:function(){switch(this.parts=[],this.options.type){case"select":for(var t=0;t<1;t++)this.parts.push({options:{loop:this.options.loop,freeMode:!0,label:["",""],height:{allH:180,itemH:34,startTrans:73}},value:this.options.origin,selection:this.options.selections[t]});break;case"date":var e=this.options.origin.split("-");this.parts.push({options:{loop:!1,freeMode:!0,label:["",""],height:{allH:180,itemH:34,startTrans:73}},value:Number(e[0]),selection:this.getYears()}),this.parts.push({options:{loop:!0,freeMode:!0,label:["","月"],height:{allH:180,itemH:34,startTrans:73}},value:Number(e[1]),selection:this.getMonthsByYear(this.parts[0].value)}),this.parts.push({options:{loop:!0,freeMode:!0,label:["",""],height:{allH:180,itemH:34,startTrans:73}},value:Number(e[2]),selection:this.getDaysByMonthYear(this.parts[0].value,this.parts[1].value)});break;case"time":var s=this.options.origin.split(":");this.parts.push({options:{loop:!0,freeMode:!0,label:["",""],height:{allH:180,itemH:34,startTrans:73}},value:s[0],selection:this.getHours()}),this.parts.push({options:{loop:!0,freeMode:!0,label:["",""],height:{allH:180,itemH:34,startTrans:73}},value:s[1],selection:this.getMins()})}},changeVal:function(t,e){if(console.log(t+" "+e),this.parts[e].value=t,"date"===this.options.type)switch(e){case 0:this.parts[e+1].selection=this.getMonthsByYear(this.parts[e].value),this.changeVal(this.parts[e+1].value,1);break;case 1:this.parts[e+1].selection=this.getDaysByMonthYear(this.parts[e-1].value,this.parts[e].value)}},setValue:function(t){switch(this.options.type){case"select":this.parts[0].value=t,this.$refs.part[0].setValue(this.parts[0].value);break;case"date":for(var e=t.split("-"),s=0;s<e.length;s++)this.parts[s].value=Number(e[s]),this.$refs.part[s].setValue(this.parts[s].value);break;case"time":for(var i=t.split(":"),n=0;n<i.length;n++)this.parts[n].value=i[n],this.$refs.part[n].setValue(this.parts[n].value)}},ok:function(){switch(this.show=!1,this.options.type){case"select":this.value="";for(var t=0;t<this.parts.length;t++)this.value+=this.parts[t].value;break;case"date":this.value=this.parts[0].value+"-"+this.parts[1].value+"-"+this.parts[2].value;break;case"time":this.value=this.parts[0].value+":"+this.parts[1].value}},cancel:function(){this.show=!1,""!==this.lastValue&&this.setValue(this.lastValue)},getHours:function(){for(var t=[],e=0;e<10;e++)t.push({name:"0"+e,disabled:!1});for(var s=10;s<24;s++)t.push({name:""+s,disabled:!1});return t},getMins:function(){for(var t=[],e=0;e<10;e++)t.push({name:"0"+e,disabled:!1});for(var s=10;s<60;s++)t.push({name:""+s,disabled:!1});return t},getYears:function(){var t=this.options.min.split("-"),e=this.options.max.split("-"),s=[];s=[];for(var i=Number(t[0]);i<=Number(e[0]);i++)s.push({name:i,disabled:!1});return s},getMonthsByYear:function(t){var e=this.options.min.split("-"),s=this.options.max.split("-"),i=[];switch(t){case Number(e[0]):for(var n=1;n<=12;n++)n<Number(e[1])?i.push({disabled:!0,name:n}):i.push({disabled:!1,name:n});break;case Number(s[0]):for(var o=1;o<=12;o++)o>Number(e[1])?i.push({disabled:!0,name:o}):i.push({disabled:!1,name:o});break;default:for(var a=1;a<=12;a++)i.push({disabled:!1,name:a})}return i},getDaysByMonthYear:function(t,e){var s=t%4==0&&t%100!=0||t%400==0,i=31;switch(Number(e)){case 1:case 3:case 5:case 7:case 8:case 10:case 12:i=31;break;case 2:i=s?29:28;break;case 4:case 6:case 9:case 11:i=30}var n=this.options.min.split("-"),o=this.options.max.split("-"),a=[];if(t===Number(n[0])&&e===Number(n[1]))for(var r=1;r<=i;r++)r<Number(n[2])?a.push({disabled:!0,name:r}):a.push({disabled:!1,name:r});else if(t===Number(o[0])&&e===Number(o[1]))for(var l=1;l<=i;l++)l>Number(o[2])?a.push({disabled:!0,name:l}):a.push({disabled:!1,name:l});else for(var c=1;c<=i;c++)a.push({disabled:!1,name:c});return a},showScoll:function(){this.show=!0,this.lastValue=this.value}},mounted:function(){this.ready()}}},function(t,e,s){"use strict";e.a={props:["options","selection","value","index"],data:function(){return{localSelection:[],startTrans:0,trans:0,duration:0,chosenIndex:0,start:0,move:0,end:0,last:0,limitUp:0,limitDown:0,speeds:[],speed:null,loopMarginTop:0}},computed:{chosenName:function(){var t=this.loopIndex(this.selection,this.chosenIndex);return t.disabled?"":t.name}},watch:{selection:function(t,e){this.ready()}},methods:{ready:function(){this.options.loop?(this.localSelection=this.copyDoubleArray(this.selection),this.trans=(this.options.height.allH-this.options.height.itemH*(this.localSelection.length+1))/2,this.loopMarginTop=0):(this.localSelection=this.selection,this.limitUp=this.options.height.startTrans,this.limitDown=this.options.height.startTrans-this.options.height.itemH*(this.localSelection.length-1),this.trans=this.options.height.startTrans),this.chosenIndex=0,this.startTrans=this.trans,this.last=this.trans,this.setValue(this.value)},touchStart:function(t){console.log("touchStart"),t.preventDefault(),this.start=t.touches[0].pageY},touchMove:function(t){console.log("touchMove"),t.preventDefault(),this.move=t.touches[0].pageY,this.actualMove(this.move-this.start,0),this.speedRecord(),this.start=this.move},touchEnd:function(t){if(console.log("touchEnd"),t.preventDefault(),this.end=t.changedTouches[0].pageY,this.options.freeMode){var e=this.speeds.pop(),s=this.speeds.pop();if(e&&s){var i=s.position-e.position,n=s.time-e.time;this.speed=i/n}this.duration=300,this.speed<=.1&&this.speed>=-.1?this.actualMove(this.speed*this.duration,0,!0,!0):this.actualMove(this.speed*this.duration,this.duration,!0,!0)}else this.actualMove(this.end-this.move,0,!0,!0)},actualMove:function(t,e,s,i){function n(t){o.trans=.5*t+o.last,o.duration=0,o.limitTrans(),a=(o.startTrans-o.trans)/o.options.height.itemH,o.options.loop&&o.loopShift(o.localSelection,o.chosenIndex-Math.round(a)),o.chosenIndex=Math.round(a),o.last=o.trans}var o=this,a=null;if(s&&function(){var e=.5*t+o.last;o.options.loop||(e>=o.limitUp&&(e=o.limitUp),e<=o.limitDown&&(e=o.limitDown));var s=Math.round((o.startTrans-e)/o.options.height.itemH),n=o.disabledNext(o.selection,s,o.options.loop);i&&o.$emit("change-val",o.loopIndex(o.selection,n).name,o.index),t=2*(o.startTrans-n*o.options.height.itemH-o.last)}(),e>0)for(var r=0;r<e;r+=20)setTimeout(function(){n(t/e*20)},r);else n(t)},setValue:function(t){var e=null;if(""===t)e=0;else{for(var s=0;s<this.selection.length;s++)if(this.selection[s].name===t){e=s;break}if(null===e&&(e=0),this.selection[e].disabled)for(var i=e;i<this.selection.length;i++)if(!this.selection[i].disabled){e=i;break}}this.actualMove((this.chosenIndex-e)*this.options.height.itemH/.5,0,!0,!0)},limitTrans:function(){this.options.loop||(this.trans>=this.limitUp&&(this.trans=this.limitUp),this.trans<=this.limitDown&&(this.trans=this.limitDown))},speedRecord:function(){this.options.freeMode&&(this.speeds.length<4?this.speeds.push({position:this.trans,time:(new Date).getTime()}):(this.speeds.shift(),this.speeds.push({position:this.trans,time:(new Date).getTime()})))},copyDoubleArray:function(t){for(var e=[],s=0;s<t.length;s++)e.push(t[s]);return e.push.apply(e,t),e},loopIndex:function(t,e){var s=e%t.length;return s<0&&(s+=t.length),s>=t.length?t[0]:t[s]},loopShift:function(t,e){if(e>0)for(var s=0;s<e;s++)t.unshift(t.pop());else for(var i=0;i<-e;i++)t.push(t.shift());e&&(this.loopMarginTop=this.loopMarginTop-e*this.options.height.itemH)},disabledNext:function(t,e,s){if(!this.loopIndex(t,e).disabled)return e;if(s)for(var i=0;i<t.length;i++){if(!this.loopIndex(t,e+i).disabled)return e+i;if(!this.loopIndex(t,e-i).disabled)return e-i}else{for(var n=e;n<t.length;n++)if(!t[n].disabled)return n;for(var o=e;o>=0;o--)if(!t[o].disabled)return o}}},mounted:function(){this.ready()}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(6),n={install:function(t){t.component(i.a.name,i.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(n),e.default=n},function(t,e,s){"use strict";function i(t){s(7)}var n=s(3),o=s(14),a=s(2),r=i,l=a(n.a,o.a,!1,r,"data-v-2b926345",null);e.a=l.exports},function(t,e,s){var i=s(8);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s(1)("05242299",i,!0,{})},function(t,e,s){e=t.exports=s(0)(!1),e.push([t.i,'.flex[data-v-2b926345]{display:-webkit-box;display:-moz-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex}.flex-1[data-v-2b926345]{flex:1;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-moz-flex:1;box-flex:1;-ms-flex:1}.flex-between[data-v-2b926345]{-webkit-justify-content:space-between;-moz-box-pack:justify;-webkit--moz-box-pack:space-between;box-pack:space-between;justify-content:space-between}.after-line[data-v-2b926345]:after{bottom:0}.after-line[data-v-2b926345]:after,.before-line[data-v-2b926345]:before{position:absolute;left:0;content:"";background:#e1e1e1;height:1px;width:100%;transform:scaleY(.5)}.before-line[data-v-2b926345]:before{top:0}.mbsc[data-v-2b926345]{width:100%;height:100%;position:fixed;top:0;left:0;z-index:10}.mbsc-mask[data-v-2b926345]{background:rgba(0,0,0,.2);width:100%;height:100%;position:fixed;top:0;left:0}.mbsc-fr[data-v-2b926345]{background:#fff;width:100%;position:fixed;bottom:0;left:0}.mbsc-btn>div[data-v-2b926345]{height:40px;line-height:40px;padding:0 10px}.mbsc-content[data-v-2b926345]{height:180px;overflow:hidden;margin:10px}.mbsc-line[data-v-2b926345]{position:absolute;top:51%;height:34px;width:100%;margin-left:-10px}.mbsc-part-wrapper[data-v-2b926345]{text-align:center}.mbsc-item[data-v-2b926345]{height:34px;line-height:34px;padding:0 10px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:#9d9d9d}.mbsc-chosen[data-v-2b926345]{color:#000}.mbsc-disable[data-v-2b926345]{opacity:.3}',""])},function(t,e){t.exports=function(t,e){for(var s=[],i={},n=0;n<e.length;n++){var o=e[n],a=o[0],r=o[1],l=o[2],c=o[3],p={id:t+":"+n,css:r,media:l,sourceMap:c};i[a]?i[a].parts.push(p):s.push(i[a]={id:a,parts:[p]})}return s}},function(t,e,s){"use strict";function i(t){s(11)}var n=s(4),o=s(13),a=s(2),r=i,l=a(n.a,o.a,!1,r,"data-v-413070d2",null);e.a=l.exports},function(t,e,s){var i=s(12);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s(1)("cc6b1dee",i,!0,{})},function(t,e,s){e=t.exports=s(0)(!1),e.push([t.i,'.flex[data-v-413070d2]{display:-webkit-box;display:-moz-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex}.flex-1[data-v-413070d2]{flex:1;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-moz-flex:1;box-flex:1;-ms-flex:1}.flex-between[data-v-413070d2]{-webkit-justify-content:space-between;-moz-box-pack:justify;-webkit--moz-box-pack:space-between;box-pack:space-between;justify-content:space-between}.after-line[data-v-413070d2]:after{bottom:0}.after-line[data-v-413070d2]:after,.before-line[data-v-413070d2]:before{position:absolute;left:0;content:"";background:#e1e1e1;height:1px;width:100%;transform:scaleY(.5)}.before-line[data-v-413070d2]:before{top:0}.mbsc[data-v-413070d2]{width:100%;height:100%;position:fixed;top:0;left:0;z-index:10}.mbsc-mask[data-v-413070d2]{background:rgba(0,0,0,.2);width:100%;height:100%;position:fixed;top:0;left:0}.mbsc-fr[data-v-413070d2]{background:#fff;width:100%;position:fixed;bottom:0;left:0}.mbsc-btn>div[data-v-413070d2]{height:40px;line-height:40px;padding:0 10px}.mbsc-content[data-v-413070d2]{height:180px;overflow:hidden;margin:10px}.mbsc-line[data-v-413070d2]{position:absolute;top:51%;height:34px;width:100%;margin-left:-10px}.mbsc-part-wrapper[data-v-413070d2]{text-align:center}.mbsc-item[data-v-413070d2]{height:34px;line-height:34px;padding:0 10px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:#9d9d9d}.mbsc-chosen[data-v-413070d2]{color:#000}.mbsc-disable[data-v-413070d2]{opacity:.3}',""])},function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mbsc-part-container flex-1",on:{touchstart:function(e){t.touchStart(e)},touchmove:function(e){t.touchMove(e)},touchend:function(e){t.touchEnd(e)}}},[s("div",{staticClass:"mbsc-part-wrapper flex-1",style:{transform:"translate3d(0px, "+t.trans+"px, 0px)","transition-duration":t.duration+"ms","margin-top":t.loopMarginTop+"px"}},t._l(t.localSelection,function(e,i){return s("div",{staticClass:"mbsc-item",class:{"mbsc-chosen":e.name===t.chosenName,"mbsc-disable":e.disabled}},[t._v("\n      "+t._s(t.options.label[0])+t._s(e.name)+t._s(t.options.label[1])+"\n    ")])}))])},n=[],o={render:i,staticRenderFns:n};e.a=o},function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("input",{attrs:{type:"text",placeholder:"请选择",readonly:""},domProps:{value:t.value},on:{click:t.showScoll}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"mbsc"},[s("div",{staticClass:"mbsc-mask"}),t._v(" "),s("div",{staticClass:"mbsc-fr"},[s("div",{staticClass:"mbsc-btn flex flex-between after-line"},[s("div",{on:{click:function(e){t.cancel()}}},[t._v("取消")]),t._v(" "),s("div",{on:{click:function(e){t.ok()}}},[t._v("确定")])]),t._v(" "),s("div",{staticClass:"mbsc-content flex flex-between"},[s("div",{staticClass:"mbsc-line after-line before-line"}),t._v(" "),t._l(t.parts,function(e,i){return s("mobi-scroll-part",{ref:"part",refInFor:!0,attrs:{options:e.options,value:e.value,selection:e.selection,index:i},on:{"change-val":t.changeVal}})})],2)])])])},n=[],o={render:i,staticRenderFns:n};e.a=o}])});
//# sourceMappingURL=vue-mobi-scroll.js.map
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("VueMobiScroll",[],t):"object"==typeof exports?exports.VueMobiScroll=t():e.VueMobiScroll=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(i){if(s[i])return s[i].exports;var o=s[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var s={};return t.m=e,t.c=s,t.d=function(e,s,i){t.o(e,s)||Object.defineProperty(e,s,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,"a",s),s},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=5)}([function(e,t){function s(e,t){var s=e[1]||"",o=e[3];if(!o)return s;if(t&&"function"==typeof btoa){var n=i(o);return[s].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([n]).join("\n")}return[s].join("\n")}function i(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var i=s(t,e);return t[2]?"@media "+t[2]+"{"+i+"}":i}).join("")},t.i=function(e,s){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},o=0;o<this.length;o++){var n=this[o][0];"number"==typeof n&&(i[n]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&i[a[0]]||(s&&!a[2]?a[2]=s:s&&(a[2]="("+a[2]+") and ("+s+")"),t.push(a))}},t}},function(e,t,s){function i(e){for(var t=0;t<e.length;t++){var s=e[t],i=p[s.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](s.parts[o]);for(;o<s.parts.length;o++)i.parts.push(n(s.parts[o]));i.parts.length>s.parts.length&&(i.parts.length=s.parts.length)}else{for(var a=[],o=0;o<s.parts.length;o++)a.push(n(s.parts[o]));p[s.id]={id:s.id,refs:1,parts:a}}}}function o(){var e=document.createElement("style");return e.type="text/css",h.appendChild(e),e}function n(e){var t,s,i=document.querySelector("style["+b+'~="'+e.id+'"]');if(i){if(f)return v;i.parentNode.removeChild(i)}if(g){var n=d++;i=u||(u=o()),t=a.bind(null,i,n,!1),s=a.bind(null,i,n,!0)}else i=o(),t=r.bind(null,i),s=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else s()}}function a(e,t,s,i){var o=s?"":i.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var n=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(n,a[t]):e.appendChild(n)}}function r(e,t){var s=t.css,i=t.media,o=t.sourceMap;if(i&&e.setAttribute("media",i),m.ssrId&&e.setAttribute(b,t.id),o&&(s+="\n/*# sourceURL="+o.sources[0]+" */",s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=s;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(s))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=s(9),p={},h=l&&(document.head||document.getElementsByTagName("head")[0]),u=null,d=0,f=!1,v=function(){},m=null,b="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,s,o){f=s,m=o||{};var n=c(e,t);return i(n),function(t){for(var s=[],o=0;o<n.length;o++){var a=n[o],r=p[a.id];r.refs--,s.push(r)}t?(n=c(e,t),i(n)):n=[];for(var o=0;o<s.length;o++){var r=s[o];if(0===r.refs){for(var l=0;l<r.parts.length;l++)r.parts[l]();delete p[r.id]}}}};var x=function(){var e=[];return function(t,s){return e[t]=s,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t,s,i,o,n){var a,r=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(a=e,r=e.default);var c="function"==typeof r?r.options:r;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),s&&(c.functional=!0),o&&(c._scopeId=o);var p;if(n?(p=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(n)},c._ssrRegister=p):i&&(p=i),p){var h=c.functional,u=h?c.render:c.beforeCreate;h?(c._injectStyles=p,c.render=function(e,t){return p.call(t),u(e,t)}):c.beforeCreate=u?[].concat(u,p):[p]}return{esModule:a,exports:r,options:c}}},function(e,t,s){"use strict";var i=s(10);t.a={name:"vue-mobi-scroll",components:{mobiScrollPart:i.a},props:["options"],data:function(){return{show:!1,value:"",lastValue:"",parts:[]}},methods:{ready:function(){switch(this.parts=[],this.options.type){case"select":for(var e=0;e<1;e++)this.parts.push({options:{loop:this.options.loop,freeMode:!0,label:["",""],height:{allH:180,itemH:34,startTrans:73}},value:this.options.origin?this.options.origin:this.options.selections[0],selection:this.options.selections[e]}),this.options.origin&&(this.value=this.options.origin);break;case"date":var t=void 0;t=this.options.origin?this.options.origin.split("-"):this.options.min.split("-"),this.parts.push({options:{loop:!1,freeMode:!0,label:["",""],height:{allH:180,itemH:34,startTrans:73}},value:Number(t[0]),selection:this.getYears()}),this.parts.push({options:{loop:!0,freeMode:!0,label:["","月"],height:{allH:180,itemH:34,startTrans:73}},value:Number(t[1]),selection:this.getMonthsByYear(this.parts[0].value)}),this.parts.push({options:{loop:!0,freeMode:!0,label:["",""],height:{allH:180,itemH:34,startTrans:73}},value:Number(t[2]),selection:this.getDaysByMonthYear(this.parts[0].value,this.parts[1].value)}),this.options.origin&&(this.value=this.options.origin);break;case"time":var s=void 0;s=this.options.origin?this.options.origin.split(":"):"00:00".split(":"),this.parts.push({options:{loop:!0,freeMode:!0,label:["",""],height:{allH:180,itemH:34,startTrans:73}},value:s[0],selection:this.getHours()}),this.parts.push({options:{loop:!0,freeMode:!0,label:["",""],height:{allH:180,itemH:34,startTrans:73}},value:s[1],selection:this.getMins()}),this.options.origin&&(this.value=this.options.origin)}},changeVal:function(e,t){if(this.parts[t].value=e,"date"===this.options.type)switch(t){case 0:this.parts[t+1].selection=this.getMonthsByYear(this.parts[t].value),this.changeVal(this.parts[t+1].value,1);break;case 1:this.parts[t+1].selection=this.getDaysByMonthYear(this.parts[t-1].value,this.parts[t].value)}},setValue:function(e){switch(this.options.type){case"select":this.parts[0].value=e,this.$refs.part[0].setValue(this.parts[0].value);break;case"date":for(var t=e.split("-"),s=0;s<t.length;s++)this.parts[s].value=Number(t[s]),this.$refs.part[s].setValue(this.parts[s].value);break;case"time":for(var i=e.split(":"),o=0;o<i.length;o++)this.parts[o].value=i[o],this.$refs.part[o].setValue(this.parts[o].value)}this.value=e},ok:function(){switch(this.show=!1,this.options.type){case"select":this.value="";for(var e=0;e<this.parts.length;e++)this.value+=this.parts[e].value;break;case"date":this.value=this.parts[0].value+"-"+this.parts[1].value+"-"+this.parts[2].value;break;case"time":this.value=this.parts[0].value+":"+this.parts[1].value}console.log("set-val"),this.$emit("set-val",this.value)},cancel:function(){this.show=!1,""!==this.lastValue&&this.setValue(this.lastValue)},getHours:function(){for(var e=[],t=0;t<10;t++)e.push({name:"0"+t,disabled:!1});for(var s=10;s<24;s++)e.push({name:""+s,disabled:!1});return e},getMins:function(){for(var e=[],t=0;t<10;t++)e.push({name:"0"+t,disabled:!1});for(var s=10;s<60;s++)e.push({name:""+s,disabled:!1});return e},getYears:function(){var e=this.options.min.split("-"),t=this.options.max.split("-"),s=[];s=[];for(var i=Number(e[0]);i<=Number(t[0]);i++)s.push({name:i,disabled:!1});return s},getMonthsByYear:function(e){var t=this.options.min.split("-"),s=this.options.max.split("-"),i=[];switch(e){case Number(t[0]):for(var o=1;o<=12;o++)o<Number(t[1])?i.push({disabled:!0,name:o}):i.push({disabled:!1,name:o});break;case Number(s[0]):for(var n=1;n<=12;n++)n>Number(s[1])?i.push({disabled:!0,name:n}):i.push({disabled:!1,name:n});break;default:for(var a=1;a<=12;a++)i.push({disabled:!1,name:a})}return i},getDaysByMonthYear:function(e,t){var s=e%4==0&&e%100!=0||e%400==0,i=31;switch(Number(t)){case 1:case 3:case 5:case 7:case 8:case 10:case 12:i=31;break;case 2:i=s?29:28;break;case 4:case 6:case 9:case 11:i=30}var o=this.options.min.split("-"),n=this.options.max.split("-"),a=[];if(e===Number(o[0])&&t===Number(o[1]))for(var r=1;r<=i;r++)r<Number(o[2])?a.push({disabled:!0,name:r}):a.push({disabled:!1,name:r});else if(e===Number(n[0])&&t===Number(n[1]))for(var l=1;l<=i;l++)l>Number(n[2])?a.push({disabled:!0,name:l}):a.push({disabled:!1,name:l});else for(var c=1;c<=i;c++)a.push({disabled:!1,name:c});return a},showScoll:function(){this.show=!0,this.lastValue=this.value}},mounted:function(){this.ready()}}},function(e,t,s){"use strict";t.a={props:["options","selection","value","index"],data:function(){return{localSelection:[],startTrans:0,trans:0,duration:0,chosenIndex:0,start:0,move:0,end:0,last:0,limitUp:0,limitDown:0,speeds:[],speed:null,loopMarginTop:0}},computed:{chosenName:function(){var e=this.loopIndex(this.selection,this.chosenIndex);return e.disabled?"":e.name}},watch:{selection:function(e,t){this.ready()}},methods:{ready:function(){this.options.loop?(this.localSelection=this.copyDoubleArray(this.selection),this.trans=(this.options.height.allH-this.options.height.itemH*(this.localSelection.length+1))/2,this.loopMarginTop=0):(this.localSelection=this.selection,this.limitUp=this.options.height.startTrans,this.limitDown=this.options.height.startTrans-this.options.height.itemH*(this.localSelection.length-1),this.trans=this.options.height.startTrans),this.chosenIndex=0,this.startTrans=this.trans,this.last=this.trans,this.value&&this.setValue(this.value)},touchStart:function(e){e.preventDefault(),this.start=e.touches[0].pageY},touchMove:function(e){e.preventDefault(),this.move=e.touches[0].pageY,this.actualMove(this.move-this.start,0),this.speedRecord(),this.start=this.move},touchEnd:function(e){if(e.preventDefault(),this.end=e.changedTouches[0].pageY,this.options.freeMode){var t=this.speeds.pop(),s=this.speeds.pop();if(t&&s){var i=s.position-t.position,o=s.time-t.time;this.speed=i/o}this.duration=300,this.speed<=.1&&this.speed>=-.1?this.actualMove(this.speed*this.duration,0,!0,!0):this.actualMove(this.speed*this.duration,this.duration,!0,!0)}else this.actualMove(this.end-this.move,0,!0,!0)},actualMove:function(e,t,s,i){function o(e){n.trans=.5*e+n.last,n.duration=0,n.limitTrans(),a=(n.startTrans-n.trans)/n.options.height.itemH,n.options.loop&&n.loopShift(n.localSelection,n.chosenIndex-Math.round(a)),n.chosenIndex=Math.round(a),n.last=n.trans}var n=this,a=null;if(s&&function(){var t=.5*e+n.last;n.options.loop||(t>=n.limitUp&&(t=n.limitUp),t<=n.limitDown&&(t=n.limitDown));var s=Math.round((n.startTrans-t)/n.options.height.itemH),o=n.disabledNext(n.selection,s,n.options.loop);i&&n.$emit("change-val",n.loopIndex(n.selection,o).name,n.index),e=2*(n.startTrans-o*n.options.height.itemH-n.last)}(),t>0)for(var r=0;r<t;r+=20)setTimeout(function(){o(e/t*20)},r);else o(e)},setValue:function(e){var t=null;if(""===e)t=0;else{for(var s=0;s<this.selection.length;s++)if(this.selection[s].name===e){t=s;break}if(null===t&&(t=0),this.selection[t].disabled)for(var i=t;i<this.selection.length;i++)if(!this.selection[i].disabled){t=i;break}}this.actualMove((this.chosenIndex-t)*this.options.height.itemH/.5,0,!0,!0)},limitTrans:function(){this.options.loop||(this.trans>=this.limitUp&&(this.trans=this.limitUp),this.trans<=this.limitDown&&(this.trans=this.limitDown))},speedRecord:function(){this.options.freeMode&&(this.speeds.length<4?this.speeds.push({position:this.trans,time:(new Date).getTime()}):(this.speeds.shift(),this.speeds.push({position:this.trans,time:(new Date).getTime()})))},copyDoubleArray:function(e){for(var t=[],s=0;s<e.length;s++)t.push(e[s]);return t.push.apply(t,e),t},loopIndex:function(e,t){var s=t%e.length;return s<0&&(s+=e.length),s>=e.length?e[0]:e[s]},loopShift:function(e,t){if(t>0)for(var s=0;s<t;s++)e.unshift(e.pop());else for(var i=0;i<-t;i++)e.push(e.shift());t&&(this.loopMarginTop=this.loopMarginTop-t*this.options.height.itemH)},disabledNext:function(e,t,s){if(!this.loopIndex(e,t).disabled)return t;if(s)for(var i=0;i<e.length;i++){if(!this.loopIndex(e,t+i).disabled)return t+i;if(!this.loopIndex(e,t-i).disabled)return t-i}else{for(var o=t;o<e.length;o++)if(!e[o].disabled)return o;for(var n=t;n>=0;n--)if(!e[n].disabled)return n}}},mounted:function(){this.ready()}}},function(e,t,s){var i=s(6).default,o={VueMobiScroll:i,install:function(e){e.component(i.name,i)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(o),e.exports=o},function(e,t,s){"use strict";function i(e){s(7)}Object.defineProperty(t,"__esModule",{value:!0});var o=s(3),n=s(14),a=s(2),r=i,l=a(o.a,n.a,!1,r,"data-v-0c00ca22",null);t.default=l.exports},function(e,t,s){var i=s(8);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);s(1)("ade3ff62",i,!0,{})},function(e,t,s){t=e.exports=s(0)(!1),t.push([e.i,'.flex[data-v-0c00ca22]{display:-webkit-box;display:-moz-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex}.flex-1[data-v-0c00ca22]{flex:1;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-moz-flex:1;box-flex:1;-ms-flex:1}.flex-between[data-v-0c00ca22]{-webkit-justify-content:space-between;-moz-box-pack:justify;-webkit--moz-box-pack:space-between;box-pack:space-between;justify-content:space-between}.after-line[data-v-0c00ca22]:after{bottom:0}.after-line[data-v-0c00ca22]:after,.before-line[data-v-0c00ca22]:before{position:absolute;left:0;content:"";background:#e1e1e1;height:1px;width:100%;transform:scaleY(.5)}.before-line[data-v-0c00ca22]:before{top:0}.mbsc[data-v-0c00ca22]{width:100%;height:100%;position:fixed;top:0;left:0;z-index:10}.mbsc-mask[data-v-0c00ca22]{background:rgba(0,0,0,.2);width:100%;height:100%;position:fixed;top:0;left:0}.mbsc-fr[data-v-0c00ca22]{background:#fff;width:100%;position:fixed;bottom:0;left:0}.mbsc-btn>div[data-v-0c00ca22]{height:40px;line-height:40px;padding:0 10px}.mbsc-content[data-v-0c00ca22]{height:180px;overflow:hidden;margin:10px}.mbsc-line[data-v-0c00ca22]{position:absolute;top:51%;height:34px;width:100%;margin-left:-10px}.mbsc-part-wrapper[data-v-0c00ca22]{text-align:center}.mbsc-item[data-v-0c00ca22]{height:34px;line-height:34px;padding:0 10px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:#9d9d9d}.mbsc-chosen[data-v-0c00ca22]{color:#000}.mbsc-disable[data-v-0c00ca22]{opacity:.3}',""])},function(e,t){e.exports=function(e,t){for(var s=[],i={},o=0;o<t.length;o++){var n=t[o],a=n[0],r=n[1],l=n[2],c=n[3],p={id:e+":"+o,css:r,media:l,sourceMap:c};i[a]?i[a].parts.push(p):s.push(i[a]={id:a,parts:[p]})}return s}},function(e,t,s){"use strict";function i(e){s(11)}var o=s(4),n=s(13),a=s(2),r=i,l=a(o.a,n.a,!1,r,"data-v-75eece28",null);t.a=l.exports},function(e,t,s){var i=s(12);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);s(1)("6740f284",i,!0,{})},function(e,t,s){t=e.exports=s(0)(!1),t.push([e.i,'.flex[data-v-75eece28]{display:-webkit-box;display:-moz-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex}.flex-1[data-v-75eece28]{flex:1;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-moz-flex:1;box-flex:1;-ms-flex:1}.flex-between[data-v-75eece28]{-webkit-justify-content:space-between;-moz-box-pack:justify;-webkit--moz-box-pack:space-between;box-pack:space-between;justify-content:space-between}.after-line[data-v-75eece28]:after{bottom:0}.after-line[data-v-75eece28]:after,.before-line[data-v-75eece28]:before{position:absolute;left:0;content:"";background:#e1e1e1;height:1px;width:100%;transform:scaleY(.5)}.before-line[data-v-75eece28]:before{top:0}.mbsc[data-v-75eece28]{width:100%;height:100%;position:fixed;top:0;left:0;z-index:10}.mbsc-mask[data-v-75eece28]{background:rgba(0,0,0,.2);width:100%;height:100%;position:fixed;top:0;left:0}.mbsc-fr[data-v-75eece28]{background:#fff;width:100%;position:fixed;bottom:0;left:0}.mbsc-btn>div[data-v-75eece28]{height:40px;line-height:40px;padding:0 10px}.mbsc-content[data-v-75eece28]{height:180px;overflow:hidden;margin:10px}.mbsc-line[data-v-75eece28]{position:absolute;top:51%;height:34px;width:100%;margin-left:-10px}.mbsc-part-wrapper[data-v-75eece28]{text-align:center}.mbsc-item[data-v-75eece28]{height:34px;line-height:34px;padding:0 10px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:#9d9d9d}.mbsc-chosen[data-v-75eece28]{color:#000}.mbsc-disable[data-v-75eece28]{opacity:.3}',""])},function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"mbsc-part-container flex-1",on:{touchstart:function(t){e.touchStart(t)},touchmove:function(t){e.touchMove(t)},touchend:function(t){e.touchEnd(t)}}},[s("div",{staticClass:"mbsc-part-wrapper flex-1",style:{transform:"translate3d(0px, "+e.trans+"px, 0px)","transition-duration":e.duration+"ms","margin-top":e.loopMarginTop+"px"}},e._l(e.localSelection,function(t,i){return s("div",{staticClass:"mbsc-item",class:{"mbsc-chosen":t.name===e.chosenName,"mbsc-disable":t.disabled}},[e._v("\n      "+e._s(e.options.label[0])+e._s(t.name)+e._s(e.options.label[1])+"\n    ")])}))])},o=[],n={render:i,staticRenderFns:o};t.a=n},function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("input",{attrs:{type:"text",placeholder:e.options.placeholder?e.options.placeholder:"请选择",readonly:""},domProps:{value:e.value},on:{click:e.showScoll}}),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"mbsc"},[s("div",{staticClass:"mbsc-mask"}),e._v(" "),s("div",{staticClass:"mbsc-fr"},[s("div",{staticClass:"mbsc-btn flex flex-between after-line"},[s("div",{on:{click:function(t){e.cancel()}}},[e._v("取消")]),e._v(" "),s("div",{on:{click:function(t){e.ok()}}},[e._v("确定")])]),e._v(" "),s("div",{staticClass:"mbsc-content flex flex-between"},[s("div",{staticClass:"mbsc-line after-line before-line"}),e._v(" "),e._l(e.parts,function(t,i){return s("mobi-scroll-part",{ref:"part",refInFor:!0,attrs:{options:t.options,value:t.value,selection:t.selection,index:i},on:{"change-val":e.changeVal}})})],2)])])])},o=[],n={render:i,staticRenderFns:o};t.a=n}])});
//# sourceMappingURL=vue-mobi-scroll.js.map
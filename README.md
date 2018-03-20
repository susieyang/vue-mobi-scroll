# vue-mobi-scroll
Description
------
It can be used in mobi web page in vue project worked as datepiker, timepicker and select in the way of mobiscroll
Demo is in /demo, you can run "npm run dev" to see it.
Library is in /vue-mobi-scroll.<br>
By the way, it only support mobile web page and cannot work well on PC. I will try to support PC terminal later.

How to use it:
------
step1: install<br>
```
npm install vue-mobi-scroll
```
step2: registe<br>
if you want to use it globally, register it in main.js<br>
```javascript
import VueMobiScroll from 'vue-mobi-scroll'
Vue.use(VueMobiScroll)
```
if you want to use it only in one component, register it in the component where you need it
```javascript
import {VueMobiScroll} from './lib/index.js'
export default {
  components: {
    VueMobiScroll
  }
}
```
step3: template<br>
there are three types can be used: date, time, select. Each of them has only one prop: options.
``` javascript
date example：
<vue-mobi-scroll :options="dateOptions"></vue-mobi-scroll>
time example：
<vue-mobi-scroll :options="timeOptions"></vue-mobi-scroll>
select example:
<vue-mobi-scroll :options="selectOptions"></vue-mobi-scroll>
```
step4: bind data<br> 
These three types have different option set. Here are exmaples.
```javascript
export default {
    data () {
      return {
        dateOptions: {
          type: 'date', // type: date
          min: '2016-2-3', // minimun date
          max: '2018-2-3',// maximum date
          origin: '2017-2-3'// origin date
        },
        timeOptions: {
          type: 'time',// type: time
          origin: '00:00'// origin time
        },
        selectOptions: {
          type: 'select',// type: select
          loop: false,// need loop ? true : false
          origin: '请选择',// origin
          selections: [ // name is what you can see, do you want it can be selected？ if yes, disabled: true, if no, disabled: false
            [{name: '请选择', disabled: true}, 
            {name: '3', disabled: false},
            {name: '4', disabled: false}, 
            {name: '6',disabled: false}, 
            {name: '8', disabled: false}]
          ]
        }
      }
    }
  }
```

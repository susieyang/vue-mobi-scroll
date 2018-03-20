# vue-mobi-scroll
##Description<br>
Demo is in /demo, you can run "npm run dev" to see it.
Library is in /vue-mobi-scroll.
By the way, it only support mobile web page and cannot work well on PC. I will try to support PC terminal later.

##How to use it:<br>
1 install<br>
```
npm install vue-mobi-scroll
```
2 registe<br>
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

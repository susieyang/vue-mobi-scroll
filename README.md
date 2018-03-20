# vue-mobi-scroll
Demo is in /demo, you can run "npm run dev" to see it.
Library is in /vue-mobi-scroll.
By the way, it only support mobile web page and cannot work well on PC. I will try to support PC terminal later.

How to use it:

    1 npm install vue-mobi-scroll
    2 if you want to use it globally, register it in main.js
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

import VueMobiScrollComponent from './mobiScrollNew.vue'
const VueMobiScroll = {
  install: function(Vue) {
    Vue.component(VueMobiScrollComponent.name, VueMobiScrollComponent)
  }
}
// 这里的判断很重要
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueMobiScroll)
}
export default VueMobiScroll

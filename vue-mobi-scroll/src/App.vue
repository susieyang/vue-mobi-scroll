<template>
  <div id="app">
    日期示例：
    <div @click="change('date', '2017-5-6')">点击修改'2017-5-6'</div>
    <vue-mobi-scroll ref="beginTime" :options="{type: 'date', min: dateOptions.min, max: dateOptions.max, value: dateOptions.value}" @set-val="setVal"></vue-mobi-scroll>
    时间示例：
    <div @click="change('time', '07:08')">点击修改'07:08'</div>
    <vue-mobi-scroll :options="timeOptions" @set-val="setVal"></vue-mobi-scroll>
    多项选择示例：
    <div @click="change('select', '3')">点击修改'3'</div>
    <vue-mobi-scroll :options="selectOptions" @set-val="setVal"></vue-mobi-scroll>
  </div>
</template>

<script>
import {VueMobiScroll} from './lib/index.js'
export default {
  components: {
    VueMobiScroll
  },
  data () {
    return {
      dateOptions: {
        type: 'date', // 类型：日期
        min: '', // 最小值
        max: '',// 最大值
        value: ''// 初始值
      },
      timeOptions: {
        type: 'time',// 类型：时间
        value: ''// 初始值
      },
      selectOptions: {
        type: 'select',// 类型：多选
        loop: false,// 可循环
        value: '4',// 初始值
        selections: [ // 选项 disable: true 不可选择
          [{name: '请选择', disabled: true}, {name: '1', disabled: false}, {name: '2', disabled: false}, {
            name: '3',
            disabled: false
          }, {name: '4', disabled: false}]
        ]
      }
    }
  },
  methods: {
    setVal (val) {
      console.log(val)
    },
    change (type, val) {
      console.log('123')
      this[type + 'Options'].value = val
    },
    dateFormat (date) {
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let day = date.getDate()
      return year + '-' + month + '-' + day
    }
  },
  mounted () {
//    this.dateOptions.disabled = true
    console.log('12345')
    setTimeout(() => {
      console.log('54123')
      let now = new Date()
      this.dateOptions.min = this.dateFormat(new Date(now.getFullYear(), now.getMonth(), now.getDate()))
      this.dateOptions.max = this.dateFormat(new Date(now.getFullYear() + 2, now.getMonth(), now.getDate()))
      this.dateOptions.value = this.dateOptions.min
      this.$nextTick(() => {
        this.$refs.beginTime.ready()
      })
//      this.dateOptions.disabled = false
    }, 2000)
  }
}
</script>

<style>
</style>

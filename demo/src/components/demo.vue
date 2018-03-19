<template>
  <div>
    日期示例：
    <vue-mobi-scroll :options="dateOptions"></vue-mobi-scroll>
    时间示例：
    <vue-mobi-scroll :options="timeOptions"></vue-mobi-scroll>
    多项选择示例：
    <vue-mobi-scroll :options="selectOptions"></vue-mobi-scroll>
  </div>
</template>
<script>
/* eslint-disable */
  export default {
    data () {
      return {
        dateOptions: {
          type: 'date', // 类型：日期
          min: '2016-2-3', // 最小值
          max: '2018-2-3',// 最大值
          origin: '2017-2-3'// 初始值
        },
        timeOptions: {
          type: 'time',// 类型：时间
          origin: '00:00'// 初始值
        },
        selectOptions: {
          type: 'select',// 类型：多选
          loop: false,// 可循环
          origin: '1',// 初始值
          selections: [ // 选项 disable: true 不可选择
            [{name: '请选择', disabled: true}, {name: '1', disabled: false}, {name: '2', disabled: false}, {
              name: '3',
              disabled: false
            }, {name: '4', disabled: false}]
          ]
        }
      }
    }
  }
</script>
<style scoped>
</style>

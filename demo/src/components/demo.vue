<template>
  <div>
    日期示例：
    <mobiScrollNew :options="dateOptions"></mobiScrollNew>
    时间示例：
    <mobiScrollNew :options="timeOptions"></mobiScrollNew>
    多项选择示例：
    <mobiScrollNew :options="selectOptions"></mobiScrollNew>
  </div>
</template>
<script>
  import mobiScrollNew from '../lib/mobiScrollNew.vue'
  export default {
    components: {
      mobiScrollNew
    },
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
          origin: '不可用',// 初始值
          selections: [
            [{name: '请选择', disabled: true}, {name: '1', disabled: false}, {name: '2', disabled: false}, {name: '3', disabled: false}, {name: '4', disabled: false}]
          ]
        }
      }
    }
  }
</script>
<style scoped>
</style>

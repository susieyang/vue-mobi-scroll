# vue-mobi-scroll
Demo is in /demo, you can run "npm run dev" to see it.
Lib is in /demo/src/lib.
You can copy the lib folder into your own project and use mobiscrollNew.vue as a component.


    日期示例：
    <mobiScrollNew :options="dateOptions"></mobiScrollNew>
    时间示例：
    <mobiScrollNew :options="timeOptions"></mobiScrollNew>
    多项选择示例：
    <mobiScrollNew :options="selectOptions"></mobiScrollNew>


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
            [{name: '请选择', disabled: true}, {name: '1', disabled: false}, {name: '2', disabled: false}, {name: '3', disabled: false}, {name: '4', disabled: false}]
          ]
}

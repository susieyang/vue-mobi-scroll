# vue-mobi-scroll
Demo is in /demo, you can run "npm run dev" to see it.
Lib is in /vue-mobi-scroll.
You can copy the lib folder into your own project and use mobiscrollNew.vue as a component.
By the way, this can only be used in mobile web page and cannot work well on PC. I will try to support PC terminal later.

有三种基本模式可以选择：日期模式，时间模式和多选模式，只需要给组件传入options即可使用,其中，

日期模式的参数为：
          type: 'date', // 类型：日期
          min: '2016-2-3', // 最小值
          max: '2018-2-3',// 最大值
          origin: '2017-2-3'// 初始值

时间模式的参数为：
          type: 'time',// 类型：时间
          origin: '00:00'// 初始值

多选模式的参数为：
          type: 'select',// 类型：多选
          loop: false,// 可循环
          origin: '1',// 初始值
          selections: [ // 选项 disable: true 不可选择
            [{name: '请选择', disabled: true}, {name: '1', disabled: false}, {name: '2', disabled: false}, {name: '3', disabled: false}, {name: '4', disabled: false}]
          ]

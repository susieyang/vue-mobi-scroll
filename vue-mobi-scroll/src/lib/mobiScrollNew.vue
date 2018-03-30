<template>
  <div>
    <input type="text" :placeholder="options.placeholder ? options.placeholder : '请选择'" readonly :value="options.value | dateFormat('yy-mm-dd', options.type)" @click="showScoll">
    <div class="mbsc" v-show="show">
      <div class="mbsc-mask" @click="cancel()"></div>
      <div class="mbsc-fr">
        <div class="mbsc-btn flex flex-between after-line">
          <div @click="cancel()">取消</div>
          <div @click="ok()">确定</div>
        </div>
        <div class="mbsc-content flex flex-between">
          <div class="mbsc-line after-line before-line"></div>
          <mobi-scroll-part
            ref="part"
            :options="part.options"
            :value="part.value"
            :selection="part.selection"
            :index = "index"
            v-for="(part, index) in parts" @change-val="changeVal($event, index)">
          </mobi-scroll-part>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import mobiScrollPart from './mobiScrollPart.vue'
  export default {
    name: 'vue-mobi-scroll',
    components: {
      mobiScrollPart
    },
    props: ['options'],
    data () {
      return {
        show: false,
        lastValue: '',
        parts: []
      }
    },
    methods: {
      ready () {
        this.parts = []
        switch (this.options.type) {
          case 'select':
            for (let i = 0; i < 1; i++) {
              this.parts.push({
                options: {
                  loop: this.options.loop,
                  freeMode: true,
                  label: ['', ''],
                  height: {
                    allH: 180,
                    itemH: 34,
                    startTrans: (180 - 34) / 2
                  }
                },
                value: this.options.value ? this.options.value : this.options.selections[0],
                selection: this.options.selections[i]
              })
            }
            break
          case 'date':
            let valueDate
            if (this.options.value) {
              valueDate = this.options.value.split('-')
            } else {
              valueDate = this.options.min.split('-')
            }
            this.parts.push({
              options: {
                loop: false,
                freeMode: true,
                label: ['', ''],
                height: {
                  allH: 180,
                  itemH: 34,
                  startTrans: (180 - 34) / 2
                }
              },
              value: Number(valueDate[0]),
              selection: this.getYears()
            })
            this.parts.push({
              options: {
                loop: true,
                freeMode: true,
                label: ['', '月'],
                height: {
                  allH: 180,
                  itemH: 34,
                  startTrans: (180 - 34) / 2
                }
              },
              value: Number(valueDate[1]),
              selection: this.getMonthsByYear(this.parts[0].value)
            })
            this.parts.push({
              options: {
                loop: true,
                freeMode: true,
                label: ['', ''],
                height: {
                  allH: 180,
                  itemH: 34,
                  startTrans: (180 - 34) / 2
                }
              },
              value: Number(valueDate[2]),
              selection: this.getDaysByMonthYear(this.parts[0].value, this.parts[1].value)
            })
            break
          case 'time':
            let valueTime
            if (this.options.value) {
              valueTime = this.options.value.split(':')
            } else {
              valueTime = ('00:00').split(':')
            }
            this.parts.push({
              options: {
                loop: true,
                freeMode: true,
                label: ['', ''],
                height: {
                  allH: 180,
                  itemH: 34,
                  startTrans: (180 - 34) / 2
                }
              },
              value: valueTime[0],
              selection: this.getHours()
            })
            this.parts.push({
              options: {
                loop: true,
                freeMode: true,
                label: ['', ''],
                height: {
                  allH: 180,
                  itemH: 34,
                  startTrans: (180 - 34) / 2
                }
              },
              value: valueTime[1],
              selection: this.getMins()
            })
            break
        }
      },
      changeVal (val, index) {
        this.parts[index].value = val
        if (this.options.type === 'date') {
          switch (index) {
            case 0:
              this.parts[index + 1].selection = this.getMonthsByYear(this.parts[index].value)
              this.changeVal(this.parts[index + 1].value, 1)
              break
            case 1:
              this.parts[index + 1].selection = this.getDaysByMonthYear(this.parts[index - 1].value, this.parts[index].value)
              break
          }
        }
      },
      setValue (newVal) {
        switch (this.options.type) {
          case 'select':
            this.parts[0].value = newVal
            this.$refs.part[0].setValue(this.parts[0].value)
            break
          case 'date':
            let date = newVal.split('-')
            for (let i = 0; i < date.length; i++) {
              this.parts[i].value = Number(date[i])
              this.$refs.part[i].setValue(this.parts[i].value)
            }
            break
          case 'time':
            let time = newVal.split(':')
            for (let i = 0; i < time.length; i++) {
              this.parts[i].value = time[i]
              this.$refs.part[i].setValue(this.parts[i].value)
            }
            break
        }
      },
      ok (type) {
        this.show = false
        switch (this.options.type) {
          case 'select':
            this.options.value = ''
            for (let i = 0; i < this.parts.length; i++) {
              this.options.value += this.parts[i].value
            }
            break
          case 'date':
            this.options.value = this.parts[0].value + '-' + this.parts[1].value + '-' + this.parts[2].value
            break
          case 'time':
            this.options.value = this.parts[0].value + ':' + this.parts[1].value
            break
        }
        this.$emit('set-val', this.options.value)
      },
      cancel () {
        this.show = false
        if(this.lastValue !== '') {
          this.setValue(this.lastValue)
        }
      },
      getHours () {
        let times = []
        for (let i = 0; i < 10; i++) {
          times.push({name: '0' + i, disabled: false})
        }
        for (let i = 10; i < 24; i++) {
          times.push({name: '' + i, disabled: false})
        }
        return times
      },
      getMins () {
        let times = []
        for (let i = 0; i < 10; i++) {
          times.push({name: '0' + i, disabled: false})
        }
        for (let i = 10; i < 60; i++) {
          times.push({name: '' + i, disabled: false})
        }
        return times
      },
      getYears () {
        let min = this.options.min.split('-')
        let max = this.options.max.split('-')
        let years = []
        years = []
        for (let i = Number(min[0]); i <= Number(max[0]); i++) {
          years.push({name: i, disabled: false})
        }
        return years
      },
      getMonthsByYear (year) {
        let min = this.options.min.split('-')
        let max = this.options.max.split('-')
        let months = []
        switch (year) {
          case Number(min[0]):
            for (let i = 1; i <= 12; i++) {
              if (i < Number(min[1])) {
                months.push({disabled: true, name: i})
              } else {
                months.push({disabled: false, name: i})
              }
            }
            break
          case Number(max[0]):
            for (let i = 1; i <= 12; i++) {
              if (i > Number(max[1])) {
                months.push({disabled: true, name: i})
              } else {
                months.push({disabled: false, name: i})
              }
            }
            break
          default:
            for (let i = 1; i <= 12; i++) {
              months.push({disabled: false, name: i})
            }
            break
        }
        return months
      },
      getDaysByMonthYear (year, month) {
        let isRunYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
        let all = 31
        switch (Number(month)) {
          case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            all = 31
            break
          case 2:
            all = isRunYear ? 29 : 28
            break
          case 4: case 6: case 9: case 11:
            all = 30
            break
        }
        let minDate = this.options.min.split('-')
        let maxDate = this.options.max.split('-')
        let days = []
        if (year === Number(minDate[0]) && month === Number(minDate[1])) {
          for (let i = 1; i <= all; i++) {
            if (i < Number(minDate[2])) {
              days.push({disabled: true, name: i})
            } else {
              days.push({disabled: false, name: i})
            }
          }
        } else if (year === Number(maxDate[0]) && month === Number(maxDate[1])) {
          for (let i = 1; i <= all; i++) {
            if (i > Number(maxDate[2])) {
              days.push({disabled: true, name: i})
            } else {
              days.push({disabled: false, name: i})
            }
          }
        } else {
          for (let i = 1; i <= all; i++) {
            days.push({disabled: false, name: i})
          }
        }
        return days
      },
      showScoll () {
        if (!this.options.disabled) {
          this.show = true
          if (this.lastValue !== this.options.value) {
            this.setValue(this.options.value)
            this.lastValue = this.options.value
          }
        }
      }
    },
    filters: {
//      例 'yy-mm-dd' 'yy-m-d' 'yy年-m月-d年'
      dateFormat: function (str, format, type) {
        if (type === 'date' && str.length > 0) {
          let tempStr = str.split('-')
          let tempFormat = format.split('-')
          let result = tempStr[0]
          let temp = tempFormat[0].split('yy')
          if (temp.length > 1) {
            result += temp[1]
          }
          result += '-'
          let pattern = new RegExp('m', 'g');
          if (format.match(pattern).length > 1) {
            temp = tempFormat[1].split('mm')
            result += tempStr[1].length > 1 ?  '' : '0'
          } else {
            temp = tempFormat[1].split('m')
          }
          result += tempStr[1]
          if (temp.length > 1) {
            result += temp[1]
          }
          result += '-'
          pattern = new RegExp('d', 'g');
          if (format.match(pattern).length > 1) {
            temp = tempFormat[2].split('dd')
            result += tempStr[2].length > 1 ?  '' : '0'
          } else {
            temp = tempFormat[2].split('d')
          }
          result += tempStr[2]
          if (temp.length > 1) {
            result += temp[1]
          }
          return result
        } else {
          return str
        }
      }
    },
    mounted () {
      this.ready()
    }
  }
</script>
<style scoped>
  .flex {
    display: -webkit-box; /* Chrome 4+, Safari 3.1, iOS Safari 3.2+ */
    display: -moz-box; /* Firefox 17- */
    display: -webkit-flex; /* Chrome 21+, Safari 6.1+, iOS Safari 7+, Opera 15/16 */
    display: -moz-flex; /* Firefox 18+ */
    display: -ms-flexbox; /* IE 10 */
    display: flex; /* Chrome 29+, Firefox 22+, IE 11+, Opera 12.1/17/18, Android 4.4+ */
  }

  .flex-1 {
    flex: 1;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -moz-flex: 1;
    box-flex: 1;
    -ms-flex: 1;
  }

  .flex-between {
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    -webkit--moz-box-pack: space-between;
    box-pack: space-between;
    justify-content: space-between;
  }

  .after-line:after {
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    background: #e1e1e1;
    height: 1px;
    width: 100%;
    transform: scaleY(0.5);
  }

  .before-line:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    background: #e1e1e1;
    height: 1px;
    width: 100%;
    transform: scaleY(0.5);
  }

  .mbsc {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
  }

  .mbsc-mask {
    background: rgba(0, 0, 0, .2);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }

  .mbsc-fr {
    background: #fff;
    width: 100%;
    /*height: 270px;*/
    position: fixed;
    bottom: 0;
    left: 0;
  }

  .mbsc-btn {
  }

  .mbsc-btn > div {
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
  }

  .mbsc-content {
    height: 180px;
    overflow: hidden;
    margin: 10px;
  }
  .mbsc-line {
    position: absolute;
    top: 51%;
    /*margin-top: -17px;*/
    height: 34px;
    width: 100%;
    margin-left: -10px;
  }

  .mbsc-part-wrapper {
    text-align: center;
  }
  .mbsc-item {
    height: 34px;
    line-height: 34px;
    padding: 0 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #9d9d9d;
  }
  .mbsc-chosen {
    color: #000;
  }
  .mbsc-disable {
    opacity: .3;
  }
</style>

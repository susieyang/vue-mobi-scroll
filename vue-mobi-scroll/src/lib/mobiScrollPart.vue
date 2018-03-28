<template>
  <div class="mbsc-part-container flex-1"
       @touchstart="touchStart($event)"
       @touchmove="touchMove($event)"
       @touchend="touchEnd($event)">
    <div class="mbsc-part-wrapper flex-1"
         :style="{'transform': 'translate3d(0px, ' + trans + 'px, 0px)', 'transition-duration':''+ duration + 'ms', 'margin-top': loopMarginTop + 'px'}">
      <div class="mbsc-item"
           :class="{'mbsc-chosen': item.name === chosenName, 'mbsc-disable': item.disabled}"
           v-for="(item, index) in localSelection">
        {{options.label[0]}}{{item.name}}{{options.label[1]}}
      </div>
    </div>
  </div>
</template>
<script>
    export default {
      props: ['options', 'selection', 'value'],
      data () {
        return {
          localSelection: [],
          startTrans: 0,
          trans: 0,
          duration: 0,
          chosenIndex: 0,
          start: 0,
          move: 0,
          end: 0,
          last: 0,
          limitUp: 0,
          limitDown: 0,
          speeds: [],
          speed: null,
          loopMarginTop: 0
        }
      },
      computed: {
        chosenName () {
          let chosen = this.loopIndex(this.selection, this.chosenIndex)
          if (chosen.disabled) {
            return ''
          } else {
            return chosen.name
          }
        }
      },
      watch: {
        selection (newVal, oldVal) {
          this.ready()
        }
      },
      methods: {
        ready () {
          if (this.options.loop) {
            this.localSelection = this.copyDoubleArray(this.selection)
            this.trans = (this.options.height.allH - this.options.height.itemH * (this.localSelection.length + 1)) / 2
            this.loopMarginTop = 0
          } else {
            this.localSelection = this.selection
            this.limitUp = this.options.height.startTrans
            this.limitDown = this.options.height.startTrans - this.options.height.itemH * (this.localSelection.length - 1)
            this.trans = this.options.height.startTrans
          }
          this.chosenIndex = 0
          this.startTrans = this.trans
          this.last = this.trans
          this.setValue(this.value)
        },
        touchStart ($event) {
          $event.preventDefault()
          this.start = $event.touches[0].pageY
        },
        touchMove ($event) {
          $event.preventDefault()
          this.move = $event.touches[0].pageY
          this.actualMove(this.move - this.start, 0)
          this.speedRecord() // 记录速度
          this.start = this.move
        },
        touchEnd ($event) {
          $event.preventDefault()
          this.end = $event.changedTouches[0].pageY
          if (this.options.freeMode) {
            let speed1 = this.speeds.pop()
            let speed2 = this.speeds.pop()
            if (speed1 && speed2) {
              let p = speed2.position - speed1.position
              let t = speed2.time - speed1.time
              this.speed = p / t
            }
            this.duration = 300 // 最好是20的整数倍
            if (this.speed <= 0.1 && this.speed >= -0.1) {
              this.actualMove(this.speed * this.duration, 0, true, true)
            } else {
              this.actualMove(this.speed * this.duration, this.duration, true, true)
            }
          } else {
            this.actualMove(this.end - this.move, 0, true, true)
          }
        },
        actualMove (move, duration, fixed, emitChangeVal) {
          let that = this
          let closeIndex = null
          if (fixed) {
            moveFixed()
          }
          if (duration > 0) {
            for (let i = 0; i < duration; i = i + 20) {
              setTimeout(() => {
                moveOneMillsecond(move / duration * 20)
              }, i)
            }
          } else {
            moveOneMillsecond(move)
          }
          function moveOneMillsecond (move) {
            that.trans = move * 0.5 + that.last
            that.duration = 0
            that.limitTrans()
            closeIndex = (that.startTrans - that.trans) / that.options.height.itemH
            if (that.options.loop) {
              that.loopShift(that.localSelection, that.chosenIndex - Math.round(closeIndex))
            }
            that.chosenIndex = Math.round(closeIndex)
            that.last = that.trans
          }
          function moveFixed () {
            let transEnd = move * 0.5 + that.last
            if (!that.options.loop) {
              if (transEnd >= that.limitUp) {
                transEnd = that.limitUp
              }
              if (transEnd <= that.limitDown) {
                transEnd = that.limitDown
              }
            }
            let tempCloseIndex = Math.round((that.startTrans - transEnd) / that.options.height.itemH)
            let nextIndex = that.disabledNext(that.selection, tempCloseIndex, that.options.loop)
            if (emitChangeVal) {
              that.$emit('change-val', that.loopIndex(that.selection, nextIndex).name)
            }
            move = (that.startTrans - nextIndex * that.options.height.itemH - that.last) * 2
          }
        },
        setValue (val) {
          let valIndex = null
          if (val === '') {
            valIndex = 0
          } else {
            for (let i = 0; i < this.selection.length; i++) {
              if (this.selection[i].name === val) {
                valIndex = i
                break
              }
            }
            if (valIndex === null) {valIndex = 0}
            if (this.selection[valIndex].disabled) {
              for (let i = valIndex; i < this.selection.length; i++) {
                if (!this.selection[i].disabled) {
                  valIndex = i
                  break
                }
              }
            }
          }
          this.actualMove((this.chosenIndex - valIndex) * this.options.height.itemH / 0.5, 0, true, true)
        },
        limitTrans () {
          if (!this.options.loop) {
            if (this.trans >= this.limitUp) {
              this.trans = this.limitUp
            }
            if (this.trans <= this.limitDown) {
              this.trans = this.limitDown
            }
          }
        },
        speedRecord () {
          if (this.options.freeMode) {
            if (this.speeds.length < 4) {
              this.speeds.push({position: this.trans, time: new Date().getTime()})
            } else {
              this.speeds.shift()
              this.speeds.push({position: this.trans, time: new Date().getTime()})
            }
          }
        },
        copyDoubleArray (array) {
          let newArray = []
          for (let i = 0; i < array.length; i++) {
            newArray.push(array[i])
          }
          newArray.push.apply(newArray, array)
          return newArray
        },
        loopIndex (array, index) {
          let actualIndex = index % array.length
          if (actualIndex < 0) {
            actualIndex += array.length
          }
          if (actualIndex >= array.length) {
            return array[0]
          } else {
            return array[actualIndex]
          }
        },
        loopShift (array, step) {
          if (step > 0) {
            for (let i = 0; i < step; i++) {
              array.unshift(array.pop())
            }
          } else {
            for (let i = 0; i < -step; i++) {
              array.push(array.shift())
            }
          }
          if (step) {
            this.loopMarginTop = this.loopMarginTop - step * this.options.height.itemH
          }
        },
        disabledNext (array, index, loop) {
          if (this.loopIndex(array, index).disabled) {
            if (loop) {
              for (let i = 0; i < array.length; i++) {
                if (!this.loopIndex(array, index + i).disabled) {
                  return index + i
                }
                if (!this.loopIndex(array, index - i).disabled) {
                  return index - i
                }
              }
            } else {
              for (let i = index; i < array.length; i++) {
                if (!array[i].disabled) {
                  return i
                }
              }
              for (let i = index; i >= 0; i--) {
                if (!array[i].disabled) {
                  return i
                }
              }
            }
          } else {
            return index
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

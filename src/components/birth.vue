<template>
  <div class="bg" :style="{'height': minHeight+'px'}">
    <p>您的出生年月</p>
    <div class="birth_choose">
      <picker :data="time" v-model="chooseTime"></picker>
    </div>
    <div class="submit" @click="submit">确定</div>
  </div>
</template>

<script>
  import { Picker } from 'vux'

  export default {
    name: 'birth',
    data () {
      return {
        time: [
          ['2000年', '2001年', '2002年'],
          ['01月', '02月', '03月', '04月', '05月', '06月', '07月', '08月', '09月', '10月', '11月', '12月']
        ],
        chooseTime: ['1980年', '06月'],
        minHeight: ''
      }
    },
    mounted () {
      // 获取屏幕高度，计算下方大小
      let clientHeight = window.innerHeight || window.screen.availHeight || document.body.clientHeight
      this.minHeight = clientHeight
      // 获取当前年份
      let nowData = new Date()
      let arr = []
      for (let i = 1930; i <= nowData.getFullYear(); i++) {
        arr.push(i + '年')
      }
      this.time[0] = arr
    },
    components: {
      Picker
    },
    methods: {
      submit () {
        const _this = this
        // console.log(this.chooseTime)
        sessionStorage.birthday = this.chooseTime[0] + this.chooseTime[1]
        setTimeout(function () {
          _this.$router.push('list')
        }, 0)
      }
    }
  }
</script>

<style scoped lang='scss'>
  a {
    text-decoration: none;
  }
  .bg {
    background-repeat: repeat;
    background-image: url("./../assets/background.png");

    p {
      margin: 0;
      padding: 0.69rem 0 0;
      font-size: 0.3rem;
      color: #73cea5;
      text-align: center;
      font-weight: 500;
    }

    .birth_choose {
      width: 2.5rem;
      margin: 0.5rem auto;

      .vux-picker {
        font-size: 0.18rem;
      }
    }

    .submit {
      width: 1.8rem;
      height: 0.55rem;
      background-color: #73cea5;
      color: #fff;
      text-align: center;
      font-size: 0.18rem;
      line-height: .55rem;
      font-weight: 500;
      margin: 10px auto;
      border-radius: 3px;
    }
  }
</style>
<style>
  /*重写picker样式*/
  .scroller-indicator {
    background-image: linear-gradient(to bottom, #73cea5, #73cea5, transparent, transparent), linear-gradient(to top, #73cea5, #73cea5, transparent, transparent) !important;
  }
  .scroller-item-selected {
    color: #73cea5 !important;
  }
</style>

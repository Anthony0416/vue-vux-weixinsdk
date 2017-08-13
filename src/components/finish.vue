<template>
  <div class="bg" :style="{'height': minHeight+'px'}">
    <div class="box"></div>
    <div class="icon">
      <span></span>
    </div>
    <p class="title">提交成功</p>
    <p class="detail">由于本次活动是免费活动，咨询人我们会挑选处理，请耐心等待，谢谢~~</p>
    <div class="back" @click="home">返回首页</div>
  </div>
</template>

<script>
  export default {
    name: 'finish',
    data () {
      return {
        minHeight: ''
      }
    },
    mounted () {
      // 获取屏幕高度，计算下方大小
      let clientHeight = window.innerHeight || window.screen.availHeight || document.body.clientHeight
      this.minHeight = clientHeight
    },
    methods: {
      home () {
        this.$router.go(-6)
      }
    }
  }
</script>

<style scoped lang='scss'>
  .bg {
    background-repeat: repeat;
    background-image: url("./../assets/background.png");

    .box {
      height: .78rem;
      width: 100%;
      opacity: 0;
    }

    .icon {
      width: .66rem;
      height: .66rem;
      margin: 0 auto;
      background-color: #73cea5;
      border-radius: 50%;

      span {
        display: block;
        width: .33rem;
        height: .33rem;
        background-image: url("./../assets/my_advice.png");
        background-size: 4rem 4rem;
        background-repeat: no-repeat;
        background-position: -2rem .165rem;
        margin: 0 auto;
        padding-top: .165rem;
      }
    }

    .title {
      font-size: .3rem;
      color: #73cea5;
      text-align: center;
      margin: .22rem 0 .19rem;
    }

    .detail {
      font-size: .13rem;
      color: #777;
      text-align: center;
      margin: 0 .57rem;
    }

    .back {
      height: .45rem;
      width: 1.8rem;
      background-color: #73cea5;
      color: #fff;
      font-size: .18rem;
      text-align: center;
      line-height: .45rem;
      border-radius: 3px;
      margin: .67rem auto 0;
    }
  }
</style>

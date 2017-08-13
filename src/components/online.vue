<template>
  <div class="bg" :style="{'height': minHeight+'px'}">
    <p>你是MM还是GG</p>
    <div class="man1" @click="man">
      <div class="man2">男</div>
    </div>
    <div class="woman1" @click="woman">
      <div class="woman2">女</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'online',
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
      man () {
        sessionStorage.sex = '男'
        const _this = this
        setTimeout(function () {
          _this.$router.push('/birth')
        }, 200)
      },
      woman () {
        sessionStorage.sex = '女'
        const _this = this
        setTimeout(function () {
          _this.$router.push('/birth')
        }, 200)
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

    .man1 {
      width: 1.5rem;
      height: 1.5rem;
      margin: 0.54rem auto 0.25rem;
      background-color: #fff;
      border-radius: 50%;
      border: 2px dashed #8ad3b2;

      .man2 {
        width: 1.35rem;
        height: 1.35rem;
        margin: 0.067rem;
        border-radius: 50%;
        border: 1px dashed #8dd4b5;
        color: #82d0ad;
        font-size: 0.25rem;
        font-weight: bold;
        text-align: center;
        line-height: 1.35rem;
      }
    }

    .man1:hover {
      background-color: #73cea5;

      .man2 {
        border: 1px dashed #fff;
        color: #fff;
      }
    }

    .woman1 {
      width: 1.5rem;
      height: 1.5rem;
      margin: 0 auto 0.25rem;
      background-color: #fff;
      border-radius: 50%;
      border: 2px dashed #8ad3b2;

      .woman2 {
        width: 1.35rem;
        height: 1.35rem;
        margin: 0.07rem;
        border-radius: 50%;
        border: 1px dashed #8dd4b5;
        color: #82d0ad;
        font-size: 0.25rem;
        font-weight: bold;
        text-align: center;
        line-height: 1.35rem;
      }
    }

    .woman1:hover {
      background-color: #73cea5;

      .woman2 {
        border: 1px dashed #fff;
        color: #fff;
      }
    }
  }
</style>

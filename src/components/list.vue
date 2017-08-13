<template>
    <div class="bg" :style="{'height': minHeight+'px'}">
      <p>是否有过敏史</p>
      <div class="content">
        <c-option :text="option1" @click.native="Jump1"></c-option>
        <c-option :text="option2" @click.native="Jump2"></c-option>
        <c-option :text="option3" @click.native="Jump3"></c-option>
      </div>
    </div>
</template>

<script>
  import cOption from '../module/option.vue'

  export default {
    name: 'list',
    data () {
      return {
        minHeight: '',
        option1: '有',
        option2: '没有',
        option3: '不确定'
      }
    },
    mounted () {
      // 获取屏幕高度，计算下方大小
      let clientHeight = window.innerHeight || window.screen.availHeight || document.body.clientHeight
      this.minHeight = clientHeight
    },
    components: {cOption},
    methods: {
      Jump1 () {
        const _this = this
        sessionStorage.allergy = '有'
        setTimeout(function () {
          _this.$router.push('/t')
        }, 200)
      },
      Jump2 () {
        const _this = this
        sessionStorage.allergy = '没有'
        setTimeout(function () {
          _this.$router.push('/t')
        }, 200)
      },
      Jump3 () {
        const _this = this
        sessionStorage.allergy = '不确定'
        setTimeout(function () {
          _this.$router.push('/t')
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

    .content {
      margin-top: 0.5rem;
    }
  }
</style>

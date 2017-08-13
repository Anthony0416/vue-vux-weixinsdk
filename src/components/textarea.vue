<template>
  <div class="bg" :style="{'height': minHeight+'px'}">
    <p>皮肤问题的补充说明</p>
    <div class="text">
      <group>
        <x-textarea max="500" placeholder="请描述您的问题" height="200" v-model="value"></x-textarea>
      </group>
    </div>
    <div class="submit" @click="submit">确定</div>
  </div>
</template>

<script>
  import { Group, XTextarea } from 'vux'

  export default {
    name: 'textarea',
    data () {
      return {
        value: '',
        minHeight: ''
      }
    },
    mounted () {
      // 获取屏幕高度，计算下方大小
      let clientHeight = window.innerHeight || window.screen.availHeight || document.body.clientHeight
      this.minHeight = clientHeight
    },
    components: {
      Group,
      XTextarea
    },
    methods: {
      submit () {
        const _this = this
        sessionStorage.supplement = _this.value
        setTimeout(function () {
          _this.$router.push('/upload')
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

    .text {
      width: 3.25rem;
      margin: 0.3rem auto;
    }

    .submit {
      width: 3.25rem;
      height: 0.45rem;
      background-color: #73cea5;
      color: #fff;
      text-align: center;
      font-size: 0.18rem;
      line-height: .45rem;
      font-weight: 500;
      margin: 0.5rem auto;
      border-radius: 3px;
    }

  }
</style>

<style>
  .vux-x-textarea {
    border: 2px solid #82d0ad;
    border-radius: 3px;
  }
  .weui-textarea-counter {
    color: #73cea5 !important;
  }
</style>

<template>
    <div>
      <img :src="img" />
      <div class="text">
        <p :class="[sex?'show':'none']">性别：{{sex}}</p>
        <p :class="[birth?'show':'none']">出生年月：{{birth}}</p>
        <p :class="[allergy?'show':'none']">是否有过敏史：{{allergy}}</p>
        <p :class="[supplement?'show':'none']">皮肤问题的补充说明：{{supplement}}</p>
      </div>
    </div>
</template>

<script>
  import axios from 'axios2'
  import { Toast } from 'vux'

  export default {
    name: 'userIfo',
    data () {
      return {
        img: '',
        sex: '',
        birth: '',
        allergy: '',
        supplement: ''
      }
    },
    components: {
      Toast
    },
    mounted () {
      const _this = this
      axios.get('url').then(function (response) {
        // console.log(response.data)
        const data = response.data
        _this.img = 'http://xxx' + data.images
        _this.sex = data.sex
        _this.birth = data.birthday
        _this.allergy = data.allergy
        _this.supplement = data.supplement
      }).catch(function (response) {
        // console.log(response)
        _this.$vux.toast.show({
          text: '获取数据失败，请检查网络！',
          time: '2000',
          type: 'text',
          width: '2rem',
          position: 'middle'
        })
        _this.$router.push('/')
      })
    }
  }
</script>

<style scoped lang='scss'>
  .show {
    display: block;
  }
  .none {
    display: none;
  }
  div {
    padding: 0.15rem 0.15rem;

    img {
      width: 100%;
    }

    .text {
      margin: 0.2rem 0;
      padding: 0;

      p {
        margin: 0.02rem 0;
        color: #303030;
        font-size: 0.13rem;
      }
    }
  }
</style>

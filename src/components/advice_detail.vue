<template>
  <div class="advice">
    <router-link :to="'/user_ifo/'+id">
      <div class="head">
        <div class="img" :style="{backgroundImage: 'url(' + img + ')'}"></div>
        <div>
          <p>性别：{{sex}}</p>
          <p>出生年月：{{birth}}</p>
          <p>皮肤问题在面部吗：{{Q1}}</p>
        </div>
        <span></span>
      </div>
    </router-link>
    <!------------------------没有数据--------------------------->
    <div :class="[report? 'none': 'show']" class="noData" :style="{'min-height': minHeight + 'px'}">
      <div class="icon"></div>
      <p class="text">暂时还没有诊断报告哦~~</p>
      <div class="btn" @click="Jump">返回首页</div>
    </div>
    <!-------------------------有数据---------------------------->
    <div class="adData" :class="[report? 'show': 'none']" :style="{'min-height': minHeight + 'px'}">
      <div class="ball">
        <div v-for="index in 34"></div>
      </div>
      <div class="top">来自刘教授的回复</div>
      <div class="middle">
        <p><span>咨询结果：</span>{{answer.result}}</p>
        <p><span>建议：</span>{{answer.suggest}}</p>
        <p><span>注意事项：</span>{{answer.attention}}</p>
        <p><span>皮肤护理：</span>{{answer.care}}</p>
      </div>
      <div class="bottom"></div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios2'
  import { Toast } from 'vux'

  export default{
    name: 'advice',
    data () {
      return {
        id: 1,
        img: 'static/img/headshot_default.png',
        sex: '女',
        birth: '1991年10月',
        Q1: '是',
        report: true,
        minHeight: 400,
        answer: {
          result: '皮肤红有脓点，看起来不像普通的痘痘，可能是由于皮肤护理不当，造成敏感肌肤所致，特点是开始容易过敏，但很快会好，一段时间后皮肤变红，不太容易消退，不时会有红痘痘或脓疱疹，反复出现。',
          suggest: '目前你面部的皮肤处于高敏状态，最好减少局部用药刺激，也不能挤压。可口服盐酸西替利嗪（仙特敏）局部外用夫西地酸。',
          attention: '面部不能预热，包括热水和热气，防止日晒。清淡饮食。睡眠规律，调整情绪，多运动。尽量不用面膜，和粉底，减少卸妆对皮肤的伤害。皮肤护理：清水洗脸，每天或隔日用一次洗面奶，尽量不用，减少上妆，仅用保湿或修复霜。可用活泉水作冷敷，如果必须上妆，可用干粉。推荐使用高度敏感及耐受性差肌肤，敏感肌肤清洁的相关产品。',
          care: '推荐产品包括：舒缓特护洁面乳，舒护活泉喷雾，舒缓特护面霜，舒缓特护洁面乳，活泉修护洁面乳，无皂基平衡洁肤凝胶。'
        }
      }
    },
    components: {
      Toast
    },
    mounted () {
      const _this = this
      // 获取屏幕高度，计算下方大小
      let clientHeight = window.innerHeight || window.screen.availHeight || document.body.clientHeight
      this.minHeight = clientHeight - 1.2 * parseInt(document.documentElement.style.fontSize)
      axios.get('url').then(function (response) {
        // console.log(response.data)
        const data = response.data
        _this.id = data.mid
        _this.img = 'http://xxx' + data.images
        _this.sex = data.sex
        _this.birth = data.birthday
        _this.Q1 = data.allergy
        if (!data.result) {
          _this.report = false
        } else {
          _this.report = true
          _this.answer.result = data.result
          _this.answer.suggest = data.proposal
          _this.answer.attention = data.careful
          _this.answer.care = data.reminder
        }
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
    },
    methods: {
      Jump () {
        this.$router.push('/')
      }
    }
  }

</script>

<style scoped lang='scss'>
  p {
    margin: 0;
  }
  .show {
    display: block;
  }
  .none {
    display: none;
  }
  /* ================================head========================== */
  .head {
    height: 1.2rem;
    width: 3.75rem;
    background-image: url(./../assets/my_advice.png);
    background-size: 4rem 4rem;
    background-position: 0 -2.5rem;
    position: relative;

    .img {
      height: .6rem;
      width: .6rem;
      position: absolute;
      top: .29rem;
      left: .15rem;
      border: 2px solid #fff;
      box-sizing: border-box;
      background-repeat: no-repeat;
      background-size: cover;
      /*border-radius: 50%;*/
    }

    div{
      position: absolute;
      top:0.31rem;
      left: 0.87rem;

      p{
        font-size: 0.13rem;
        color: #fff;
      }
    }

    span {
      width: 0.075rem;
      height: 0.075rem;
      border-top: 2px solid #fff;
      border-right: 2px solid #fff;
      position: absolute;
      top:0.55rem;
      right:0.22rem;
      transform: rotate(45deg);
    }
  }
  /* =====================noData============================ */
  .noData {
    width: 100%;
    background-color: #eee;
    position: relative;

    .icon {
      height: 1.2rem;
      width: 1.2rem;
      position: absolute;
      top: .52rem;
      left: 50%;
      margin-left: -0.6rem;
      background-image: url(./../assets/my_advice.png);
      background-size: 4rem 4rem;
      background-position: 0 -1rem;
    }

    .text {
      width: 100%;
      font-size: 0.15rem;
      color: #5e5e5e;
      text-align: center;
      position: absolute;
      top: 1.877rem;
    }

    .btn {
      width: 3rem;
      height: 0.5rem;
      background-color: #82d0ad;
      text-align: center;
      line-height: 0.5rem;
      font-size: 0.18rem;
      color: #fff;
      position: absolute;
      top: 2.58rem;
      left: 0.375rem;
    }
  }
  /* =========================adData======================= */
  .adData {
    background-color: #eee;
    padding: 0.1rem 0.15rem;
    position: relative;

    .ball {
      position: absolute;
      top: .465rem;
      left: 0.16rem;

      div {
        width: 0.07rem;
        height:0.07rem;
        background-color: #fff;
        border-radius: 50%;
        display: inline-block;
        margin-left: 0.03rem;
      }
    }

    .top {
      height: 0.4rem;
      width: 3.45rem;
      background-color: #82d0ad;
      border-radius: 5px 5px 0 0;
      color: #fff;
      font-size: 0.15rem;
      text-align: center;
      line-height: 0.4rem;
    }
    .middle {
      width: 3rem;
      background-color: #fff;
      padding: 0.1rem 0.225rem 0.1rem;

      p {
        font-size: .13rem;
        color: #5e5e5e;
        margin: 0.1rem 0;
        font-weight: 400;

        span {
          color: #1b1b1b;
          font-weight: 600;
        }
      }
    }
    .bottom {
      height: 0.1rem;
      width: 3.45rem;
      background-color: #fff;
      border-radius: 0 0 5px 5px;
    }
  }
</style>

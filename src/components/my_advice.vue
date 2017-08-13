<template>
  <div class="advice">
    <div class="head">
      <img :src="img" width="100%" height="100%"/>
      <p class="name">{{name}}</p>
      <p class="userID">ID:{{userID}}</p>
    </div>
    <div :class="[report? 'none': 'show']" class="noData" :style="{'min-height': minHeight + 'px'}">
      <div class="icon"></div>
      <p class="text">暂时还没有诊断信息哦~~</p>
      <div class="btn" @click="jump">去皮肤咨询</div>
    </div>
    <div class="adData" :class="[report? 'show': 'none']" :style="{'min-height': minHeight + 'px'}">
      <div v-for="adData in adDatas">
        <router-link :to="'/advice_detail/' + adData.id">
          <div class="adList">
            <p class="title">我的咨询-{{adData.title}}</p>
            <p class="state" :style="{'color': adData.stateColor}">{{adData.state}}</p>
            <div class="img" :style="{backgroundImage: 'url(' + adData.img + ')'}"></div>
            <div class="ifo">
              <p class="sex">性别：{{adData.sex}}</p>
              <p class="birth">出生年月：{{adData.birth}}</p>
              <p class="Q1">皮肤问题在面部吗：{{adData.Q1}}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'vux'
  import axios from 'axios2'

  export default{
    name: 'advice',
    data () {
      return {
        img: 'static/img/headshot_default.png',
        name: '聊聊月色',
        userID: '12345679',
        report: false,
        minHeight: 400,
        adDatas: [{
          id: '1',
          title: '1',
          state: '已完成',
          stateColor: '#5e5e5e',
          img: 'static/img/headshot_default.png',
          sex: '女',
          birth: '1991年10月',
          Q1: '是'
        }, {
          id: '2',
          title: '2',
          state: '进行中',
          stateColor: '#66b39e',
          img: 'static/img/headshot_default.png',
          sex: '女',
          birth: '1991年10月',
          Q1: '是'
        }]
      }
    },
    components: {
      Toast
    },
    mounted () {
      // 获取屏幕高度，计算下方大小
      const _this = this
      // console.log(this)
      let clientHeight = window.innerHeight || window.screen.availHeight || document.body.clientHeight
      this.minHeight = clientHeight - 1.2 * parseInt(document.documentElement.style.fontSize) - 30
      this.name = localStorage.yimei_nickname
      this.img = localStorage.yimei_headimgurl
      this.userID = localStorage.yimei_id
      axios.get('url').then(function (response) {
        // console.log(response)
        let data = response.data
        if (!data) {
          _this.report = false
        } else {
          _this.report = true
          let patient = []
          for (let i = 0, l = data.length; i < l; i++) {
            let patientList = {}
            patientList.id = data[i].mid
            patientList.title = i + 1
            if (!data[i].result) {
              patientList.state = '进行中'
              patientList.stateColor = '#66b39e'
            } else {
              patientList.state = '已完成'
              patientList.stateColor = '#5e5e5e'
            }
            patientList.img = 'http://xxx' + data[i].images
            patientList.sex = data[i].sex
            patientList.birth = data[i].birthday
            patientList.Q1 = data[i].allergy
            patient.push(patientList)
          }
          _this.adDatas = patient
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
      jump () {
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

    img {
      height: .65rem;
      width: .65rem;
      position: absolute;
      top: .27rem;
      left: .24rem;
      border: 2px solid #fff;
      box-sizing: border-box;
      border-radius: 50%;
    }

    .name {
      font-size: 0.2rem;
      color: #fff;
      position: absolute;
      top: .35rem;
      left: 1.03rem;
    }

    .userID {
      font-size: 0.12rem;
      color: #fff;
      position: absolute;
      left: 1.03rem;
      top: .685rem;
      /*text-decoration: underline;*/
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
    padding: 15px;

    .adList {
      background-color: #fff;
      width: 3.45rem;
      height: 1.44rem;
      margin-bottom: 0.15rem;
      position: relative;

      .title {
        font-size: 0.18rem;
        color: #303030;
        position: absolute;
        top: 0.25rem;
        left: 0.165rem;
      }

      .state {
        font-size: 0.12rem;
        color: #5e5e5e;
        position: absolute;
        top: 0.28rem;
        right: 0.15rem;
      }

      .img {
        width: 0.6rem;
        height: 0.6rem;
        position: absolute;
        top: 0.6rem;
        left: 0.165rem;
        background-size: cover;
        background-repeat: no-repeat;
      }

      .ifo {
        position: absolute;
        top: 0.615rem;
        left: 0.885rem;

        .sex,.birth,.Q1 {
          font-size: 0.13rem;
          color: #5e5e5e;
          line-height: 0.18rem;
        }
      }
    }
  }
</style>

<template>
  <div class="bg" :style="{'height': minHeight+'px'}">
    <p class="title">图片采集</p>
    <div class="load_box_out">
      <div class="load_box_in" @click="chooseImages">
        <div class="img" :class="[choose?'show':'none']" :style="{backgroundImage: 'url(' + chooseImg + ')'}"></div>
        <span :class="[choose?'none':'show']" class="one"></span>
        <span :class="[choose?'none':'show']" class="two"></span>
        <p :class="[choose?'none':'show']">添加照片</p>
      </div>
    </div>
    <p class="text">请上传清晰的图片哦</p>
    <p class="text">这样有助于医生更好的分析问题</p>
    <div class="submit" @click="submit">确定</div>
  </div>
</template>

<script>
  import wx from 'weixin-js-sdk'
  import { Toast, Loading } from 'vux'
  import axios from 'axios2'

  export default {
    name: 'upload',
    data () {
      return {
        minHeight: '',
        choose: false,
        chooseImg: '#',
        imgUrl: ''
      }
    },
    components: {
      Toast,
      Loading
    },
    mounted () {
      // 获取屏幕高度，计算下方大小
      let clientHeight = window.innerHeight || window.screen.availHeight || document.body.clientHeight
      this.minHeight = clientHeight
      // console.log(this)
    },
    methods: {
      chooseImages () {
        const _this = this
        wx.chooseImage({
          count: 1, // 选择图片张数
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 图片来源
          success: function (res) {
            // 隐藏其他元素
            _this.choose = true
            // 渲染图片
            _this.imgUrl = res.localIds[0]
            if (window.__wxjs_is_wkwebview) { // 兼容垃圾苹果
              wx.getLocalImgData({
                localId: _this.imgUrl, // 图片的localID
                success: function (res) {
                  _this.chooseImg = res.localData // localData是图片的base64数据，可以用img标签显示
                }
              })
            } else {
              _this.chooseImg = _this.imgUrl
            }
          }
        })
      },
      submit () {
        const _this = this
        if (_this.chooseImg === '#') {
          _this.$vux.toast.show({
            text: '请添加照片！',
            time: '2000',
            type: 'text',
            width: '2rem',
            position: 'middle'
          })
        } else {
          wx.uploadImage({
            localId: _this.imgUrl,
            isShowProgressTips: 100,
            success: function (res) {
              let serverId = res.serverId // 返回图片的服务器端ID
              // 发送给后台
              axios.post('url', {
                openid: localStorage.yimei_openid,
                sex: sessionStorage.sex,
                birthday: sessionStorage.birthday,
                allergy: sessionStorage.allergy,
                supplement: sessionStorage.supplement,
                images: serverId
              }).then(
                function (response) {
                  // 回到提交成功页面
                  // console.log(response)
                  _this.$router.push('/finish')
                }
              ).catch(function () {
                _this.$vux.toast.show({
                  text: '上传失败，请稍后再试！',
                  time: '2000',
                  type: 'text',
                  width: '2rem',
                  position: 'middle'
                })
              })
            }
          })
        }
      }
    }
  }
</script>

<style scoped lang='scss'>
  p {
    color: #82d0ad;
    text-align: center;
    margin: 0;
  }
  .none {
    display: none;
  }
  .show {
    display: block;
  }
  .bg {
    background-repeat: repeat;
    background-image: url("./../assets/background.png");

    .title {
      padding: 0.69rem 0 0;
      font-size: 0.3rem;
      color: #73cea5;
      font-weight: 500;
    }

    .load_box_out {
      width: 2.25rem;
      height: 2.25rem;
      border-radius: 50%;
      border: 2px solid #82d0ad;
      background-color: #fff;
      margin: 0.31rem auto;

      .load_box_in {
        position: relative;
        overflow: hidden;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        border: 1px dashed #82d0ad;
        margin: .12rem;

        .img {
          width: 2rem;
          height: 2rem;
          background-size: cover;
          background-repeat: no-repeat;
        }

        span {
          background-color: #82d0ad;
          width: .4rem;
          height: .05rem;
          position: absolute;
        }

        .one {
          top: .9rem;
          left: .8rem;
        }

        .two {
          top: .9rem;
          left: .8rem;
          transform: rotate(90deg);
        }

        p {
          position: absolute;
          width: 2rem;
          top: 0;
          padding: 1.35rem 0 0;
          font-size: .18rem;
        }
      }
    }

    .text {
      font-size: 0.15rem;
      padding-top: 0.05rem;
    }

    .submit {
      width: 1.8rem;
      height: .55rem;
      color: #fff;
      font-size: .18rem;
      text-align: center;
      line-height: .55rem;
      background-color: #73cea5;
      border-radius: 3px;
      margin: .36rem auto 0;
    }
  }
</style>

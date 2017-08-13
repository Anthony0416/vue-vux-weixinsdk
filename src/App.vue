<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view v-wechat-title="$route.meta.title"></router-view>
  </div>
</template>

<script>
  import wx from 'weixin-js-sdk'

  export default {
    name: 'app',
    mounted () {
      // weixin
      wx.config({
        debug: false, // 开启调试模式，true会alert所有api返回值
        appId: localStorage.w_appId, // 公众号唯一id
        timestamp: localStorage.w_timestamp, // 生成签名的时间戳
        nonceStr: localStorage.w_nonceStr, // 生成签名的随机串
        signature: localStorage.w_signature, // 签名
        jsApiList: [ // 需要使用的js列表
          'chooseImage', // 选择图片
          'uploadImage', // 上传图片
          'getLocalImgData', // 获取本地图片接口
          'onMenuShareTimeline',
          'onMenuShareAppMessage',
          'onMenuShareQQ',
          'onMenuShareWeibo'
        ]
      })
    }
  }
</script>

<style>
#app {
  font-family: 'Microsoft Yahei','PingFang SC';
  font-size: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>

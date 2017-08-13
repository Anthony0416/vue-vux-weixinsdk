<template>
  <div>
    <div class="banner">
      <div class="logo"></div>
      <div class="vase"></div>
    </div>
    <div class="text">
      <div class="tip">专家坐镇 | 免费咨询</div>
      <div class="flower"></div>
      <h1 class="title">皮肤专家在线咨询</h1>
      <p>本次活动与港大医院皮肤科专家(刘教授)合作，在线咨询不提供任何药物处方，咨询结果仅供参考~~</p>
    </div>
    <div class="footer">
      <div class="one">
        <div class="red_heart"></div>
        <div class="online">
          <router-link to="/online">
            <div class="border"></div>
            <div class="icon"></div>
            <p class="english">Get Free Advice</p>
            <p class="chinese">在线咨询</p>
          </router-link>
        </div>
      </div>
      <div class="two">
        <div class="blue_heart"></div>
        <div class="my">
          <router-link to="/advice">
            <div class="border"></div>
            <div class="icon"></div>
            <p class="english">My History</p>
            <p class="chinese">我的咨询</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      title: '皮肤专家在线咨询'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
p {
  margin: 0
}
.banner {
  width: 3.75rem;
  height: 2.5rem;
  background-image: url(./../assets/home750_500.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #fff;
  position: relative;

  .logo {
    position: absolute;
    height: .33rem;
    width: 1.02rem;
    background-image: url(./../assets/icon.png);
    background-repeat: no-repeat;
    background-size: 1.25rem 4rem;
    top: .23rem;
    left: .25rem
  }

  .vase {
    position: absolute;
    height: 1.45rem;
    width: .8rem;
    background-image: url(./../assets/icon.png);
    background-repeat: no-repeat;
    background-size: 1.25rem 4rem;
    background-position: 0 -0.5rem;
    top: 1.3rem;
    left: .14rem
  }
}
/*==================text=========================*/
.text {
  margin: 0.25rem 0.27rem 0 0.27rem;
  height: 1.3rem;
  position: relative;

  .tip {
    width: 1.42rem;
    height: .25rem;
    line-height: .25rem;
    font-size: .13rem;
    text-align: center;
    background-color: #78c4a2;;
    color: #fff;
    /*letter-spacing: .025rem;*/
  }

  .flower {
    position: absolute;
    height: .38rem;
    width: .415rem;
    background-image: url(./../assets/icon.png);
    background-repeat: no-repeat;
    background-size: 1.25rem 4rem;
    background-position: 0 -1.95rem;
    top: -.05rem;
    right: -.18rem
  }

  .title {
    font-size: .32rem;
    color: #78c4a2;
    margin: .1rem 0;
  }

  p {
    font-size: 0.12rem;
    margin: .02rem 0 0;
    line-height: .2rem;
    color: #777777;
  }
}
/*=======================footer=======================*/
.footer {
  margin: .2rem;
  color: #fff;

  .one {
    width: 1.6rem;
    height: 1.3rem;
    position: relative;
    display: inline-block;
    margin-right: .1rem;

    .red_heart {
      position: absolute;
      height: .13rem;
      width: .275rem;
      background-image: url(./../assets/icon.png);
      background-repeat: no-repeat;
      background-size: 1.25rem 4rem;
      background-position: 0 -2.5rem;
      top: 0rem;
      right: 0rem;
    }

    .online {
      height: 1rem;
      width: 1.6rem;
      border-radius: .05rem;
      background-color: #ffa891;
      margin-top: .15rem;
      position: relative;

      .border {
        position: absolute;
        top: .07rem;
        left: .07rem;
        height: .86rem;
        width: 1.46rem;
        border: 1px solid #fff;
        box-sizing: border-box;
        border-radius: .05rem;
      }

      .icon {
        position: absolute;
        height: .36rem;
        width: .35rem;
        background-image: url(./../assets/icon.png);
        background-repeat: no-repeat;
        background-size: 1.25rem 4rem;
        background-position: 0 -2.75rem;
        top: .2rem;
        left: .2rem;
      }

      .english {
        font-family: Arial;
        position: absolute;
        font-size: .08rem;
        top: .45rem;
        right: .2rem;
        color: #fff;
      }

      .chinese {
        position: absolute;
        font-size: .18rem;
        top: .55rem;
        right: .2rem;
        /*font-weight: bold;*/
        color: #fff;
      }
    }
  }

  .two {
    width: 1.6rem;
    height: 1.3rem;
    position: relative;
    display: inline-block;

    .blue_heart {
      position: absolute;
      height: .13rem;
      width: .275rem;
      background-image: url(./../assets/icon.png);
      background-repeat: no-repeat;
      background-size: 1.25rem 4rem;
      background-position: -.35rem -2.5rem;
      top: 0rem;
      right: 0rem;
    }

    .my {
      height: 1rem;
      width: 1.6rem;
      border-radius: .05rem;
      background-color: #82d0ad;
      margin-top: .15rem;
      position: relative;

      .border {
        position: absolute;
        top: .07rem;
        left: .07rem;
        height: .86rem;
        width: 1.46rem;
        border: 1px solid #fff;
        box-sizing: border-box;
        border-radius: .05rem;
      }

      .icon {
        position: absolute;
        height: .305rem;
        width: .29rem;
        background-image: url(./../assets/icon.png);
        background-repeat: no-repeat;
        background-size: 1.25rem 4rem;
        background-position: -.5rem -2.75rem;
        top: .25rem;
        left: .2rem;
      }

      .english {
        font-family: Arial;
        position: absolute;
        font-size: .08rem;
        top: .45rem;
        right: .2rem;
        color: #fff;
      }

      .chinese {
        position: absolute;
        font-size: .18rem;
        top: .55rem;
        right: .2rem;
        /*font-weight: bold;*/
        color: #fff;
      }
    }
  }

}
</style>

<template>
  <div class="out">
    <div class="in">{{text}}</div>
  </div>
</template>

<script>
  export default {
    name: 'c-option',
    data () {
      return {}
    },
    props: ['text']
  }
</script>

<style scoped lang='scss'>
  .out {
    width: 2.25rem;
    height: .75rem;
    border: 2px dashed #82d0ad;
    border-radius: 5px;
    box-sizing: border-box;
    margin: 0.15rem auto;

    .in {
      width: 2.14rem;
      height: .65rem;
      border:1px dashed #82d0ad;
      margin: 0.035rem 0.04rem;
      box-sizing: border-box;
      border-radius: 4px;
      color: #82d0ad;
      font-size: 0.18rem;
      line-height: .65rem;
      text-align: center;
    }
  }

  .out:hover {
    background-color: #73cea5;
    border: 2px solid #73cea5;
    .in {
      border: 1px solid #fff;
      color: #fff;
    }
  }
</style>

<template>
    <div class="header">
      <div class="header-t">
        <div class="left">
          <div class="imgwrap">
            <img class="img" src="../../assets/img/shaozi.jpg" alt="">
          </div>
        </div>

        <ul class="middle">
          <li class="titlewrap">
            <span class="brand"> 品牌 </span>
            <span class="title"> 粥品香坊（大运村） </span>
          </li>
          <li class="express">蜂鸟专送/38分钟送达</li>
          <li class="discount">
            <span class="discount-icon"></span>
            <span class="discount-text">
            在线支付满28减5，满50减10
          </span>
          </li>
        </ul>

        <div class="right">
          <div class="icon">
            5个&gt;
          </div>
        </div>
      </div>

      <div class="header-b">
        <span class="gonggao">公告</span>
        <p class="gonggao-text">
          粥品香坊的烹饪材料秘方源于中国千年古法，在融合现代...&gt;
        </p>
      </div>

      <div class="footer">
        <div class="cart">

        </div>
        <div class="price">
          <p class="priceNum">￥0</p>
          <p class="expressPrice">配送费￥0</p>
        </div>
        <div class=""></div>

      </div>
    </div>




</template>

<script>
    export default {
        name: "index-header"
    }

</script>

<style lang="stylus" scoped>
  .footer{
    width:100%;
    height:0.55rem;
    background #141d27;
    position:fixed;
    bottom:0;
    left:0;
    z-index :3;
  }
  .header {
    display: flex;
    width: 100%;
    height: 1.34rem;
    background: rgb(72, 60, 48);
    color: #ffffff;
    //text-align: center;
    //line-height: .4rem;
    flex-direction column
  }
  .header-t{
    width:100%;
    height:1.06rem;
  }

    .header-b{
      display: flex;
     // padding .07rem .12rem
      background-color rgba(0,0,0,0.1)
      width 100%
      height .28rem
    }
      .gonggao{
        margin-top .06rem
        margin-left .06rem
        margin-right .06rem
        display inline-block
        width .26rem
        height .14rem
        background-color #fff
        color #000005
        font-size .07rem
        margin-right .04rem
        line-height .14rem
        text-align center
      }
      .gonggao-text{
        float left
        font-size .09rem
        line-height .28rem
      }
    .left{
      //width: 2.1rem;
      float:left;
    }

  .img{
    width:0.64rem;
    height:0.64rem;
    margin:0.24rem .24rem .16rem .18rem;
    border-radius: 2px;
  }
.middle{
  //display flex
  font-size .20rem
  padding-top .24rem
}
  .middle li{
    float left
  }
  .brand{
    display inline-block
    //margin-right .06rem
    width .32rem
    height .16rem
    background red
    color #fff
    //font-family "新宋体"
    text-align center
    line-height .16rem
    font-weight 400
    font-size .14rem
  }
  .title{
    font-size .16rem
    color white
    font-weight bold
    line-height .18rem
  }
  .express{
    font-size .14rem
    color white
    font-weight 200
    line-height .16rem
    margin-top 0.08rem
    margin-bottom 0.1rem
  }
  .discount-text{
    font-size .12rem
    color white
    font-weight 200
    line-height .12rem
    //margin-top 0.08rem
    margin-bottom 0.1rem
  }
  .discount-icon{
    display inline-block
    width .13rem
    height .13rem
    background-image url("../../assets/img/jian.png")
    background-size cover
  }

  .right{
    float:right;
  }
  .icon{
    width:0.5rem;
    height:.25rem;
    border-radius .2rem;
    font-size .1rem;
    color:#fff;
    text-align center
    line-height :.25rem;
    background-color :rgba(0,0,0,0.2);
    //margin-top .8rem
    margin-right :.1rem;

  }
</style>

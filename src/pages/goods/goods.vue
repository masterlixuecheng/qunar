<template>
  <div class="wrap">
    <ul id="LoutiNav" class="nav" >
      <li v-for="(item,index) in goods" :key="index"
          :class="{active: index === showIndex}"
          @click="handleClickGotoTop(index)">
        <!--<span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>-->
        <span class="nav-name"> {{item.name}}</span>
      </li>
    </ul>
    <div class="buy">
      <div class="everyGoods" v-for="listName in goods">
        <div class="GoodsType">{{listName.name}}</div>
        <div class="Goods" v-for="food in listName.foods">
          <img :src="food.icon">
          <div class="GoodsTit">
            <h2 class="foodName">{{food.name}}</h2>
            <!--<p>{{food.description}}</p>-->
            <p>月售<span>{{food.sellCount}}</span>&nbsp;&nbsp;&nbsp;好评率 <span>{{food.rating}}%</span></p>
            <b>￥{{food.price}} <s v-if="food.oldPrice">￥{{food.oldPrice}}</s></b>
          </div>
        </div>
      </div>
    </div>


  </div>


</template>

<script>
  // var flag = true;
  import axios from 'axios';
    export default {
      name: "goods",
      data: function(){
        return{
          goods: [],
          showIndex: 0,
          arr: []
        }
      },
      created() {
        this.getIndexData()
      },
      methods: {
        getIndexData() {
          axios.get('api/data.json')
            .then(this.handleGetDataSucc.bind(this))
            .catch(this.handleGetDataErr.bind(this))
        },
        handleGetDataSucc(res){
          this.goods = res.data.goods
        },
        handleGetDataErr(){
          console.log('error')
        },
        handleClickGotoTop(index){
          // flag = false;
          this.showIndex = index;
          console.log(index)
          //获取当前楼号对应楼层的 top值
          let iHeight = 0;
          let arr = [];
          let listHeight = $('.everyGoods');
          for( let i = 0 ; i < listHeight.length; i ++){
            arr.push(iHeight += listHeight[i].offsetHeight);
          }
          //console.log(arr);
          //[1260, 1418, 1576, 1979, 2259, 2540, 2943, 3591, 4361, 5621, 5779, 5937, 6340]
          let mDis = $('.header').height() + $('.tab').height();

          if((index-1) <0){
            $(".buy").animate({
              "scrollTop":0
            }, 200, function() {
              // flag = true;
            });
          }else{
            //将页面滚走的距离设置为  sTop
            $(".buy").animate({
              "scrollTop": arr[index-1]
            }, 200, function() {
              // flag = true;
            });
          }

        }
      }
    }
</script>

<style lang="stylus" scoped>
  ::-webkit-scrollbar {display:none}




  .wrap{
    display: flex;
    width:100%;
    height:4.9rem;
  }
  .nav{
    width: 0.8rem;
    height:100%;
    /*background-color: #55a532;*/
    position: relative;
    overflow: auto;

  }

    .nav li{
    background-color: rgb(243,245,247);
    color:#000000;
    font-size:.13rem;
    /*padding-top: .20rem;*/
    height: .5rem;
    line-height: .14rem;
    text-align: center;
    border-bottom: 0.01rem solid rgba(7,17,27,0.1 );
    display: table;
    width: .56rem;
    padding: 0 0.12rem;
  }
    .nav li.active{
      background-color: #ffffff;
      color:red;
    }
    .nav-name{
    display: table-cell;
    vertical-align: middle;
  }
    .icon{
    display: inline-block;
    vertical-align: top;
    margin-right: 0.12rem;
    background-repeat: no-repeat;
    width:.12rem;
    height:.12rem;
  }

  .buy{
    float:right;

    background: #fff;
    /*clear: both;*/
  }
  .buy{
    flex:1;
    background-color: #ffffff;
    color:rgb(24,20,2);
    float: left;
    width:1.6rem;
    height:100%;
    position: relative;

    overflow: auto;
  }
  ul{
    list-style-type: none;
  }
  .goodList{
    color:rgb(24,20,2);
    float: left;
    width:1.6rem;
    position: relative;
    padding: 0 0.24rem;
    /*z-index: 1;*/
  }
  .goodList li{
    font-size:.32rem;
    padding-top: .40rem;
    height: 1.08rem;
    text-align: center;
    border-bottom: 0.01rem solid rgba(7,17,27,0.1 );
  }
  .buyGoods{
    float:right;
    width:5.4rem;
    background: #fff;
    /*clear: both;*/
  }
  .buyGoods .GoodsType{
    height:.52rem;
    color:rgb(147,153,159);
    font-size:.32rem;
    line-height:.52rem;
    padding-left: .28rem;
    background:#f3f5f7;
    border-left:#d9dde1;
  }
 .GoodsType{
    height:.32rem;
    color:rgb(147,153,159);
    font-size:.16rem;
    line-height:.32rem;
    padding-left: .14rem;
    background:#f3f5f7;
    border-left:#d9dde1;
  }
  .buyGoods .Goods{
    height:0.75rem;
    padding:.18rem .18rem ;
    display: flex;
  }
  .Goods{
    height:0.75rem;
    padding:.18rem .18rem ;
    display: flex;
  }
  .GoodsTit{
    display: flex;
    flex-direction: column;
    margin-left:.1rem;
  }
  .buyGoods .Goods img{
    width:.64rem;
    height:.64rem;
  }
  .buyGoods .Goods h2{
    color:rgb(7,17,27);
    font-size:.16rem;
  }
  p{
    color:rgb(147,153,159);
    margin-top:.10rem;
    font-size:.13rem;
    line-hight:.12rem;
  }
  b{
    font-weight:700;
    color:rgb(147,15,15);
    line-height:.24rem;
    font-size:0.13rem;
  }
  b s{
    color:rgb(7,17,27);
  }
  .foodName{
    font-size:.14rem;
    color: rgb(7,17,27);
    line-height:.14rem;
  }
</style>

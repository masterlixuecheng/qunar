<template>
    <div>
      <index-header></index-header>
      <div class="tab">
        <div class="tab-item">
          <router-link class="link" :to="{path:'/goods'}">商品</router-link>
        </div>
        <div class="tab-item">
          <router-link class="link" :to="{path:'/raging'}">评价</router-link>
        </div>
        <div class="tab-item">
          <router-link class="link" :to="{path:'/seller'}">商家</router-link>
        </div>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
  import IndexHeader from '../header/header'
  import IndexGoods  from '../goods/goods'
  import IndexSeller from '../raging/raging'
  import IndexRaging from '../seller/seller'

  export default {
    name: "index",
    components: {
      IndexHeader,
      IndexRaging,
      IndexSeller,
      IndexGoods
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
      handleGetDataSucc(res) {
        this.seller = res.data.seller
        // console.log(this.seller)
      },
      handleGetDataErr() {
        console.log('error')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .tab
    display flex
    width 100%
    height 40px
    line-height 40px
    border-bottom 1px solid rgba(7,17,27,.1)
    .tab-item
      flex 1
      text-align center
      .link
        display block
        font-size .13rem
        color rgb(77,85,93)
      .router-link-active
        color rgb(240,20,20)
</style>

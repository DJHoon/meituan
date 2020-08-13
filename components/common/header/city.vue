<template>
<div>
  <span class="el-icon-location">{{city}}</span>
  <nuxt-link to="/changeCity" class="change-city">切换城市</nuxt-link>
  <span>
    [门头沟区 大厂回族自治县 蓝驱]
  </span>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "MyCity",
  computed: {
    //第一种写法
    // ...mapState('geo',{
    //   city: state => state.position.city
    // })
    //第三种
    ...mapState({
      city: state=> state.geo.position.city
    })
    //第二种
    // city: function () {
    //   return this.$store.state.geo.position.city
    // }
      //return this.$store.state.geo.position.city
  }
}
</script>

<style lang="less" scoped>
.change-city {
  color:#999;
  border: 1px solid #666;
  &:hover {
     color: var(--Orangecolors);
   }
}
</style>

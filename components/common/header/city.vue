<template>
<div>
  <span class="el-icon-location">北京</span>
  <nuxt-link to="/changeCity" class="change-city">切换城市</nuxt-link>
  <span>
    [门头沟区 大厂回族自治县 蓝驱]
  </span>
</div>
</template>

<script>
export default {
  name: "MyCity"
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

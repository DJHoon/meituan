<template>
  <div>
    <el-container>
      <el-header>
        <div class="header">
          <div class="logoDiv">
            <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团" style="height: 40px;margin: 10px 0px;"  @click="$router.push('/')"/>
          </div>
        </div>
      </el-header>
      <el-main>
        <nuxt/>
      </el-main>
      <el-footer style="width: 100%; padding: 0;border-top:1px solid #666;height: 40px;position:fixed; bottom: 0px; background: white">
        <div style="font-size: 13px; padding-top: 20px;">
          ©meituan.com  京ICP证070791号  京公网安备11010502025545号
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "login"
  }
</script>

<style lang="less" scoped>
.header {
  text-align: left;
  div {
    margin-left: 10vw;
  }
}
.logoDiv {
  cursor: pointer;
}
</style>

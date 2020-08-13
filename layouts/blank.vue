<template>
  <div>
    <el-container>
      <el-header>
        <div class="header">
          <div @click="$router.push('/')" class="logoDiv">
            <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团" style="height: 40px;margin: 10px 0px;"/>
          </div>
          <div>
            <span style="font-size: 14px;color:#666">已有美团账号？</span>
            <el-button type="warning" size="mini" style="color:#222;background-color: #FFBD00 ;" @click="$router.push('/login')">登录</el-button>
          </div>
        </div>
      </el-header>
      <el-main>
        <nuxt/>
      </el-main>
      <el-footer style="width: 100%; padding: 0;border-top:1px solid #666;height: 40px;">
        <div style="font-size: 13px; padding-top: 20px">
          ©meituan.com  京ICP证070791号  京公网安备11010502025545号
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "blank"
  }
</script>

<style lang="less" scoped>
.el-header {
  padding: 0;
  border-bottom: 2px solid var(--normalcolor);
  line-height: 60px;
  margin-bottom: 20px;
  .header {
    /*width: 980px;*/
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
}
.logoDiv {
  cursor: pointer;
}
</style>

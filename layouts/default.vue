<template>
  <el-container class="topBar" style="">
    <el-header>
      <my-header/>
      <div class="searchBar">
        <el-row class="searchRow rowStyle" >
          <el-col :span="3">
            <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团" style="height: 46px;vertical-align: bottom"/>
          </el-col>
          <el-col :span="13" :offset="2" style="text-align: center">
            <search-bar/>
          </el-col>
          <el-col></el-col>
        </el-row>
        <el-row>
          <el-col :span="11" :offset="6">
            <ul style="display: flex; justify-content: space-between;padding-top: 50px">
              <li><nuxt-link to="/waimai" style="color: #222;font-weight: 700;font-size: 16px">美团外卖</nuxt-link></li>
              <li><nuxt-link to="/waimai" style="color: #222;font-weight: 700;font-size: 16px">美团外卖</nuxt-link></li>
              <li><nuxt-link to="/waimai" style="color: #222;font-weight: 700;font-size: 16px">美团外卖</nuxt-link></li>
              <li><nuxt-link to="/waimai" style="color: #222;font-weight: 700;font-size: 16px">美团外卖</nuxt-link></li>
              <li><nuxt-link to="/waimai" style="color: #222;font-weight: 700;font-size: 16px">美团外卖</nuxt-link></li>
              <li><nuxt-link to="/waimai" style="color: #222;font-weight: 700;font-size: 16px">美团外卖</nuxt-link></li>
            </ul>
          </el-col>
        </el-row>
      </div>
    </el-header>
    <el-main>
      <nuxt/>
    </el-main>
    <el-footer>

      333
    </el-footer>
  </el-container>
</template>
<script>
import MyHeader from '~/components/common/header/index.vue'
import SearchBar from '~/components/common/header/search'
export default {
  data() {
    return {

    }
  },
  components: {
      MyHeader,
     SearchBar
  }
}
</script>
<style lang="less" scoped>
.topBar {
  background-color: #f8f8f8;
  margin: 0 !important;
  .el-header {
    height: 100% !important;
    padding: 0 !important;
  }
}


@media screen and (max-width:980px) {
  .topBar {
    width: 960px;
  }
}
.searchBar {
  background-color: #fff;
  padding-bottom: 10px;
  box-shadow: 0px 0px 5px rgba(0,0,0,0.1);
}
.searchRow {
  padding-top: 30px;
}
</style>

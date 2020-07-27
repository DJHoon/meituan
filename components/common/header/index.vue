<template>
    <div class="rowStyle">
      <el-row style="height: 40px; line-height: 40px;">
        <el-col :span="11" style="display: flex">
          <my-city style="margin-right:20px"/>
          <my-user/>
        </el-col>
        <el-col :span="13">
          <nav-bar/>
        </el-col>
      </el-row>

    </div>
</template>

<script>
import MyCity from './city'
import MyUser from './user'
import NavBar from './nav'
export default {
  name: "MyHeader",
  components: {
    MyCity,
    MyUser,
    NavBar,
  }
}
</script>

<style lang="less" scoped>
@import "@/assets/css/public/header/index.css";
</style>

<template>
      <el-row :gutter="20" class="rowStyle">
        <el-col :span="5">
          <my-city />
        </el-col>
        <el-col :span="6">2</el-col>
        <el-col :span="12">3</el-col>
      </el-row>
</template>

<script>
import MyCity from './city'
export default {
  name: "MyHeader",
  components: {
    MyCity
  }
}
</script>

<style scoped>
  @import "~/assets/css/public/header/index.css";
</style>

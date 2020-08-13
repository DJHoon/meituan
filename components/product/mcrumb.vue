<template>
  <el-breadcrumb separator-class="el-icon-arrow-right" style="margin: 30px 0px">
    <el-breadcrumb-item :to="{ path: '/' }">{{$store.state.geo.position.city}}美团</el-breadcrumb-item>
    <el-breadcrumb-item>{{$store.state.geo.position.city+ keyword}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: "mcrumb",
  props: {
    keyword: {
        type: String,
        default() {
          return ''
        }
    }
  }
}
</script>

<style scoped>

</style>

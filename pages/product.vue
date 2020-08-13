<template>
  <div class="rowStyle">
    <el-row>
      <el-col :span="19">
        <mcrumb :keyword="keyword"/>
        <category :types="types" :areas="areas"/>
        <echarts-study/>
      </el-col>
      <el-col :span="5"></el-col>
    </el-row>
  </div>
</template>

<script>
import mcrumb from '~/components/product/mcrumb'
import category from '~/components/product/category'
import EchartsStudy from '~/components/product/EchartsStudy'
  export default {
    name: "product",
    components: {
      mcrumb,
      category,
      EchartsStudy
    },
    data() {
      return {
        keyword: '',
        types: [],
        areas:[]
      }
    },
    async asyncData(ctx) {
      let keyword = ctx.query.keyword
      const {status, data:{pois}}= await ctx.$axios.get('/search/resultsByKeywords',{
        params: {
          city: ctx.store.state.geo.position.city,
          keyword: ctx.query.keyword
        }
      })
      const {status:crumbstatus, data: {areas, types}} = await ctx.$axios.get('http://cp-tools.cn/categroy/crumbs',{
        params: {
          city:  ctx.store.state.geo.position.city
        }
      })
      console.log(areas,types)
      return {
        keyword: status==200?keyword: '',
        areas: crumbstatus==200?areas: '',
        types: crumbstatus==200?types: '',
      }
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>

<template>
  <div class="block">
    <el-carousel :interval="4000" height="240px">
      <el-carousel-item v-for="item in list" :key="item.url" >
        <img :src='item.img' style="height: 240px; width: 100%"/>
<!--          <img src='~/assets/img/home/5.jpg' style="width: 100%"/>-->
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  import utils from '~/assets/utils/utils'
  export default {
    name: "carousel",
    data() {
      return {
        list: [{
          url: '#abc',
          img: 'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg'
        }, {
          url: '#bsbsb',
          img: 'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg'
        }, {
          url: '#sjfkajfj',
          img: 'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg'
        }, {
          url: '#sjfkajfja',
          img: 'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg'
        }, {
          url: '#kjljj',
          img: 'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png'
        }]
      }
    }
  }
</script>

<style scoped>
  .block {

  }
</style>

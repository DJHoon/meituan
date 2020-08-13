<template>
  <div>
    <div
      id="container"
      style="width: 300px; height: 300px;"
    >

    </div>
  </div>
</template>

<script>
  export default {
    name: "category",
    mounted() {
      window.onLoad  = function(){
        var map = new AMap.Map('container', {
          center:[116.397228,39.909604],
          zoom:11
        });
      }
      var url = 'https://webapi.amap.com/maps?v=1.4.15&key=3b922569296abb6d9fd958d1df9df1ef&callback=onLoad';
      var jsapi = document.createElement('script');
      jsapi.charset = 'utf-8';
      jsapi.src = url;
      document.head.appendChild(jsapi);
    }
  }
</script>

<style scoped>

</style>

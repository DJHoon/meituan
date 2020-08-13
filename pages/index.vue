<template>
  <div class="rowStyle">
      <el-row :gutter="20">
        <el-col :lg="4" :md="5" :sm="5">
          <menuBar/>
        </el-col>
        <el-col :lg="20" :sm="19" :xs="19">
          <el-row style="margin-top: 10px">
            <el-col :lg="14" :sm="16" :xs="19">
              <carouselBar/>
            </el-col>
            <el-col :lg="3" class='hidden-md-and-down'style="height: 240px; margin:0px 10px;">
              <a href="#">
                <div class="imgDiv"></div>
              </a>
            </el-col>
<!--            <el-col :span="5"></el-col>-->
          </el-row>
          <el-row style="margin-top: 10px;">
            <el-col :lg="14" :sm="16" :xs='16' class="colImg">
                  <div class="imgDiv1">
                  </div>
                  <div class="imgDiv2">
                  </div>
            </el-col>
            <el-col :lg="3" class='hidden-md-and-down' style="height: 200px; margin:0px 10px;">
              <div class="imgDiv4">
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <recommend/>
  </div>
</template>

<script>
  import menuBar from '~/components/home/menu';
  import carouselBar from "~/components/home/carousel";
  import recommend from "../components/home/recommend";
export default {
    components: {
      menuBar,
      carouselBar,
      recommend
    },
  data() {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
  .imgDiv {
    background-image: url('../assets/img/home/6.jpg');
    background-position: 50%;
    background-size: cover;
    height: 100%;
  }
  .imgDiv1 {
    background-image: url('../assets/img/home/7.jpg');
    height: 100%;
  }
  .imgDiv2 {
    background-image: url('../assets/img/home/8.jpg');
  }
  .imgDiv4 {
    background-image: url('../assets/img/home/9.jpg');
    background-position: 50%;
    height: 100%;
    background-repeat: no-repeat  ;
    background-size: cover;
  }
  .colImg {
    display: flex;
    flex:1;
    height: 200px;
    justify-content: space-between;
    div {
      width: 49%;
      background-position: 50%;
      background-repeat: no-repeat  ;
      background-size: cover;
    }
  }
</style>

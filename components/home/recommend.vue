<template>
  <el-card class="box-card">
    <div slot="header" class=" recommend-header">
      <div class="title">有格调</div>
      <ul class="recommend-menu">
        <li v-for="(item,index) in menuTab" :key="index" @mouseenter="enter(index)">{{item}} <span :class="{'is-hover': currentIndex == index}"></span></li>
      </ul>
      <div class="all-right">全部<i class="arrow"></i></div>
    </div>
    <div class="list-all">
      <section v-for="(item,index) in menuList" :key="index" class="list-card">
        <el-card :body-style="{ padding: '10px' }" style="margin-bottom: 10px">
          <img :src="item.img" class="image">
          <div style="padding: 14px;">
            <span>{{item.title}}</span>
            <div class="bottom clearfix">
              <span>{{item.price}}</span>
              <el-button type="text" class="button">{{item.pos}}</el-button>
            </div>
          </div>
        </el-card>
      </section>
    </div>
  </el-card>
</template>

<script>
  export default {
    name: "recommend",
    data() {
      return {
        menuTab: ['丽人', '娱乐','电影'],
        currentIndex: 0,
        menuList: []
      }
    },
    watch: {

    },
    methods: {
       async enter(index) {
          if(this.currentIndex != index) {
            this.currentIndex = index
            const {status, data} = await this.$axios.get('/search/resultsByKeywords', {
              params: {
                city: this.$store.state.geo.position.city,
                keyword: this.menuTab[this.currentIndex]
              }
            })
            if(status == 200) {
              this.menuList = data.pois
            } else {
              this.menuList = []
            }
          }
      },
      // 立即执行版
       debounce(func, wait) {
          let timer;
          return function() {
            let context = this; // 这边的 this 指向谁?
            let args = arguments; // arguments中存着e
            if (timer) clearTimeout(timer);
            let callNow = !timer;
            timer = setTimeout(() => {
              timer = null;
            }, wait)
            if (callNow) func.apply(context, args);
          }
        }
    }
  }
</script>

<style lang="less"scoped>
.el-card /deep/ .el-card__header {
  padding: 0px;
  height: 50px;
  line-height: 50px;
}
.el-card/deep/ {
  border-radius: 10px 10px 0 0 ;
  overflow: hidden;
}
.recommend-header {
  background: linear-gradient(to right, rgb(250, 60, 104) 2%, rgb(254, 70, 77) 97%) rgb(250, 60, 104);
  height: 100%;
  text-align: left;
  color: white;
  /*border: 1px solid rgb(250, 60, 104);*/
  border-radius: 10px 10px 0px 0px;
  .title {
    /*display: inline-block;*/
    font-size: 20px;
    float: left;
    padding-left: 20px;
    padding-right: 20px;
  }
  .recommend-menu {
    font-size: 14px;
    display: inline-block;
    li {
      float: left;
      padding:0px 10px;
      cursor: pointer;
      position: relative;
    }
  }
  .all-right {
    float: right;
    padding-right:20px;
    position: relative;
    cursor: pointer;
      .arrow {
        width: 7px;
        height: 7px;
        /*color: white;*/
        border-bottom: 1px solid white;
        border-right: 1px solid white;
        transform: rotate(-45deg);
        display: block;
        position: absolute;
        right: 10px;
        top: 0;
        bottom: 0;
        margin: auto;
      }
    }
  }
.is-hover{
  border-bottom: 5px solid white;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  position: absolute;
  bottom: 0px;
  left: 50%;
}
.list-all {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  .list-card {
    @media (max-width:1199px){
      img {
        width: 425px;
        height: 250px;
      }
    }
    @media (min-width: 1200px) {
      img {
        width: 330px;
        height: 208px;
      }
    }
  }
  .list-card:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
}
</style>

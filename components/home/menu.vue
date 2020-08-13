<template>
  <div class="menu">
    <div class="title">全部分类</div>
    <ul @mouseleave="mleave">
      <li v-for="(item,index) in menuList" @mouseenter="enter(index)">
        {{item.name}}
        <i :class="item.type"/><span class="arrow"></span>
      </li>
    </ul>
    <div v-if="isTrue" class="menu-detail" @mouseenter="listEnter" @mouseleave="listLeave">
      <template v-for="item in menuList[kind].child">
        <h4>{{item.title}}</h4>
        <span v-for="i2 in item.child">{{i2}}</span>
      </template>
<!--      <template-->
<!--        v-for="(item,idx) in curdetail.child">-->
<!--        <h4 :key="idx">{{ item.title }}</h4>-->
<!--        <span-->
<!--          v-for="v in item.child"-->
<!--          :key="v">{{ v }}</span>-->
<!--      </template>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: "menu",
    data() {
      return {
        isTrue: false,
        kind: ''
      }
    },
    computed: {
      menuList() {
        return this.$store.state.home.menu
      },
    },
    methods: {
      mleave() {
        this._timer = setTimeout(() => {
          this.isTrue = false
          this.kind = ''
        },200)
      },
      enter(item) {
        this.kind = item
        this.isTrue = true
      },
      listEnter() {
        clearTimeout(this._timer)
      },
      listLeave() {
        this.isTrue = false
        this.kind = ''
      }
    }
  }
</script>

<style lang="less"scoped>
.menu {
  width: 200px;
  height: 460px;
  box-sizing: border-box;
  position: relative;
  background: white;
  border: 1px solid #E5E5E5;
  text-align: left;
  padding-left: 20px;
  div.title {
    color: #222222;
    font-size: 16px;
    font-weight: 700;
    margin-left: 10px;
    padding: 10px 0;
  }
  ul {
    color:#646464;
    margin-left: 10px;
    li {
      position: relative;
      font-size: 13px;
      height: 25px;
      line-height: 25px;
      .arrow {
        width: 4px;
        height: 4px;
        color: #BFBFBF;
        border-bottom: 1px solid #BFBFBF;
        border-right: 1px solid #BFBFBF;
        transform: rotate(-45deg);
        display: block;
        position: absolute;
        right: 13px;
        top: 0;
        bottom: 0;
        margin: auto;
      }
    }
  }
  .menu-detail {
    position: absolute;
    top: 30px;
    left: 200px;
    width: 400px;
    height: 416px;
    background-color: #fff;
    z-index: 999;
    color: #666;
    overflow: hidden;
    h4 {
      height: 40px;
      line-height: 40px;
      font-size: 20px;
      border-bottom: 1px solid #999;
    }
    span {
      display: inline-block;
      margin: 10px 20px;
       color: #999;
      font-size: 12px;
      text-align: center;
      &:hover {
        cursor: pointer;
        color: #FE8C00;
      }
    }
  }
}

</style>

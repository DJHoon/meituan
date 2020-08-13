<template>
  <div style="text-align: left">
    <el-card>
      <dl class="types-all">
        <dt>分类</dt>
        <dt>全部</dt>
        <dd v-for="item in types">{{item.type}}</dd>
      </dl>
      <dl class="areas-all">
        <dt>区域</dt>
        <dt>全部</dt>
        <dd v-for="item in areas">
          <span>{{item.type}}</span>
          <div>
            <a v-for="i2 in item.module"href="javascript:;">{{i2}}</a>
          </div>
        </dd>
      </dl>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "category",
    props: {
      areas: {
        type: Array,
        default() {
          return []
        }
      },
      types: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style lang="less"scoped>
.types-all {
  display: flex;
  dt {
    &:nth-of-type(1) {
      margin-right:50px;
    }
    &:nth-of-type(2) {
      margin: 0 20px;
      cursor: pointer;
    }
  }
  dd {

  }
}
.areas-all {
  display: flex;
  dt {
    &:nth-of-type(1) {
      margin-right:50px;
    }
    &:nth-of-type(2) {
      margin: 0 20px;
      cursor: pointer;
    }
  }
  dd {
    span {
      display: inline-block;

      &:after {
        content: '';
        margin-left: 3px;
        display: inline-block;
        vertical-align: middle;
        border-top: 5px solid black;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
      }
    }

    div {
      display: none;
    }
  }
}
</style>

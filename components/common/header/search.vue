<template>
    <div>
      <div class="search-nav">
        <el-input  type='text' v-model="searchData" placeholder="请输入内容" class='input-box'size="large" @focus="inputFocus" @blur="inputBlur" @input="inputSearch" clearable></el-input>
        <el-button style="background-color:#ffc300;margin-left:-10px; width:13%;"><i class="el-icon-search" style="color: #222222;font-size: 14px;font-weight: bold"></i></el-button>
        <dl class="hot-search" v-show="isHotSearch">
          <dt>热门搜索</dt>
          <dd v-for="item in top">{{item.name}}</dd>
        </dl>
        <dl class="input-search" v-show="isInputSearch">
          <dd v-for="item in top" @click="topSearch(item.name)">{{item.name}}</dd>
        </dl>
      </div>
    </div>
</template>

<script>
//搜索框
export default {
  name: "search",
  data() {
    return {
      isFocus: false,
      searchData: '',
      top: []
    }
  },
  computed: {
    isHotSearch() {
      return this.isFocus && !this.searchData
    },
    isInputSearch() {
      return this.isFocus && this.searchData
    }
  },
  mounted() {
  },
  methods: {
    inputFocus() {
      this.isFocus = true
    },
    inputBlur() {
      setTimeout(() =>{
        this.isFocus = false
      }, 200)
    },
    async inputSearch() {
      const {status,data: {top}} = await this.$axios.get('/search/top', {
        params: {
          input: this.searchData,
          city: this.$store.state.geo.position.city.replace('市', '')
        }
      })
      if(status == 200) {
        this.top = top.slice(0, 5)
      }
    },
    topSearch(keyword) {
      this.$router.push({
        name: 'product',
        query: {
          keyword
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.search-nav {
  position: relative;
  .input-box {
    width: 70%;
  }
  .input-box:hover {
    border-color: #fff;
  }
  dl {
    position: absolute;
    top: 45px;
    left: 9%;
    width: 70%;
    border: 1px solid #e5e5e5;
    border-top:none;
    box-shadow:  0 3px 5px rgba(0,0,0,0.1);
  }
  .hot-search {
    background-color: white;
    position: absolute;
    z-index: 999;
    dt {
      text-align: left;
      height: 20px;
      padding-left: 10px;
      font-weight: bold;
    }
    dd {
      float: left;
      padding-top:10px;
      padding-left: 20px;
      font-size: 12px;
    }
    dd:hover {
      cursor: pointer;
      background-color:#ffc300;
    }
  }
  .input-search {
    background-color: white;
    position: absolute;
    z-index: 999;
    dd {
      height: 20px;
      line-height: 20px;
      text-align: left;
      margin: 5px 0px;
    }
    dd:hover {
      cursor: pointer;
      background-color:#ffc300;
    }
  }
}

</style>

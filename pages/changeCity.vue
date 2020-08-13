<template>
  <div class="rowStyle">
    <el-card style="margin-top: 20px;">
      <section>
        <i-select/>
      </section>
      <section class="hot-city">
        <span>热门城市:</span>
        <template v-for="item in hotCities">
          <a href="javascript:;">{{item.name}}</a>
        </template>
      </section>
      <section>
        <div style="display: flex; justify-content: space-between">
          <span>按拼音首字母选择：</span>
          <a :href='"#"+ item' v-for="item in code" :key="item">{{item}}</a>
        </div>
      </section>
      <section>
        <div :id='item.title' :key='item.title' v-for="item in block">
          <el-row>
            <el-col :span="2">
              <span style="display: inline-block; padding: 10px 20px;">{{item.title}}</span>
            </el-col>
            <el-col :span="22" style="text-align: left">
              <a href="javascript:;" v-for="i2 in item.city" :key="i2" style="display: inline-block; padding: 10px 20px;">{{i2.replace('市','')}}</a>
            </el-col>
          </el-row>
          <div>
          </div>
        </div>
      </section>
    </el-card>
  </div>
</template>

<script>
  import pyjs from 'js-pinyin'
  import ISelect from "../components/city/ISelect";
  import {mapState} from 'vuex'
  export default {
    name: "changeCity",
    data(){
      return {
        code: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
        block: []
      }
    },
    components: {
      ISelect
    },
    methods: {
      async getAllCity() {
        const self = this
        let blocks=[]
        const {status, data:{city}} = await this.$axios.get('http://cp-tools.cn/geo/city')
        let p
        let c
        let d={}
        city.forEach(item => {
          var p = pyjs.getFullChars(item.name).toLocaleLowerCase().slice(0,1)
          var c = p.charCodeAt(0)
          if(c >=97 &&c<=122) {
            if(!d[p]) {
              d[p] = []
            }
            d[p].push(item.name)
          }
        })
        for(let [k,v] of Object.entries(d)){
          blocks.push({
            title:k.toUpperCase(),
            city:v
          })
        }
        blocks.sort((a,b)=>a.title.charCodeAt(0)-b.title.charCodeAt(0))
        self.block=blocks
      }
    },
    mounted() {
      this.getAllCity()
    },
    computed: {
      ...mapState('province', {
        'hotCities':  (state)  =>  {
             return state.hotCities
        }
      })
    },
  }
</script>

<style lang="less" scoped>
  section {
    padding: 30px 0px;
    border-bottom: 1px solid #6666;
    &:nth-of-type(2) {
      padding: 50px 0px;
    }
  }
.hot-city {
  text-align: left;
  a {
    padding: 0px 20px;
  }
}
</style>

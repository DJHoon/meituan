<template>
  <div>
    <span>按省份选择：</span>
    <el-select v-model="province" placeholder="省份"  style="text-align: left;width:150px;" clearable>
      <el-option-group style="float: left;height:30px;line-height: 30px; font-size: 20px;padding-left:20px; ">
        <span>省份</span>
      </el-option-group>
      <div style="clear: both;"></div>
      <el-option
        v-for="item in AllProvince"
        :key="item.id"
        :label="item.name"
        :value="item.id">
      </el-option>
    </el-select>
    <el-select v-model="city" placeholder='城市'  style="text-align: left;width:150px;" clearable :disabled="cityIsDisable">
      <el-option-group style="float: left;height:30px;line-height: 30px; font-size: 20px;padding-left:20px; ">
        <span>城市</span>
      </el-option-group>
      <div style="clear: both;"></div>
      <el-option
        v-for="item in AllCities"
        :key="item.id"
        :label="item.name"
        :value="item.id">
      </el-option>
    </el-select>
    <span>直接搜索：</span>
    <el-select
      v-model="value"
      filterable
      remote
      reserve-keyword
      placeholder="请输入城市中文"
      :remote-method="remoteMethod"
      loading-text="正在加载"
      no-data-text="暂无信息"
      @change="selectCity"
      :loading="loading">
      <el-option
        v-for="item in citiesoptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
import tools from '~/assets/utils/utils'
export default {
  name: "ISelect",
  data() {
    return {
      province: '',
      city: '',
      cityIsDisable: true,
      AllProvince: [],
      AllCities: [],
      value: '',
      citiesoptions: [],
      loading: false,
      cities: []
    }
  },
  mounted() {
    this.getProvince()
  },
  watch: {
    'province': {
      handler(value) {
        if(value) {
          this.$axios.get(`http://cp-tools.cn/geo/province/${value}`).then(({status, data: {city}}) =>{
            console.log(status, city)
            if(status == 200) {
              this.AllCities = city
            }
          })
          this.city = ''
          this.cityIsDisable = false
        } else {
          this.city = ''
          this.cityIsDisable = true
        }
      },
    }
  },
  methods: {
    //获取省份
    async getProvince() {
      const {status, data: {province}} = await this.$axios.get('http://cp-tools.cn/geo/province/')
      if (status == 200) {
        this.AllProvince = province
      }
    },
    //远程搜索
    remoteMethod(query) {
      let self = this
      if(query) {
        tools.debounce(async () => {
          if (self.cities.length > 0) {
            self.citiesoptions = self.cities.filter((item) => {
              return item.value.indexOf(query) > -1
            })
          } else {
            self.loading = true
            const {status, data: {city}} = await self.$axios.get(`http://cp-tools.cn/geo/city`)
            self.loading = false
            if (status == 200) {
              self.cities = city.map((item) => {
                return {
                  province: item.province,
                  value: item.name
                }
              })
              // console.log(status, cities)
              self.citiesoptions = self.cities.filter((item) => {
                return item.value.indexOf(query) > -1
              })
            }
          }
        }, 200)()
      } else {
        this.citiesoptions = []
      }
    },
    //选择
    selectCity(value){
      console.log(this.citiesoptions)
      const [data] = this.citiesoptions.filter(item => item.value == value)
      this.$store.commit('geo/setPosition', {province: data.province, city: data.value})
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
div {
  text-align: left;
}
</style>

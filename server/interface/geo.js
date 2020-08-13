import Router from 'koa-router'
import axios from './utils/axios'
import Province from '../db/module/provinces'
const router = new Router({
  prefix: '/geo'
})
router.get('/getPosition',async(ctx, next) => {
   const {status, data: {province, city}} = await axios.get('http://cp-tools.cn/geo/getPosition')
    if(status ==200) {
      ctx.body = {
        province,
        city
      }
    }else {
      ctx.body = {
        province: '',
        city: ''
      }
    }
})
router.get('/getProvince', async (ctx, next) => {
  const Provinces = await Province.find({})
  ctx.body = {
    provinces: Provinces.map(item => {
      return {
        id: item.id,
        value: item.value
      }
    })
  }
})
export default router

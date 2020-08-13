import Router from 'koa-router'
import axios from './utils/axios'
const router = new Router({
  prefix:'/province'
})
router.get('/hotCity', async(ctx, next) => {
  const {status,  data:{hots}} = await axios.get('http://cp-tools.cn/geo/hotcity/')
  ctx.body = {
    hots: status == 200? hots: []
  }
})

export default router

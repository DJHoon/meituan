import Router from 'koa-router'
import axios from "./utils/axios";


const router = new Router({
  prefix: '/home'
})

router.get('/getMenu', async (ctx, next) => {
  const {status, data: {menu}} = await axios.get('http://cp-tools.cn/geo/menu')

  ctx.body = {
    menu
  }
})



export default router


import axios from './utils/axios'
const Router = require('koa-router')

const router = new Router({
  prefix: '/search'
})


router.get('/top', async(ctx, next) => {
  //console.log(ctx)
  const {status, data: {top}} = await axios.get('http://cp-tools.cn/search/top',{
    params: {
      input: decodeURIComponent(ctx.query.input),
      city: decodeURIComponent(ctx.query.city)
    }
  })
  // global.console.log(status, top)
  ctx.body = {
    status,
    top: status==200?top.slice(0,10): []
  }
})
router.get('/resultsByKeywords', async (ctx) => {
  const {status, data: {count, pois}} = await axios.get('http://cp-tools.cn/search/resultsByKeywords', {
    params: {
      city: ctx.query.city,
      keyword: ctx.query.keyword
    }
  })
  if(status == 200&&count > 0) {
    let r= pois.filter(item=> { return item.photos.length&&item.biz_ext.cost.length&&item.type.length}).map(item=>{
      return {
        title:item.name,
        pos:item.type.split(';')[0],
        price:item.biz_ext.cost||'暂无',
        img:item.photos[0].url,
        url:'//abc.com'
      }
    })
    ctx.body = {
      count: count,
      pois: r.slice(0,9)
    }
  } else {
    ctx.body = {
      count:  0,
      pois: []
    }
  }
})
export default router

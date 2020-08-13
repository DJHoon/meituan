export const actions = {
  async nuxtServerInit({dispatch},{req,app}) {
    //获取区域位置
    const {status, data: {province,city}} = await app.$axios.get('/geo/getPosition')
    //获取菜单
    const {status:homestatus, data: {menu}} = await app.$axios.get('/home/getMenu')
    //获取热门城市
    const {status: hotsstatus, data: {hots}} = await app.$axios.get('/province/hotCity')

    dispatch('geo/setPosition',status===200?{city,province}:{city:'',province:''})
    dispatch('home/getMenu', homestatus===200?menu: [])

    dispatch('province/setHotCities', hotsstatus===200?hots: [])
  }
}

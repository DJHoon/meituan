const state = () => {
  hotCities: []
}
const mutations ={
  setHotCities(state, payload) {
    payload.forEach(item=> {
      if(item.name == '市辖区') item.name = item.province
    })
    state.hotCities = payload
  }
}
const actions = {
  setHotCities({commit}, payload) {
    commit('setHotCities', payload)
  }
}

export  default  {namespaced: true, state, mutations, actions}

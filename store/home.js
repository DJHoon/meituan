const state = () => {
  menu: []
}

const mutations = {
  getMenu(state, payload) {
    state.menu = payload
  }
}
const actions = {
  getMenu({commit}, payload) {
    //console.log(payload)
     commit('getMenu', payload)
  }
}

export default {namespaced: true, state, mutations, actions}

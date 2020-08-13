const state = () => {
  position: {}
}
const mutations = {
  setPosition(state, payload) {
    state.position = payload
  }
}
const actions = {
  setPosition({commit}, position) {
    commit('setPosition', position)
  },
  setHotCity() {
    commit
  }
}



export default {namespaced: true, state, mutations, actions}

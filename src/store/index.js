import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const USER_KEY = 'yanzheng'

export default new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem(USER_KEY) || '{}')

  },
  mutations: {
    xiugai (state, data) {
      state.user = data
      localStorage.setItem(USER_KEY, JSON.stringify(data))
    },
    qingchu (state) {
      state.user = {}
      localStorage.removeItem(USER_KEY)
    }
  },
  actions: {
  },
  modules: {
  }
})

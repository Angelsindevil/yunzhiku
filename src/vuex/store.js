import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations'
import * as getters from './getters'
import * as actions from './actions'
/* eslint-disable*/
Vue.use(Vuex)

const state = {
  isHideMask: true,
  isHideNeed: true,
  isHideError:true,
  isHideLogin:true,
  isHideBtn:true
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

if (module.hot) {
  module.hot.accept(['./mutations'], () => {
    const mutations = require('./mutations').default
    store.hotUpdate({
      mutations
    })
  })
}

export default store
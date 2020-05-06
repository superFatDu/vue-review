import Vue from 'vue'
import Vuex from 'vuex'
import todos from './modules/todo'

// Load Vuex
Vue.use(Vuex)

// Create Store
export default new Vuex.Store({
  modules: {
    todos
  }
})

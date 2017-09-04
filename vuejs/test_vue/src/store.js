// Make sure to call Vue.use(Vuex) first if using a module system
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    pageStack: []
  },
  mutations: {
    // increment (state) {
    //   state.count++
    // }
    change (state, pageStack) {
      state.pageStack = pageStack
    }
  }
})



export default store
import { createStore } from 'vuex'
import articles from '../modules/articles'
import auth from '../modules/auth'
import counter from '../modules/counter'

// Create a new store instance.
const store = createStore({
  state () {
    // return {
    //   count: 0
    // }
  },
  mutations: {
    // increment (state) {
    //   state.count++
    // },
    // decrement (state) {
    //     if(state.count != 0){
    //         state.count --
    //     }
    // }
  },
  actions:{},
  getters:{},
  modules:{
    auth,
    counter,
    articles,
}
})

export default store

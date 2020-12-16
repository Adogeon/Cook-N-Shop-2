import { createStore, createLogger } from 'vuex'

export default createStore({
  state() {
    return {
      name: null,
      description: null,
      ingredients: [],
      instructions: []
    }
  },
  mutations: {
    //changing string for name and description
    setField(state, payload) {
      state[payload.key] = payload.value 
    },
    //adding a new object for ingredients and instruction array
    //for ingredient, payload is object; for instruction, payload is a string
    increaseArray(state, payload) {
      state[payload.key].push(payload.value)
    }
  }
})
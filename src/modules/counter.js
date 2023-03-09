const state = {
    count: 0
}

const mutations = {
    increment (state) {
        state.count++
    },
    decrement (state) {
        if(state.count != 0){
            state.count --
        }
    }
}

export default {
    state,
    mutations
}
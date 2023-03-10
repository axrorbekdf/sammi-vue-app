import AuthService from "../service/auth"
import { setItem } from "../helpers/persistaneStorage"

const state = {
    isLoading: false,
    user: null,
    errors: null,
}

const mutations = {
    registerStart(state){
        state.isLoading = true
        state.user = null
        state.errors = null
    },
    registerSuccess(state, payload){
        state.user = payload
        state.isLoading = false
    },
    registerFailure(state, payload){
        state.errors = payload
        state.isLoading = false
    },
}

const actions = {
    register(context, user){
        return new Promise((resolve, reject) => {
            context.commit('registerStart')

            AuthService.register(user)
            .then(response => {
                context.commit('registerSuccess', response.data.user)
                resolve(response.data.user)
                setItem('token', response.data.user.token)
            })
            .catch(error => {
                context.commit('registerFailure', error.response.data.errors)
                reject(error.response.data.errors)
            })
        })
    }
}

export default {
    state,
    mutations,
    actions
}
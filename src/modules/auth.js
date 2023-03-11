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

    loginStart(state){
        state.isLoading = true
        state.user = null
        state.errors = null
    },
    loginSuccess(state, payload){
        state.user = payload
        state.isLoading = false
    },
    loginFailure(state, payload){
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
    },

    login(context, user){
        return new Promise((resolve, reject) => {
            context.commit('loginStart')

            AuthService.login(user)
            .then(response => {
                context.commit('loginSuccess', response.data.user)
                resolve(response.data.user)
                setItem('token', response.data.user.token)
            })
            .catch(error => {
                context.commit('loginFailure', error.response.data.errors)
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
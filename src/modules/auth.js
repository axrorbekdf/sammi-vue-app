import AuthService from "../service/auth"
import { setItem } from "../helpers/persistaneStorage"
import {gettersTypes} from "./types"

const state = {
    isLoading: false,
    user: null,
    errors: null,
    isLoggedIn: null,
}

const getters = {
    [gettersTypes.currentUser]: state => {
        return state.user
    },
    [gettersTypes.isLoggedIn]: state => {
        return Boolean(state.isLoggedIn)
    },
    [gettersTypes.isAnonymous]: state => {
        return state.isLoggedIn === false
    },
}

const mutations = {
    registerStart(state){
        state.isLoading = true
        state.user = null
        state.errors = null
        state.isLoggedIn = null
    },
    registerSuccess(state, payload){
        state.user = payload
        state.isLoading = false
        state.isLoggedIn = true
    },
    registerFailure(state, payload){
        state.errors = payload
        state.isLoading = false
        state.isLoggedIn = false
    },

    loginStart(state){
        state.isLoading = true
        state.user = null
        state.errors = null
        state.isLoggedIn = null
    },
    loginSuccess(state, payload){
        state.user = payload
        state.isLoading = false
        state.isLoggedIn = true
    },
    loginFailure(state, payload){
        state.errors = payload
        state.isLoading = false
        state.isLoggedIn = false
    },

    currentUserStart(state){
        state.isLoading = true
    },
    currentUserSuccess(state, payload){
        state.isLoading = true
        state.user = payload
        state.isLoggedIn = true
    },
    currentUserFailure(state){
        state.isLoading = false
        state.user = null
        state.isLoggedIn = false
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
    },

    getUser(context){
        return new Promise((resolve, reject) => {
            context.commit('currentUserStart')

            AuthService.getUser()
            .then(response => {
                context.commit('currentUserSuccess', response.data.user)
                resolve(response.data.user)
            })
            .catch(() => context.commit('currentUserFailure'))
        })
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
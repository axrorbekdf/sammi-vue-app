import ArticleService from "../service/articles"

const state = {
    data: null,
    isLoading: false,
    error: null
}
const getters = {}
const mutations = {
    getArticlesStart(state){
        state.data = null
        state.isLoading = true
        state.error = null
    },
    getArticlesSuccess(state, payload){
        state.isLoading = false
        state.data = payload
    },
    getArticlesFailure(state){
        state.isLoading = false
    },
}
const actions = {
    articles(context) {
        return new Promise((resolve, reject) =>{
            context.commit('getArticlesStart')
            ArticleService.articles()
            .then(response => {
                context.commit('getArticlesSuccess', response.data.articles)
                resolve(response.data.articles)
            }).catch(() => {
                context.commit('getArticlesFailure')
            })
        })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
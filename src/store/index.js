import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        message: ''
    },
    getters: {
        getMessage(state) {
            return state.message
        }
    },
    mutations: {
        setMessage(state, message) {
            state.message = message
        }
    }
})
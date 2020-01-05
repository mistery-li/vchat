import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

import user from './modules/user'
import message from './modules/message'
const store = new Store({
    state: {
        showDialog: false,
        userInfoDialog: false,
        isLogin: window.localStorage.getItem('token')
    },
    getters: {
        getShowDialog: state => {
            return state.showDialog
        },
        getShowInfoDialog: state => {
            return state.userInfoDialog
        } 
    },
    actions: {
        openShowDialog: ({ commit }) => {
            commit('openShowDialog', true)
        },
        openUserInfoDialog: ({ commit }) => {
            commit('openUserInfoDialog', true)
        }
    },
    mutations: {
        openShowDialog: (state, isOpen) => {
            state.showDialog = isOpen
        },
        openUserInfoDialog: (state, isOpen) => {
            state.userInfoDialog = isOpen
        }
    },
    modules: {
        user,
        message
    },
})

export default store;
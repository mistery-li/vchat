import { login, logout, register } from '@/api/user'
import { setToken, removeToken } from '@/utils/auth'

const state = {
    token: '',
    username: '',
    avatar: '',
    desc: '',
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },

}

const actions = {
    login({ commit }, userInfo) {
        const {username, password} = userInfo
        return new Promise((resolve, reject) => {
            login({username: username.trim(), password: password}).then(response => {
                const {data} = response
                commit('SET_TOKEN', data.token)
                setToken(data.token)
                // token 保存
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },

    logout({ commit, state}) {
        return new Promise((resolve, reject) => {
            logout(state.token).then(() => {

                commit('SET_TOKEN', '')
                removeToken()
                
                resolve()
            }).catch(error => {
                reject(error)
            })

            
        })
    },

    register({ commit }, userInfo) {
        const {username, password} = userInfo
        return new Promise((resolve, reject) => {
            register({username : username.trim(), password: password}).then(response => {
                const {data} = response
                commit('SET_TOKEN', data.token)
                setToken(data.token)
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
const state = {
    user: {
        _id: '',
        username: '',
        password: '',
        avatar: '',
        createAt: 0,
        updateAt: 0,
        friends: [],
        groups: [],
    },
}

const getters = {
    getUserInfo: (state) => {
        return state.user
    },

}

const actions = {
    updateUser ({ commit}, user) {
        commit('updateUser', user)
    },

    setUser( {commit}, user) {
        commit('SetUser', user);
    }
    
}

const mutations = {
    updateUser(state, {user}) {
        state.user = user;
    },
    SetUser( state, {user}) {
        state.user = user;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
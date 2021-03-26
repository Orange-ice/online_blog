import { login } from '@/api/auth';
import {Commit} from 'vuex';
import {setToken} from '@/utils/auth';

const state = {
  username: '',
  avatar: '',
  token: ''
}

const mutations = {
  setToken: (state: UserSate, token: string) => {
    state.token = token
  },
  setAvatar: (state: UserSate, avatar: string) => {
    state.avatar = avatar
  },
  setUsername: (state: UserSate, username: string) => {
    state.username = username
  },
}

const actions = {
  login({ commit }: { commit: Commit }, userInfo: UserInfo) {
    return new Promise((resolve, reject) => {
      login(userInfo).then(response => {
        const resource = response.data
        commit('setToken', resource.token)
        commit('setAvatar', resource.user.avatar)
        commit('setUsername', resource.user.username)
        setToken(resource.token)
        resolve()
      }).catch((error) => {
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

import { login } from '@/api/auth';
import {Commit} from 'vuex';
import {removeToken, setToken} from '@/utils/auth';

const getDefaultState = () => {
  return {
    username: '',
    avatar: '',
    token: '',
    id: ''
  }
}

const state = getDefaultState()

const mutations = {
  resetState: (state: UserSate) => {
    Object.assign(state, getDefaultState())
  },
  setToken: (state: UserSate, token: string) => {
    state.token = token
  },
  setAvatar: (state: UserSate, avatar: string) => {
    state.avatar = avatar
  },
  setUsername: (state: UserSate, username: string) => {
    state.username = username
  },
  setId: (state: UserSate, id: string) => {
    state.id = id
  }
}

const actions = {
  login({ commit }: { commit: Commit }, userInfo: UserInfo) {
    return new Promise((resolve, reject) => {
      login(userInfo).then(response => {
        const resource = response.data
        console.log(resource);
        commit('setToken', resource.token)
        commit('setAvatar', resource.user.avatar)
        commit('setUsername', resource.user.username)
        commit('setId', resource.user.id.toString())
        setToken(resource.token)
        resolve()
      }).catch((error) => {
        reject(error)
      })
    })
  },
  logout({ commit }: { commit: Commit }) {
    removeToken()
    sessionStorage.removeItem('store')
    commit('resetState')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

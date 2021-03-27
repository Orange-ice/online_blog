import {GetterTree} from 'vuex';

const getters: GetterTree<any, any> = {
  avatar: (state: { user: { avatar: string } }) => state.user.avatar,
  username: (state: { user: { username: string } }) => state.user.username,
  token: (state: { user: { token: string } }) => state.user.token,
  id: (state: { user: { id: string } }) => state.user.id
}

export default getters

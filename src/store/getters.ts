import {GetterTree} from 'vuex';

const getters: GetterTree<any, any> = {
  avatar: (state: { user: { avatar: string } }) => state.user.avatar,
  username: (state: { user: { username: string } }) => state.user.username
}

export default getters

// import request from '@/helpers/request';
//
// const URL = {
//   REGISTER: '/auth/register',
//   LOGIN: '/auth/login',
//   LOGOUT: '/auth/logout',
//   GET_INFO: '/auth'
// };
//
// type userType = {
//   username: string;
//   password: string;
// }
//
// export default {
//   register(user: userType) {
//     return request(URL.REGISTER, 'POST', user);
//   },
//   login(user: userType) {
//     return request(URL.LOGIN, 'POST', user);
//   },
//   logout() {
//     return request(URL.LOGOUT);
//   },
//   getInfo() {
//     return request(URL.GET_INFO);
//   }
// };

import request from '@/utils/request';

type UserInfo = {
  username: string;
  password: string;
}

export function login(data: UserInfo) {
  return request({
    url: '/auth/login',
    method: 'post',
    data
  })
}

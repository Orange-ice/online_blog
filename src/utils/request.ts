import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import {message} from 'ant-design-vue';
import {getToken} from '@/utils/auth';

const service = axios.create({
  baseURL: '/',
  // 跨域请求是否需要凭证
  withCredentials: true,
  timeout: 10000,
})
service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 请求拦截
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    console.log(config);
    if (getToken()) {
      config.headers['Authorization'] = 'Bearer ' + getToken()
    }
    return config
  },
  error => {
    console.log(error);
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  (response: AxiosResponse) => {
    return Promise.resolve(response.data)
  },
  error => {
    console.log(error);
    // if (error.response.status >= 500) {
    //   Message({
    //     showClose: true,
    //     message: '服务器繁忙暂时无法响应服务，请稍候。',
    //     duration: 3000,
    //     type: 'error'
    //   })
    // }
    // if (error.response.status >= 400 && error.response.status < 500) {
    //   if (res.msg !== undefined && res.msg !== null && res.msg !== '') {
    //     Message.closeAll() // 显示message前关闭所有，防止一次显示多个
    //     Message({
    //       showClose: true,
    //       message: res.msg,
    //       duration: 3000,
    //       type: 'warning'
    //     })
    //     return Promise.reject(error)
    //   }
    // }
    return Promise.reject(error)
  }
)

export default service

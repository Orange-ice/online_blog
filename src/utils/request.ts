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
    if (getToken()) {
      config.headers['Authorization'] = 'Bearer ' + getToken()
    }
    return config
  },
  error => {
    console.log('1');
    console.log(error);
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log('2');
    return Promise.resolve(response.data)
  },
  error => {
    const res = error.response.data
    if (error.response.status >= 500) {
      message.error('服务器繁忙暂时无法响应服务，请稍候。')
    }
    if (error.response.status >= 400 && error.response.status < 500) {
      if (res.msg !== undefined && res.msg !== null && res.msg !== '') {
        message.error(res.msg)
      }
    }
    return Promise.reject(error)
  }
)

export default service

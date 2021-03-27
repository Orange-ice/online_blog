import request from '@/utils/request';

export function getAllBlogs(params: blogQuery) {
  return request({
    url: '/blog',
    method: 'get',
    params
  })
}

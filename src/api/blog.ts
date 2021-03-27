import request from '@/utils/request';

export function getAllBlogs(params: blogQuery) {
  return request({
    url: '/blog',
    method: 'get',
    params
  })
}

export function createBlog(data: BlogItem) {
  return request({
    url: '/blog/create',
    method: 'post',
    data
  })
}

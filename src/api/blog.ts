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

export function checkBlogDetail(blogId: string) {
  return request({
    url: `/blog/${blogId}`,
    method: 'get'
  })
}

export function updateBlog(id: string, data: BlogItem) {
  return request({
    url:`/blog/edit/${id}`,
    method: 'patch',
    data
  })
}

export function deleteBlog(blogId: string) {
  return request({
    url: `/blog/delete/${blogId}`,
    method: 'delete'
  })
}

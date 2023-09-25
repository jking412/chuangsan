import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function SgetInfo() {
  return request({
    url: '/student',
    method: 'get'
  })
}

export function TgetInfo() {
  return request({
    url: '/teacher',
    method: 'get'
  })
}

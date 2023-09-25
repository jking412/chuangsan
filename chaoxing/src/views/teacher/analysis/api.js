import request from '@/utils/request'

//到课情况
export function registrationApi(data) {
  return request({
    url: '/user/login',
    method: 'get',
    data
  })
}

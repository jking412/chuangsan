import request from '@/utils/request'

//到课情况
export function registrationApi(data) {
  return request({
    url: '/user/login',
    method: 'get',
    data
  })
}

//老师信息
// export function teacherIfoApi() {
//   return request({
//     url: '/teacher',
//     method: 'get',

//   })
// }

//到课情况
export function arrApi(data) {
  return request({
    url: '/teacher/arr',
    method: 'get',
    params: { clazzid: data }
  })
}

//课堂活动参与情况
export function actApi(data) {
  return request({
    url: '/teacher/act',
    method: 'get',
    params: { clazzid: data }
  })
}

//成绩分析
export function examApi(data) {
  return request({
    url: '/teacher/exam',
    method: 'get',
    params: { clazzid: data }
  })
}
//任务点
export function jobApi(data) {
  return request({
    url: '/teacher/job',
    method: 'get',
    params: { clazzid: data }
  })
}

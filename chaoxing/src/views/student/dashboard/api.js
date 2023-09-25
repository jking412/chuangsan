import request from '@/utils/request'

//到课情况
export function arrApi(data) {
  return request({
    url: '/clazz/arr',
    method: 'get',
    params: {
      clazzid: data
    }
  })
}

//课堂活动参与情况
export function actRateApi(data) {
  return request({
    url: '/clazz/actRate',
    method: 'get',
    params: {
      clazzid: data
    }
  })
}

//任务点完成情况
export function jobApi(data) {
  return request({
    url: '/clazz/job',
    method: 'get',
    params: {
      courseid: data
    }
  })
}

//学生个人成绩及班级平均值
export function examApi(data) {
  return request({
    url: '/clazz/exam',
    method: 'get',
    params: {
      clazzid: data
    }
  })
}

//作业完成情况
export function workApi(data) {
  return request({
    url: '/clazz/work',
    method: 'get',
    params: {
      clazzid: data
    }
  })
}

//讨论流水
export function bbsApi() {
  return request({
    url: '/student/bbs',
    method: 'get',
  })
}

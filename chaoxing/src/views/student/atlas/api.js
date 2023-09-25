import request from '@/utils/request'

//根据作业获取任务点
export function graphWorkApi(data) {
  return request({
    url: '/clazz/job/1',
    method: 'get',
    params: {
      paperLibId: data
    }
  })
}

//根据考试获取任务点
export function graphExamApi(data) {
  return request({
    url: '/clazz/job/0',
    method: 'get',
    params: {
      paperLibId: data
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

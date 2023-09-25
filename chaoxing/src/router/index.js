import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'
export const constantRoutes = [
  {
    path: '/',
    component: () => import('@/views/home/index'),
    hidden: true,
  },
  {
    path: '/diagram',
    component: () => import('@/views/diagram/index'),
    hidden: true,
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true,
  },


  // 404 page must be placed at the end !!!
  // { path: '*', redirect: '/404', hidden: true }
]

// export const asyncRoutes = [{
//   path: '/',
//   component: Layout,
//   redirect: '/dashboard',
//   children: [{
//     path: 'dashboard',
//     name: 'Dashboard',
//     component: () => import('@/views/student/dashboard/index'),
//     meta: { title: '课程分析', icon: 'dashboard' }
//   }],
//   meta: { requireAuth: true, roles: ['student'] }
// },

// {
//   path: '/predicted',
//   component: Layout,
//   children: [{
//     path: 'index',
//     name: '学情预测',
//     component: () => import('@/views/student/predicted/index'),
//     meta: { title: '学情预测', icon: 'example' }
//   }],
//   meta: { requireAuth: true, roles: ['student'] }
//   },
//   {
//     path: '/atlas',
//     component: Layout,
//     redirect: '/atlas/table',
//     name: '知识图谱',
//     meta: { title: '知识图谱', icon: 'graph', requireAuth: true, roles: ['student'] },
//     children: [
//       {
//         path: 'table',
//         name: 'Table',
//         component: () => import('@/views/student/atlas/index1'),
//         meta: { title: '学习行为', icon: 'table' }
//       },
//       {
//         path: 'tree',
//         name: 'Tree',
//         component: () => import('@/views/student/atlas/index2'),
//         meta: { title: '课程知识', icon: 'tree' }
//       }
//     ]
//   },
// ]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

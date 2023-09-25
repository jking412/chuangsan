import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'
import { asyncRoutes } from '@/router'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist

// router.beforeEach(async (to, from, next) => {
//   // start progress bar
//   NProgress.start()

//   // set page title
//   document.title = getPageTitle(to.meta.title)

//   // determine whether the user has logged in
//   const hasToken = getToken()
//   if (hasToken) {
//     let role = store.getters.role
//     // if (!store.getters.Info) {
//     //   await store.dispatch('user/getInfo', role)
//     // }
//     if (to.path === '/login') {
//       // if is logged in, redirect to the home page
//       next({ path: '/' })
//       NProgress.done()
//     } else {
//       if (store.getters.routes.length === 0) { // 判断当前用户是否已拉取过路由表信息
//         // 拉取路由表
//         store.dispatch('permission/generateRoutes', { asyncRoutes, role }).then(addRouters => { // 生成可访问的路由表，asyncRoutes总路由表，addRouters 过滤后需要动态挂载的路由表
//           router.addRoutes(addRouters)
//           next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
//         }).catch(err => {
//           console.log(err);
//         });
//       } else {
//         next() //当有用户权限的时候，说明所有可访问路由已生成 如访问没权限的全面会自动进入404页面
//       }
//     }
//   } else {
//     /* has no token*/

//     if (whiteList.indexOf(to.path) !== -1) {
//       // in the free login whitelist, go directly
//       next()
//     } else {
//       // other pages that do not have permission to access are redirected to the login page.
//       next(`/login?redirect=${to.path}`)
//       NProgress.done()
//     }
//   }
// })

// router.afterEach(() => {
//   // finish progress bar
//   NProgress.done()
// })

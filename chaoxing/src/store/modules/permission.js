// store/modules/modules/permission.js
import { constantRoutes } from '@/router' //初始路由表，里面包含登录和404页面路由

// 比对过滤路由表，生成最终可访问的路由表
export function filterAsyncRoutes(routes, role) {
  return routes.filter(item => {
    return item.meta.roles.includes(role)
  })
}

const getDefaultState = () => {
  return {
    routes: [],
    addRoutes: []
  }
}
const state = getDefaultState();

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = [
      ...constantRoutes,
      ...routes,
    ]
  },
  RESET_STATE: state => {
    Object.assign(state, getDefaultState())
  }
}

const actions = {
  // 生成可访问路由表
  generateRoutes({ commit }, { asyncRoutes, role }) {
    return new Promise(resolve => {
      let accessedRoutes = [
        ...filterAsyncRoutes(asyncRoutes, role),
        { path: '*', redirect: '/404', hidden: true }
      ]
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  },
  // 重置路由，用于退出登录操作
  resetState({ commit }) {
    return new Promise(resolve => {
      commit('RESET_STATE');
      resolve();
    });
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

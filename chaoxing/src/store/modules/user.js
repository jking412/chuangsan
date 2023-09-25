import { login, logout, SgetInfo, TgetInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'
import { Message } from 'element-ui'

const getDefaultState = () => {
  return {
    token: getToken(),
    Info: '',
    role: JSON.parse(localStorage.getItem('role')) || ''
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INFO: (state, Info) => {
    state.Info = Info
  },
  SET_ROLE: (state, role) => {
    state.role = role
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {

    const { uid, password, role } = userInfo;
    let ROLE = '';
    role === '学生' ? ROLE = 'student' : ROLE = 'teacher';
    return new Promise((resolve, reject) => {
      // login({ uid: uid.trim(), password: password }).then(response => {
      //   if (response.data.token) {
      //     commit('SET_TOKEN', response.data.token)
      //     localStorage.setItem("role", JSON.stringify(ROLE))
      //     commit('SET_ROLE', ROLE)
      //     setToken(response.data.token)
      //     resolve()
      //   } else {
      //     Message({
      //       message: '账号或密码错误',
      //       type: 'error',
      //       duration: 5 * 1000
      //     })
      //     reject()
      //   }
      // }).catch(error => {
      //   reject(error)
      // })
      commit('SET_TOKEN', 123)
      localStorage.setItem("role", JSON.stringify(ROLE))
      commit('SET_ROLE', ROLE)
      setToken(123)
      resolve()
    })
  },

  //user getInfo
  getInfo({ commit }, state) {
    return new Promise((resolve, reject) => {
      if (state === 'student') {
        SgetInfo().then(response => {
          if (!response.data) {
            return reject('Verification failed, please Login again.')
          }
          commit('SET_INFO', response.data)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      } else {
        TgetInfo().then(response => {
          if (!response.data) {
            Message({
              message: '账号或密码错误',
              type: 'error',
              duration: 5 * 1000
            })
            return reject('Verification failed, please Login again.')
          }
          commit('SET_INFO', response.data)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      }
    })
  },

  // user logout
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      // logout(state.token).then(async () => {
      //   removeToken() // must remove  token  first
      //   resetRouter()
      //   commit('RESET_STATE')
      //   await dispatch('permission/resetState', {}, { root: true })
      //   resolve()
      // }).catch(error => {
      //   reject(error)
      // })
      removeToken() // must remove  token  first
      resetRouter()
      commit('RESET_STATE')
      resolve()
      dispatch('permission/resetState', {}, { root: true })

    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}


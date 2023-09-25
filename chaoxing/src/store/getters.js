const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  role: state => state.user.role,
  Info: state => state.user.Info,
  routes: state => state.permission.routes
}
export default getters


import Index from './../page/index'
import Err from './../page/err'
import Login from './../page/login'

const routes = [
    { path: '/index',
      component: Index,
      routes: [
        { path: '/index/login',
          component: Login
        }
      ]
    }
  ]

  export {routes as default}
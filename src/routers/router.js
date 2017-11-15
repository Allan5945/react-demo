
import Index from './../page/index'
import Err from './../page/err'
import Login from './../page/login'

const routes = [
    { path: '/',
      component: Index,
      routes: [
        { path: '/login',
          component: Login
        }
      ]
    }
  ]

  export {routes as default}
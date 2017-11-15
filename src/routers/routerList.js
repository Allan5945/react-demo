import Index from './../page/index'
import Login from './../page/login'
import Err from './../page/err'


const routes = [
    {
        path: '/',
        exact: true,
        component: Login
    },
    {
        path: '/index',
        component: Index
    },
    // { path: '/tacos',
    //     component: Tacos,
    //     routes: [
    //         { path: '/tacos/bus',
    //             component: Bus
    //         },
    //         { path: '/tacos/cart',
    //             component: Cart
    //         }
    //     ]
    // }
]

export default routes
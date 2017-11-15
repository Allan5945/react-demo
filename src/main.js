import React from 'react'
import ReactDOM from 'react-dom'
// import {routes as routerConfig} from './routers/router'

import Index from './page/index'
import Err from './page/err'
import Login from './page/login'
import {
    BrowserRouter as Router,
    PrivateRoute,
    Link,
    Route,
    Redirect,
    Switch,
    withRouter
} from 'react-router-dom'

import RouteConfigExample from './routers/test'

// window.location.href='/index';
class MainBox extends React.Component{
    render(){
        return<Router>
            <div>
                <Switch>
                    {/*<Redirect exact from='/' to='/index'/>*/}
                    <Route path='/' component={Index}></Route>
                    <Route path='/index' component={Login}></Route>
                    <Route component={Err}></Route>
                </Switch>
            </div>
        </Router>
    }
}

ReactDOM.render(
    <RouteConfigExample />,
    document.getElementById('app')
)
import React from 'react'
import ReactDOM from 'react-dom'
import {routes as routerConfig} from './routers/router'

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




class MainBox extends React.Component{
    render(){
        return<Router>
            <div>
                <Switch>
                    {/* <Redirect from='/' to='index'/> */}
                    <Route exact  path='/index' component={Index}></Route>
                    <Route component={Err}></Route>
                </Switch>
            </div>
        </Router>
    }
}

ReactDOM.render(
    <MainBox/>,
    document.getElementById('app')
)
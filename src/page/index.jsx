
import React from 'react'
import './../style/index.scss'
import {Head} from './../compoent/head'
import {Body} from './../compoent/body'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Redirect,
    Switch,
    withRouter
} from 'react-router-dom'

class Index extends React.Component{
    render(){
        return<div>
            <div>
                <Router>
                    <div>
                        <Route path='/login' component={Head}></Route>
                    </div>
                </Router>
                <Body/>
            </div>
        </div>
    }
}
export {Index as default}


import React from 'react'
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
                index
            </div>
        </div>
    }
}
export {Index as default}

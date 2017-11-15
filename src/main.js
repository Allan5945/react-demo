import React from 'react'
import ReactDOM from 'react-dom'
import MainBox from './routers/router'

import './public/css.css'

import {
    BrowserRouter as Router,
    PrivateRoute,
    Link,
    Route,
    Redirect,
    Switch,
    withRouter
} from 'react-router-dom'


ReactDOM.render(
    <MainBox/>,
    document.getElementById('app')
)
import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import MainBox from './routers/router'
import './public/all.scss'
import './public/index.scss'


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
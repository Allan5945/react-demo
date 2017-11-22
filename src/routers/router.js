import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import routerList from './routerList'
import Err from './../page/err'
const RouteWithSubRoutes = (route) => (
    <Route path={route.path}  exact={route.exact} component={route.component} />
);


const RouteConfigExample = () => (
    <Router>
        <div id='box'>
            {routerList.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route}/>
            ))}
        </div>
    </Router>
);
export default RouteConfigExample
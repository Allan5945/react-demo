
import React from 'react'
import axios from 'axios'

import {
    BrowserRouter as Router,
    Link,
    Route,
    Redirect,
    Switch,
    withRouter
} from 'react-router-dom'

class Index extends React.Component{


    componentDidMount() {
        axios({
            method: 'post',
            url: 'obtain/record',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            params: {
            }
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                    console.log(error);
                }
            );
    }
    render(){
        return<div>
            <div></div>
        </div>
    }
}
export {Index as default}

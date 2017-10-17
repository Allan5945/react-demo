
import React from 'react'
import './../style/index.scss'
import {Head} from './../compoent/head'
import {Body} from './../compoent/body'

class Index extends React.Component{
    render(){
        return<div>
            <div>
                <Head/>
                <Body/>
            </div>
        </div>
    }
}
export {Index as default}

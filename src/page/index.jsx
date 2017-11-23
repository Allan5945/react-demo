
import React from 'react'
import axios from 'axios'

import {
    HashRouter  as Router,
    Link,
    Route,
    Redirect,
    Switch,
    withRouter
} from 'react-router-dom'


function NumberList(props) {
    const numbers = props.numbers;
    const todoItems = numbers.map((todo, index) =>
        <div key={index}>
            <span>{todo.id}</span>
            <span>{todo.sdata}</span>
            <span>{todo.edata}</span>
            <span>{todo.zk}</span>
            <span>{todo.bz}</span>
        </div>
        
    );
    return <div>{todoItems}</div>
   
  }


class Index extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            dklist:[]
        };
    }
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
                this.setState({
                    dklist: response.data.mes
                  });
            })
            .catch((error) => {
                    console.log(error);
                }
            );
    }
    render(){
        return  <div>
            <NumberList numbers={this.state.dklist} />
    
        </div>
    }
}
export {Index as default}

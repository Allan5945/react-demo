import React from 'react'
import axios from 'axios'


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            counter: false,
            userName: "",
            pwd: ""
        };
    }
    handleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    handleClick() {
        let userName,pwd;
        if(this.state.userName != '' && this.state.pwd != ''){
            axios({
                method: 'post',
                url: 'obtain/login',
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded'
                },
                params: {
                    userName:this.state.userName,
                    pwd:this.state.pwd
                }
            })
                .then((response) => {
                    if(response.data.mes){
                        window.location.href = '/index';
                    }else{
                        alert('密码不正确')
                    }
                })
                .catch((error) => {
                    console.log(error);
                }
            );
        }else{
            alert('请先输入账号密码！')
        }
       
    }

    componentDidMount() {
        setTimeout(() => {
                this.setState({
                    counter: true
                })
            }
            , 0);


    }

    render() {
        return <div className='login-box'>
            <div className={'login-f ' + (this.state.counter ? 'login-f-f' : '')}>
                {/*<div className='login-tip'>请先登录喔</div>*/}
            </div>
            <div className={'login-c ' + (this.state.counter ? 'login-show' : '')}>
                <div className='login-from'>
                    <div className={'login-i'}><span>&#xe600;</span><input type="text" name='userName' value={this.state.userName} onChange={this.handleChange} placeholder='请输入账号'/></div>
                    <div className={'login-i'}><span>&#xe6d1;</span><input type="text" name='pwd' value={this.state.pwd} onChange={this.handleChange} placeholder='请输入密码'/></div>
                    <div className={'login-setting'}>
                        <div>新用户</div>
                        <div>忘记密码？</div>
                    </div>
                    <div className={'login-sub'} onClick={this.handleClick}>登录</div>
                    <div className={'login-link'}>
                        <div>&#xe63f;</div>
                        <div>&#xe608;</div>
                        <div>&#xe701;</div>
                    </div>
                </div>
            </div>
        </div>
    }
}


export {Login as default}
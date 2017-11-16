import React from 'react'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            counter: false,
            user:{
                name:"",
                pwd:""
            }
        };
    }
    handleClick() {
       $.ajax({
           url:'/login',
           type:"post",
           success:function (data) {
               console.log(data)
           }
       })
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
            <div className={'login-f ' + (this.state.counter ? 'login-f-f' : '')}><div className='login-tip'>请先登录喔</div></div>
            <div className={'login-c ' + (this.state.counter?'login-show':'')} >
                <div className='login-from'>
                    <div className={'login-i'}><span>&#xe600;</span><input type="text" placeholder='请输入账号'/></div>
                    <div className={'login-i'}><span>&#xe6d1;</span><input type="text" placeholder='请输入密码'/></div>
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
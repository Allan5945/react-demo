import React from 'react'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: false
        };
    }

    componentDidMount() {
        setTimeout(() => {
                this.setState({
                    counter: true
                },function (v) {
                    console.log(v)
                })
            }
            , 1500);


    }

    render() {
        return <div className='login-box'>
            <div className={'login-f ' + (this.state.counter ? 'login-f-f' : '')}></div>
            <div className='login-c login-c' >
                <div className='login-tip'>请先登录</div>
                <div className='login-img'>2</div>
                <div className='login-from'>
                    <div>账号：<input type="text"/></div>
                    <div>密码：<input type="text"/></div>
                    <div>登录</div>
                </div>
            </div>
        </div>
    }
}


export {Login as default}
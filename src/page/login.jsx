import React from 'react'

class Login extends React.Component{
    render(){
        return <div className='login-box'>
           <div className='login-tip'>请先登录</div>
           <div className='login-img'>2</div>
           <div className='login-from'>
               <div>账号：<input type="text"/></div>
               <div>密码：<input type="text"/></div>
               <div>登录</div>
           </div>
        </div>
    }
}


export {Login as default}
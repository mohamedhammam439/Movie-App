import React from 'react';
import joi from 'joi-browser';
import Form from './Form';

class Login extends Form {

    state ={
        data:{
            username:"" ,
            password:""
        },
        errors :{}
    }

    schema={
        username:joi.string().required().label("Username").email() ,
        password:joi.string().required().label("Password").min(5)
    }

    doSubmit=()=>{
        console.log('submitetd')   
    }

    render() { 
        return ( 
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handelSubmit}>
                    {this.renderInput("username" , "Username" )}
                    {this.renderInput("password" , "Password" , "Password")}
                    {this.renderButton("Login")}
                </form>
            </div>
         );
    }
}
 
export default Login;
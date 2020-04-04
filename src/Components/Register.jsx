import React from 'react';
import joi from 'joi-browser';
import Form from './Form';

class Register extends Form {

    state = { 
        data:{
            username:"" , password:"" , name:""
        },
        errors:{}
     }

    schema={
        username: joi.string().required().label("Username").email() ,
        password: joi.string().required().label("Password").min(5),
        name : joi.string().required().label("Name")
    }

    doSubmit=()=>{
        console.log("Registered")
    }
    
    render() { 
        return ( 
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handelSubmit}>
                    {this.renderInput("username" , "Username")}
                    {this.renderInput("password" , "Password" , "password")}
                    {this.renderInput("name" , "Name")}
                    {this.renderButton("Register")}
                </form>
            </div>
         );
    }
}
 
export default Register;
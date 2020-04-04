import React, { Component } from 'react';
import Input from './Input';
import Select from './Select';
import joi from 'joi-browser';

class Form extends Component {
    state = { 
        data:{},
        errors:{}
     }

     validate=()=>{
        const option = {abortEarly : false};
        const {error} = joi.validate(this.state.data , this.schema , option);
        if (!error) return null;

        const errors={};
        for (let item of error.details)
        errors[item.path[0]] = item.message;
       return errors;
    }
    
    handelSubmit=e=>{
        e.preventDefault();

        const errors=this.validate();
        this.setState({errors : errors || {}})
        if(errors) return;

        this.doSubmit();
    }
    
    validateProperty=({name , value})=>{
        const obj={[name] : value}
        const schema={[name]: this.schema[name]}
        const {error} = joi.validate(obj , schema)
        return error ? error.details[0].message : null ;
    }

    handelChange= ({target : input}) =>{

        const errors=this.state.errors;
        const errorMessage=this.validateProperty(input);
        if(errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name]

       const {data}=this.state;
       data[input.name]=input.value;
       this.setState({data , errors})
    }

    renderInput(name , label , type="text"){
        const {errors , data} = this.state;
        return  <Input 
                type={type}
                name={name}
                value={data[name]}
                label={label}
                onChange={this.handelChange}
                className="form-control"
                errors={errors[name]}
                />
    }

    renderSelect(name ,label , options){
        const {data , errors} = this.state;
        return  <Select 
                name={name}
                value={data[name]}
                label={label}
                onChange={this.handelChange}
                options={options}
                errors={errors[name]}
                />
    }

    renderButton(label){
        return  <button disabled={this.validate()}  className='btn btn-primary'>{label}</button>
    }
}
 
export default Form;
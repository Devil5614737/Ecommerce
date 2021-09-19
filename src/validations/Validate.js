import React from 'react'

function Validate(values) {
    const errors={}

    if(!values.email.trim()){
        errors.email='Email is required'
    }
    else if(values.email.length<1){
        errors.email="Email is required"
    }
    else if(!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i.test(values.email)){
        errors.email='Please enter a valid email address'
    }
    else if(!values.password.trim()){
        errors.password='Password is required'
    }
    else if(values.password.length<1){
        errors.password="Password is required"
    }

    return errors
}

export default Validate;

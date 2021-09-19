
function Validate(values) {
    const errors={}

    if(!values.email.trim()){
       return  errors.email='Email is required'
    }
    else if(values.email.length<1){
        return errors.email="Email is required"
    }
    else if(!values.name.trim()){
        return errors.name="Name is required"
    }
    else if(!values.dob.trim()){
        return errors.dob="D.O.B is required"
    }
    else if(!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i.test(values.email)){
        return errors.email='Please enter a valid email address'
    }
    else if(!values.password.trim()){
        return errors.password='Password is required'
    }
    else if(values.password.length<1){
        return errors.password="Password is required"
    }

    return errors
}

export default Validate;

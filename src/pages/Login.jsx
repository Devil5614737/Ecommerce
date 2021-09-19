import React from 'react'
import Navbar from '../components/Navbar'
import {Links,LinksContainer,Container,LoginContainer,Heading,Label,Input,Button,Img} from '../styles/Login'
import Illustration from '../icons/illlustration.svg'
import {Link} from 'react-router-dom'
import useLogin from '../Helpers/useLogin'
import {CircularProgress } from '@material-ui/core'
import Validate from '../validations/Validate'

function Login() {
const {handleChange,handleSubmit,values,errors,loading}=useLogin(Validate)


    return (
        <>
        <Navbar/>
            <Container>
                <LoginContainer>
                <Heading>Login</Heading>
                    <Label>Email</Label>
                    <Input type='email' onChange={handleChange} name='email' value={values.email}/>
                    {errors.email && <p style={{color:'red',fontSize:'1.4rem',transform:'translateY(-12px)'}}>{errors.email}</p>}
                    <Label>Password</Label>
                    <Input type='password' onChange={handleChange} name='password' value={values.password}/>
                    {errors.password ? <p style={{color:'red',fontSize:'1.4rem',transform:'translateY(-12px)'}}>{errors.password}</p>: null}
                    <Button onClick={handleSubmit}>Login {loading ?<CircularProgress style={{height:'20px',width:'20px',color:'white'}}/> : null}</Button>
                <LinksContainer>Dont' have an account ?<Link style={{color:'white'}} to='/signup'> <Links>Signup</Links></Link></LinksContainer>
                </LoginContainer>
                <Img src={Illustration}/> 
            </Container>
        </>
    )
}

export default Login

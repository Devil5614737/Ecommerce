import { values } from 'lodash'
import React from 'react'
import Navbar from '../components/Navbar'
import {Container,Title,Top,Left,Bottom,Label,Input,Button,Right} from '../styles/Signup'
import useSignup from '../Helpers/useSignup'
import signUpValidation from '../validations/signUpValidation'
import {CircularProgress } from '@material-ui/core'

function Signup() {
const{values,handleChange,handleSubmit,errors,loading}=useSignup(signUpValidation)
    return (
        <>
        <Navbar/>
            <Container>
            <Title>Signup</Title>
            <Top>
                <Left>
                    <Label>Name</Label>
                    <Input type='text' onChange={handleChange}  value={values.name} name='name'/>
                    {errors.name && <p style={{color:'red',fontSize:'1.4rem',transform:'translateY(-22px)'}}>{errors.name}</p>}
                </Left>
                <Right>
                    <Label>D.o.b</Label>
                    <Input type='date' onChange={handleChange}  value={values.dob} name='dob'/>
                    {errors.dob && <p style={{color:'red',fontSize:'1.4rem',transform:'translateY(-22px)'}}>{errors.dob}</p>}
                </Right>
            </Top>
            <Bottom>
                <Left>
                    <Label>Email</Label>
                    <Input type='email' onChange={handleChange}  value={values.email} name='email'/>
                    {errors.email && <p style={{color:'red',fontSize:'1.4rem',transform:'translateY(-22px)'}}>{errors.email}</p>}
                </Left>
                <Right>
                    <Label>password</Label>
                    <Input type='password'  onChange={handleChange}  value={values.password} name='password'/>
                    {errors.password && <p style={{color:'red',fontSize:'1.4rem',transform:'translateY(-22px)'}}>{errors.password}</p>}
                </Right>
            </Bottom>
            <Button onClick={handleSubmit}>Signup {loading ?<CircularProgress style={{height:'20px',width:'20px',color:'black'}}/> : null}</Button>

            </Container>


        </>
    )
}

export default Signup

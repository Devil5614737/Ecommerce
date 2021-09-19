import {useEffect, useState} from 'react'
import Validate from '../validations/Validate'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {useHistory} from 'react-router-dom'
import { get } from 'lodash'

toast.configure()

function useLogin() {
    const history=useHistory()
   
    const[values,setValues]=useState({
        email:'',
        password:''
    })
    const[loading,setLoading]=useState(false)
    const [errors,setErrors]=useState({})
    const[userDetails,setUserDetails]=useState('')

    const handleChange=(e)=>{
        setValues({...values,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        setLoading(true)
        setErrors(Validate(values))
        loginUser()
       
    }
    const notify=()=>{
        toast.success(`Welcome ${userDetails}`,{theme:'colored',position:toast.POSITION.TOP_LEFT,style:{fontSize:'1.7rem'}})
      }
    const error=()=>{
        toast.error('Invalid credentials',{theme:'colored',position:toast.POSITION.TOP_LEFT,style:{fontSize:'1.7rem'}})
      }

    

    async function loginUser(){
        const {email,password}=values
        const res=await fetch('https://ecommerceappbackend.herokuapp.com/login',{
            method:'POST',
            body:JSON.stringify({
                email,password
            }),
            headers:({
                'Content-Type':'application/json'
            })
        })
        const data=await res.json()
        if(res.status===400){
            error()
            setLoading(false)
        }else{
           notify()
            history.push('/cart')
            localStorage.setItem('token',data.token)
        }
        
    }

    async function getData(){
     const res=await fetch('https://ecommerceappbackend.herokuapp.com/users',{
         method:'GET',
         headers:({
             "x-auth-token":localStorage.getItem('token')
         })
     })
     const data=await res.json()
     setUserDetails(data.name)
    }

useEffect(()=>{
    getData()
},[])

    return {handleChange,handleSubmit,values,errors,loading}
}

export default useLogin;

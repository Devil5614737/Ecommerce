import {useState} from 'react'
import Validate from '../validations/Validate'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {useHistory} from 'react-router-dom'

function useSignup() {
    const history=useHistory()
    const[values,setValues]=useState({
        name:'',
        dob:'',
        email:'',
        password:''
    })
    const[loading,setLoading]=useState(false)
    
    const [errors,setErrors]=useState({})

    const handleChange=(e)=>{
        setValues({...values,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        setLoading(true)
        setErrors(Validate(values))
        signupUser()
    }

    const notify=()=>{
        toast.success('User created',{theme:'colored',position:toast.POSITION.TOP_LEFT,style:{fontSize:'1.7rem'}})
      }
    const error=()=>{
        toast.error('User existed',{theme:'colored',position:toast.POSITION.TOP_LEFT,style:{fontSize:'1.7rem'}})
      }
    async function signupUser(){
        const {name,dob,email,password}=values
       fetch('https://ecommerceappbackend.herokuapp.com/signup',{
           method:'POST',
           body:JSON.stringify({
               name,dob,email,password
           }),
           headers:({
               'Content-Type':'application/json'
           })
       }).then(res=>{
           setLoading(false)
           if(res.status===400){
               error()
           }else{
            notify()
            history.push('/login')
        }
       })
    }
    return {handleChange,handleSubmit,values,errors,loading}
}

export default useSignup;

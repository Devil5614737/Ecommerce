import React,{useState} from 'react'
import {GlobalStyle} from './styles/GlobalStyle'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import DisplayProduct from './pages/DisplayProduct'
import Login from './pages/Login'
import Signup from './pages/Signup'
import {Switch,Route,Redirect} from 'react-router-dom'
import {Context} from './Context/Context'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()


function App() {
const[productDetail,setProductDetail]=useState()
const[cartItem,setCartItem]=useState([])


const handleCartItem=(product)=>{
  if(cartItem.includes(product)){
    notify()
  }
  else if(!localStorage.getItem('token')){
    warning()
  }
  else{
    setCartItem([...cartItem,product])

  }
}


const notify=()=>{
  toast.error('Item already added to the cart',{theme:'colored',position:toast.POSITION.TOP_LEFT,style:{fontSize:'1.7rem'}})
}
const warning=()=>{
  toast.error('You have to login',{theme:'colored',position:toast.POSITION.TOP_LEFT,style:{fontSize:'1.7rem'}})
}

const deleteItem=(item)=>{
setCartItem(cartItem.filter(d=>d.id!==item.id))
}


  return (
    <>
    <GlobalStyle/>
    <Switch>

      <Context.Provider value={{setProductDetail,productDetail,setCartItem,handleCartItem,cartItem,deleteItem}}>
        <Route path='/' exact><Home/></Route>
        <Route path='/products'><Products/></Route>
        {localStorage.getItem('token') ?    <Route path='/cart'><Cart/></Route> : <Redirect to='/login'/>}
     
        <Route path='/display'><DisplayProduct/></Route>
        <Route path='/login'><Login/></Route>
        <Route path='/signup'><Signup/></Route>
      </Context.Provider>

    </Switch>
    </>
  )
}

export default App

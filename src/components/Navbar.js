import React,{useState} from 'react'
import {Nav,Logo,RightLinks,LinkContainer,Links} from '../styles/Navbar'
import {Link} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

function Navbar() {
  const [progress, setProgress] = useState(0)
 



  const style={
    color:'white'
  }

  const Logout=()=>{
    localStorage.removeItem('token')
  }


  return (
    <>
        <LoadingBar
        color='#00e472'
        progress={100}
        onLoaderFinished={() => setProgress(0)}
      />


    <Nav>
        <Link  style={style} to='/'>
          <Logo>Shoeshop</Logo>
        </Link>
        <RightLinks>
            <LinkContainer><Link style={style} to='/'>
              <Links>Home</Links>
            </Link></LinkContainer>
            <LinkContainer><Link style={style} to='/products'>
              <Links>Products</Links>
            </Link></LinkContainer>
            <LinkContainer><Link style={style} to='/cart'>
              <Links>Cart</Links>
            </Link></LinkContainer>
            <LinkContainer><Link style={style} to='/login'>
              <Links onClick={Logout}>{localStorage.getItem('token') ? "Logout" : "Login"}</Links>
            </Link></LinkContainer>
        </RightLinks>
    </Nav>
    </>
  )
}

export default Navbar

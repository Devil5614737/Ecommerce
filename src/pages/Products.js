import React, { useState,useContext } from 'react'
import Navbar from '../components/Navbar'
import {CardWrapper,Card,Img,Name,Price} from '../styles/Products'
import {useHistory} from 'react-router-dom'
import {Shoes} from '../Shoes'
import {Context} from '../Context/Context'


function Products() {
const history=useHistory()
const[products]=useState(Shoes)
const {setProductDetail}=useContext(Context)



    const showProduct=()=>{
        history.push('/display')
    }

    return (
        <>
        
        <Navbar/>
            <CardWrapper>
                {products.map(product=>
                       <Card key={product.id} onClick={()=>setProductDetail(product)}>
                       <Img onClick={showProduct} src={product.image} alt='image of shoe'/>
                       <Name>{product.name}</Name>
                       <Price>${product.price}</Price>
                   </Card>)}
          
           
            </CardWrapper>
        </>
    )
}

export default Products

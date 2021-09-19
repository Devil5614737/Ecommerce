import React,{useContext, useState} from 'react'
import Navbar from '../components/Navbar'
import {Container,LeftContainer,Box,Img,Name,RightContainer,Card,Top,Title,Numbers,Center,Line,CartControl,Icon,Bottom} from '../styles/Cart'
import DeleteIcon from '../icons/delete.svg'
import {Context} from '../Context/Context'

function Cart() {
    const{cartItem,deleteItem}=useContext(Context)

   let prices=cartItem.map(item=>item.price)
   let price=prices.reduce((a,b)=>a+b,0)
  
   let discount=Math.floor(Math.random()* 100)
    
   let discountAmount=(discount /100) * price 
   let totalPrice=price=discountAmount
 
    return (
        <>
        <Navbar/>
            <Container>

            <LeftContainer>
                {cartItem.map(product=><Box key={product.id}>
                    <Img src={product.image} alt='image of shoe' />
                    <CartControl>
                      
                    </CartControl>
                    <Name>{product.name}</Name>
                    <Icon onClick={()=>deleteItem(product)} src={DeleteIcon}/>
                </Box>)}
  
            </LeftContainer>
            <RightContainer>
                <Card>
                    <Top>
                        <Title>quantity</Title>
                        <Numbers>{cartItem.length}</Numbers>
                    </Top>
                    <Center>
                    <Title>discount</Title>
                        <Numbers>{discount}%</Numbers>
                    </Center>
                    <Line></Line>
                    <Bottom>
                        <Title>total</Title>
                            <Numbers>${totalPrice}</Numbers>
                    </Bottom>
                </Card>
            </RightContainer>

            </Container>
        </>
    )
}

export default Cart

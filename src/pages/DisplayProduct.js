import React,{useContext} from 'react'
import {Icon,Back,Container,ProductContainer,Img,Info,Title,Description,Price,Button} from '../styles/DisplayProduct'
import Icons from '../icons/back.png'
import {useHistory} from 'react-router-dom'
import {Context} from '../Context/Context'
import CartIcon from '../icons/cart.svg'
import {Badge} from '@material-ui/core'


function DisplayProduct() {
const history=useHistory()
const {productDetail,handleCartItem,cartItem}=useContext(Context)

const goBack=()=>{
    history.push('/products')

}


    
    return (
        <Container>
            <Badge style={{position:'absolute',top:'20px',right:'340px',fontSize:'2rem'}} badgeContent={cartItem.length} color="error">

            <Icon  src={CartIcon}/>
</Badge>
            <Back onClick={goBack}>
                <Icon src={Icons} alt='icon image'/>
            </Back>
          <ProductContainer>
              <Img src={productDetail.image}/>
              <Info>
                  <Title>{productDetail.name}</Title>
                  <Description>{productDetail.description}</Description>
                  <Price>Price : ${productDetail.price}</Price>
                  <Button onClick={()=>handleCartItem(productDetail)}>ADD TO CART</Button>
              </Info>
          </ProductContainer>
        </Container>
    )
}

export default DisplayProduct

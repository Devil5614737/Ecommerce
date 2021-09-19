import styled from "styled-components";


export const Container=styled.div`
color:white;
padding: 12rem 22rem;
`

export const ProductContainer=styled.div`
display:flex;
`


export const Img=styled.img`
width:300px;
object-fit: cover;
height:450px;
`

export const Info=styled.div`
margin-top: 42px;
margin-left: 22px;
`

export const Title=styled.h2`
font-size: 2rem;
margin-bottom: 32px;
`

export const Description=styled.p`
font-size: 1.8rem;
width: 80%;
color:#959090;
margin-bottom: 15px;
`

export const Price=styled.p`
font-size: 1.8rem;
font-weight: bold;
margin-bottom: 12px;
`

export const Button=styled.button`
font-size: 1.8rem;
font-weight: bold;
background: white;
border:none;
padding:.3em .7em;
cursor:pointer;
&:hover{
    background:#000;
    color:white;
    transition: all .1s ease-in;
}
`

export const Back=styled.div`
border:1px solid;
width:45px;
height: 45px;
background: white;
-webkit-clip-path: circle(50% at 50% 50%);
clip-path: circle(50% at 50% 50%);
position: absolute;
right: 240px;
top: 10px;
display: flex;
align-items:center;
cursor:pointer;

`

export const Icon=styled.img`
width:30px;
height:30px;
transform:translate(5px,0)
`
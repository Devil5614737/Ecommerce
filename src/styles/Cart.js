import styled from 'styled-components'


export const Container=styled.div`
display:flex;
justify-content: space-between;
color:white;
padding:8rem;
`


export const LeftContainer=styled.div`
color:white;
width: 750px;
display: flex;
flex-wrap:wrap;
`


export const Box=styled.div`
width: 200px;
height:200px;
padding:2em ;
align-items: center;
background: #242222;
margin-bottom: 12px;
box-shadow: 10px 10px 20px rgba(0,0,0,.4);
margin-left: 12px;

`
export const Icon=styled.img`
width: 20px;
height:20px;
filter: invert(1);
cursor: pointer;
margin: 0 auto;
display: block;
`

export const CartControl=styled.div`
padding:.3em;
display:flex;
color:black;
align-items: center;
`


export const Img=styled.img`
width: 160px;
height:100px;
object-fit: cover;
`

export const Button=styled.div`
-webkit-clip-path: circle(50% at 50% 50%);
clip-path: circle(50% at 50% 50%);
height:35px;
width: 35px;
background:#fff;
`

export const Name=styled.p`
font-size: 1.5rem;
text-transform: uppercase;
text-align: center;
margin-bottom: 12px;
`


export const RightContainer=styled.div`

`

export const Input=styled.input`
height:30px;
width: 30px;
padding:.8rem;
`

export const Card=styled.div`
width:400px;
height:400px;
padding:2rem;
background: #242222;
box-shadow: 10px 10px 30px rgba(0,0,0,.4);
position:sticky;
top: 8rem;

`

export const Top=styled.div`
display: flex;
justify-content: space-between;
font-size: 3rem;
text-transform: uppercase;
font-weight: 500;
margin-bottom: 32px;
`
export const Center=styled.div`
display: flex;
justify-content: space-between;
font-size: 3rem;
text-transform: uppercase;
font-weight: 500;
margin-bottom: 32px;
`
export const Bottom=styled.div`
display: flex;
justify-content: space-between;
font-size: 3rem;
text-transform: uppercase;
font-weight: 500;
`

export const Title=styled.p``

export const Numbers=styled.p``

export const Line=styled.div`
height: 4px;
background: white;
margin-bottom: 32px;
`


export const RemoveAll=styled.button`
font-size: 2rem;
padding: .8rem;
border: none;
background-color: white;
text-transform: uppercase;
margin-top: 22px;
cursor: pointer;
font-weight: 600;
box-shadow: 10px 10px 10px rgba(0,0,0,.4);
`
import styled from "styled-components";


export const CardWrapper=styled.div`
color:white;
width: 1000px;
margin-left: 162px;
margin-top: 62px;
display: flex;
flex-wrap: wrap;
`

export const Card=styled.div`
width:220px;
height:250px;
padding:1em 1em;
background:#373535;
margin-left: 26px;
margin-bottom: 32px;
cursor:pointer;
&:hover{
    transform: translateY(-10px);
    box-shadow: 10px 10px 10px rgba(0,0,0,.4);
    transition: all ease-in .1s;
}
`

export const Img=styled.img`
width:200px;
height:160px;
object-fit: cover;
`


export const Name=styled.p`
font-size: 2rem;
text-align: center;
line-height: 1.6;


`

export const Price=styled.p`
font-size: 1.6rem;
text-align: center;
`
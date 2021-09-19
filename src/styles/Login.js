import styled, { keyframes }  from 'styled-components'

export const Container=styled.div`
color:white;
display:flex;
justify-content: space-between;
padding: 6rem;
`


export const LoginContainer=styled.div`
margin-left:99px;

`

export const Heading=styled.h1`
font-size: 5rem;
margin-top: -12px;
margin-bottom: 42px;
`

export const Label=styled.label`
font-size: 3rem;
line-height: 1.8;
`

export const Input=styled.input`
display:block;
height: 50px;
width: 400px;
border-radius: 5px;
border: none;
margin-bottom: 22px;
padding:.5em;
font-size: 2rem;
&:focus{
 outline: none;
}
`

export const Button=styled.button`
font-size: 2.3rem;
background-color: #454141;
border: none;
text-transform: uppercase;
font-weight: 600;
padding: .2em  .8em;
color:white;
cursor: pointer;

`
const updown = keyframes`
0% {
    opacity: .6;
    transform: translateY(1px);
}
100% {
    opacity: 1;
    transform: translateY(-1px);
}
`
export const Img=styled.img`
height: 400px;
margin-right: 82px;
animation: 5s ${updown} 0.3s cubic-bezier(.91,.27,.57,.55) ;
animation-iteration-count: infinite;
animation-duration: 3s;

`


export const Links=styled.a`
cursor: pointer;
font-weight: 600;
`
export const LinksContainer=styled.p`
font-size: 2rem;
margin-top: 12px;
`
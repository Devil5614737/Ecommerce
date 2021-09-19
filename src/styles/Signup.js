import styled from "styled-components";

export const Container=styled.div`
color:white;
margin-left: 160px;
margin-top: 24px;
`

export const Title=styled.h1`
font-size: 5rem;
text-transform:capitalize;
margin-bottom: 42px;
`


export const Top=styled.div`
display: flex;
`

export const Left=styled.div``

export const Label=styled.label`
font-size: 2.7rem;
font-weight: 500;
text-transform: uppercase;

`

export const Input=styled.input`
display: block;
height: 50px;
width: 400px;
border: none;
border-radius: 6px;
margin-bottom:32px;
font-size: 2rem;
padding: .3em;
margin-top: 10px;
&:focus{
    outline: none;
}
`


export const Right=styled.div`
margin-left: 42px;
`

export const Bottom=styled.div`
display:flex;
`

export const Button=styled.button`
font-size: 2rem;
text-transform: uppercase;
font-weight: bold;
background-color: white;
border:none;
padding: .2em .5em;
cursor: pointer;
`
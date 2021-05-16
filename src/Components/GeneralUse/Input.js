import React, {useRef, useEffect} from 'react'
import styled from "styled-components"
import Button from './Button'


const InputText = styled.input`
    width: 80%;
    padding: 1.5rem;
    border-radius: 30px;
    outline:none;
    border: 2px solid #565656;
    font-size: 1.6rem;
    color: #565656;

    @media (min-width: 768px) {
        width: 30vw;
        margin:auto;
        margin: 20px 0px;
      }
    `
const Input = ({placeholder, type, submit, buttonText, onChange, value, setInputValue}) => {

    function setValue (e){
    if(typeof(e.target.value)==undefined){
        console.log("h")
    }else{
        setInputValue(e.target.value)
        console.log(e.target.value)}}
    return (
        <>   
        <InputText 
        value={value} 
        type={type} 
        placeholder={placeholder} 
        onChange={setValue}></InputText>  
        </>
    )
}

export default Input

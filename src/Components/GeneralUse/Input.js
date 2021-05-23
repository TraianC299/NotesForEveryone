import React, {useRef, useEffect} from 'react'
import styled from "styled-components"
import Button from './Button'


const InputText = styled.input`
    width: 80%;
    padding: 1.5rem;
    border-radius: 4px;
    outline:none;
    border: 0.5px solid rgba(0, 0, 0, 0.87);
    font-size: 1.6rem;
    color: #565656;

    :hover{
        border: 2px solid #565656;
        transition: border 0.2s ease;
    }

    @media (min-width: 768px) {
        width: 30vw;
        margin:auto;
      }
    `
const Input = ({placeholder, type, value, list}) => {

    function setValue (e){
    if(typeof(e.target.value)==undefined){
        console.log("h")
    }else{
        setValue(e.target.value)
        console.log(e.target.value)}}
    return (
        <>   
        <InputText list={list}
        value={value} 
        type={type} 
        placeholder={placeholder} 
        onChange={setValue}></InputText>  
        </>
    )
}

export default Input

import React, { useState } from 'react'
import styled from "styled-components"
import Input from '../GeneralUse/Input'
import Button from '../GeneralUse/Button'
import { FaBookOpen, FaEvernote, FaNotesMedical } from 'react-icons/fa'
import { css } from "@emotion/css";
import {NavLink} from "react-router-dom"




const InputPage = () => {
  
const InputFile = styled.input`
visibility: hidden;
width: 90.72px;


:before {
  visibility: visible;
  content: '+';
  color: #565656;
  font-size: 8rem !important;
  display: inline-block;
  background: white;
  border: 2px solid #999;
  border-radius: 50%;
  padding: 0px 20px;
  outline: none;
  white-space: nowrap;
  cursor: pointer;
  
}
:active::before {
  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
}
`
const Container = css`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;

>a{
    text-decoration: none;
  }

>h2{
  color: #565656
}
`

const InputContainer = css`
  width: 100%;
  height: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;`

const InputText = styled.textarea`
    width: 80%;
    padding: 1.5rem;
    border-radius: 30px;
    outline:none;
    border: 2px solid #565656;
    margin-bottom: 30px;
    font-size: 1.6rem;
    color: #565656;

    @media (min-width: 768px) {
        width: 30vw;
        margin:auto;
        margin: 20px 0px;
      }
`
const ButtonIcon = css`
width: 80vw;
height: 5.2rem;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
background-color: #2EBE60;
border: none;
border-radius: 555px;

&.notes{
  background-color: #565656;
  >svg{
  height: 65%;
  width: 30%;
  color: white;
  
}
}
>svg{
  height: 80%;
  width: 30%;
  color: white;
  margin-right:10%;
  margin-left:2%;
}

>p{
  font-size: 2.5rem;
  color: white;

}
`
const InputSlide = css`
    width: 80%;
    padding: 1.5rem;
    border-radius: 30px;
    outline:none;
    border: 2px solid #565656;
    font-size: 1.6rem;
    color: #565656;
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: all 300ms ease-in-out;
    z-index: -1000;
    margin: -20px;;

    &.slide{
      transform: translateY(0%);
      opacity: 1;
      transition: all 300ms ease-in-out;
      pointer-events: auto;
      margin: 10px;
    }

    @media (min-width: 768px) {
        width: 30vw;
        margin:auto;
        margin: 20px 0px;
      }
`


const [slide, setSlide] = useState(false)
  
const slideFunction = () =>{
    setSlide(!slide)
  }
    return (
        <div className={`${Container}`}>
          <h2>Add Notes</h2>
          <div className={`${InputContainer}`}>
            <Input placeholder="Topic"></Input>
            <Input placeholder="Topic"></Input>
            <Input placeholder="Topic"></Input></div>
            <button className={`${ButtonIcon}`} onClick={slideFunction} ><FaEvernote></FaEvernote><p>Evernote</p></button>
            <input className={`${InputSlide} ${slide ? "slide" : null}`}></input>
            <NavLink to="/uploadNotes/quill"><button className={`${ButtonIcon} notes`} ><FaBookOpen></FaBookOpen><p>Evernote</p></button></NavLink>
            
            
        
        </div>
    )
}

export default InputPage

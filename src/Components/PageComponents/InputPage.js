import React from 'react'
import styled from "styled-components"
import Input from '../GeneralUse/Input'
import {useAuth} from "../../firebase/contexts/AuthContext"
import SignUp from '../GeneralUse/SignUp'


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

const Container = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

height: 100vh;`

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



    return (
        <Container>
            <Input placeholder="Topic"></Input>
            <InputText placeholder="A quick description about your note" rows="6"></InputText>
            <InputFile name="file" type="file"></InputFile>
        </Container>
    )
}

export default InputPage

import React, { useState} from 'react'
import styled from "styled-components"
import {useAuth} from "../../firebase/contexts/AuthContext"
import {Link, useHistory} from "react-router-dom"
import Button from './Button'
import InputMUI from './InputMUI'
import {Flex} from "../PageComponents/InputPage"
import TransitionAlert from "./Alert"
import CenteredText from "../GeneralUse/CenteredText"


    export const Form = styled.form`
    background: white;
    height: 100vh;
    padding-bottom: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;

    >*{
        margin-top: 30px;
    }

    >input{
        width: 90%;
    }
    >button{
        margin-top: 15px;
    }

    >a{
        text-decoration: underline;
        color: black;
        font-size: 1.6rem;
        margin-bottom: 15px;
    }

    @media (min-width: 768px){
        position: relative;
        width: 50%;
        max-width: 60%;
        padding-top: 7%;
        height: fit-content;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;    
        border-radius: 5px;

        >h2{
            margin: 0;
            display: flex;
            align-items: center;
            position: absolute;
            top: 0;
            color: black;
            height: 20%;
            width: 100%;
            padding-left: 10%;
            background: #3E57FF;
            color: white;
            border-radius: 5px 5px 0 0;
            }
      }

    `

    export const P = styled.p`
    text-align: center;
    color: black;
    margin-top: 10px;
    `

    export const InputContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    >div{
        margin-top: 5%;
    }
    `
    

const LogIn = () => {

    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const {logIn, currentUser} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()
        if (email.length<1){
            setEmailError(true)
            return
        }

        if (password.length<8){
            setPasswordError(true)
            return
        }
        try{
        setLoading(true)
        setError("")
        await logIn(email, password)
        history.push("/")
            }catch{setError("Failed to log in")}
        setLoading(false)
    }



    return (
        currentUser?
            <CenteredText>It seems like you are already logged in</CenteredText>
            :
        <>
        <Flex>
            <Form onSubmit={(e)=>handleSubmit(e)}>
                <h2>Log In</h2>

                <InputContainer>
                    <InputMUI setError={setEmailError} error = {emailError} type="email" label={emailError?"Please type a valid email adress":"email"}  value={email} setValue={setEmail}></InputMUI>
                    <InputMUI setError={setPasswordError} error={passwordError} type="password" label={passwordError?"Password should be at least 8 characters long":"password"} value={password} setValue={setPassword}></InputMUI>
                </InputContainer>

                <TransitionAlert text={error} severity="error" value={error} setValue={setError}></TransitionAlert>
                <Button  bigger={true}  color="#3E57FF" text="Log In" disabled={loading} type="submit">Log In</Button>
                <Link to="/forgotPassword">Forgot Password?</Link><P>You don’t have an account? <Link style={{textDecoration: "underline", color:"#565656"}} to="/signUp">Sign Up</Link></P>
            </Form>
            
        </Flex>
        </>
    )
}

export default LogIn

import React, {useRef, useState} from 'react'
import styled from "styled-components"
import {useAuth} from "../../firebase/contexts/AuthContext"
import {Link, useHistory} from "react-router-dom"
import Input from "./Input"
import Button from './Button'
import InputMUI from './InputMUI'


    export const Form = styled.form`
    background: #f2f1f7;
    padding: 15px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    max-width: 90vw;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 20vh;
    >*{
        margin-top: 30px;
    }

    >h2{
        color: #565656;
    }

    >input{
        width: 90%;
    }
    >button{
        margin-top: 20px;
    }

    >a{
        text-decoration: underline;
        color: #565656;
        font-size: 1.6rem;
        margin-bottom: 20px;
    }

    @media (min-width: 768px){
        max-width: 600px;
      }

    `

    export const P = styled.p`
    text-align: center;
    color: black;
    margin-top: 10px;`





const LogIn = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {logIn} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()
        try{
        setLoading(true)
        setError("")
        await logIn(email, password)
        history.push("/")
            }catch{setError("Failed to sign in")}
        setLoading(false)
    }


    console.log(email)

    return (
        <div>
            <Form onSubmit={(e)=>handleSubmit(e)}>
                <h2>Log In</h2>
                {error && <P>{error}</P>}
                <InputMUI type="email" label="email"  value={email} setValue={setEmail}></InputMUI>
                <InputMUI type="password" label="password" value={password} setValue={setPassword}></InputMUI>
                <Button text="Log In" disabled={loading} type="submit">Log In</Button>
                <Link to="/forgotPassword">Forgot Password?</Link>
            </Form>
            <P>You don’t have an account? <Link style={{textDecoration: "underline", color:"#565656"}} to="/signUp">Sign Up</Link></P>
        </div>
    )
}

export default LogIn

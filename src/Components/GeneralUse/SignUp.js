import React, {useRef, useState} from 'react'
import styled from "styled-components"
import {useAuth} from "../../firebase/contexts/AuthContext"
import {Link, useHistory} from "react-router-dom"
import Input from './Input'
import Button from './Button'
import {Form, P} from "./LogIn"






const SignUp = () => {

    const [emailRef,setEmailRef]=useState("")
    const [passwordRef, setPasswordRef] = useState("")
    const [passwordConfirmationRef, setPasswordConfirmationRef] = useState("")
    const {signUp} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history=useHistory()

    async function handleSubmit(e){
        e.preventDefault()
        if (passwordRef!==passwordConfirmationRef){
            return setError("Passwords do not match")
        }
        try{
        setLoading(true)
        setError("")
        await signUp(emailRef, passwordRef)
        history.push("/")
            }catch{setError("Failed to create an account")}
        
        setLoading(false)
    }

    


    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                {error && <P>{error}</P>}
                <Input type="email" setInputValue={setEmailRef}></Input>
                <Input type="password" setInputValue={setPasswordRef}></Input>
                <Input type="password" setInputValue={setPasswordConfirmationRef}></Input>
                <Button fill={true} text="Sign Up" disabled={loading} type="submit"
                color="#565656" textColor="white">Sign Up</Button>
            </Form>
            <P>Already have an account? <Link style={{textDecoration: "underline", color:"#565656"}} to="/logIn">Log In</Link></P>
        </div>
    )
}

export default SignUp

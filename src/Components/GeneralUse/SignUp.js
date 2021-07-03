import React, { useState} from 'react'
import styled from "styled-components"
import {useAuth} from "../../firebase/contexts/AuthContext"
import {Link, useHistory} from "react-router-dom"
import Button from './Button'
import {Form, P, InputContainer} from "./LogIn"
import InputMUI from './InputMUI'
import {Flex} from "../PageComponents/InputPage"
import TransitionAlert from "./Alert"
import CenteredText from './CenteredText'




const SignUp = () => {
    const [email,setEmail]=useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const {signUp, currentUser} = useAuth()
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history=useHistory()

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
        
        if (password!=passwordConfirmation){
            setError("Passwords do not match")
            return
        }
        
        setLoading(true)
        setError("")
        await signUp(email, password)
        .then(history.push("/"))
        .catch(function(error)
        {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
    
          if (errorCode == 'auth/email-already-in-use')
          {
                setError("Email already in use")
            }
            else
            {
                setError("Failed to sign up")
            }
              console.log(error, errorMessage);
    
        });
        
        
        
        setLoading(false)
    }

    


    return (
        currentUser?
            <CenteredText>It seems like you are already logged in</CenteredText>
            :
        <Flex>
            <Form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <InputContainer>
                <InputMUI setError={setEmailError} error = {emailError} label="email" type="email" setValue={setEmail}></InputMUI>
                <InputMUI setError={setPasswordError} error={passwordError}  label="password" type="password" setValue={setPassword}></InputMUI>
                <InputMUI label="password confirmation" type="password" setValue={setPasswordConfirmation}></InputMUI>
                </InputContainer>
                <TransitionAlert text={error} severity="error" value={error} setValue={setError}></TransitionAlert>
                <Button bigger={true} fill={true} text="Sign Up" disabled={loading} type="submit"
                color="#3E57FF" textColor="white">Sign Up</Button>            
                <P>Already have an account? <Link style={{textDecoration: "underline", color:"#565656"}} to="/logIn">Log In</Link></P>

            </Form>
        </Flex>
    )
}

export default SignUp

import React from 'react'
import {Route, NavLink} from "react-router-dom"
import {useAuth} from "../../firebase/contexts/AuthContext"
import styled from "styled-components"
import Button from './Button'

const P = styled.p`
text-align: center;
font-size: 2rem;
color: #3E51FF;
padding: 0 10px;
`

const ButtonHolder = styled.div`
margin-top: 40px;
align-self: center;
>a{
  margin-left: inherit !important;
}
`

const Container = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;`


const PrivateRoute = ({component: Component, ...rest}) => {


        let {currentUser} = useAuth()
      

    return (
        <Route {...rest} render={props=>{
                return currentUser? <Component {...props}></Component>
                :
                <Container>
                <P>In order to use this page you need to either log in or sign up</P>
                <ButtonHolder>
                    <NavLink to="/signUp">
                        <Button text="Sign up" textColor="white" fill="true" color="#3E51FF"></Button>
                    </NavLink>
                    <NavLink to="/logIn">
                        <Button 
                        text="Log In"  
                        color="#3E51FF"></Button>
                    </NavLink></ButtonHolder>
                </Container>
            }}>
        </Route>
    )
}

export default PrivateRoute

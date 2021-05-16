import React from 'react'
import {Route, Redirect} from "react-router-dom"
import {useAuth} from "../../firebase/contexts/AuthContext"
import styled from "styled-components"

const P = styled.p`
`
const PrivateRoute = ({component: Component, ...rest}) => {

    const {currentUser} = useAuth()
    return (
        <Route {...rest} render={props=>{
                return currentUser? <Component {...props}></Component>
                :
                <>
                <P>In order to use this paga you need to either log in or sign up</P>
                </>
            }}>
        </Route>
    )
}

export default PrivateRoute

import React from 'react'
import styled from "styled-components"
import {NavLink, Route, useHistory} from "react-router-dom"
import useDatabase from '../../firebase/hooks/useDatabase'
import Notes from './Notes'

const SubSubTopic = ({name, color}) => {
    const Container = styled.div`
    display: flex;
    height: 10vh;
    width: 80vw;
    background: ${color};
    color: white;
    border-radius: 7px;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    margin: auto;
    margin-top: 2vh;
    `
    const location = useHistory()
    return (
        <>
        
        <NavLink to={`${location.location.pathname}/${name}`}>
            <Container>
            {name}
            </Container>
        </NavLink>

        </>
    )
}

export default SubSubTopic

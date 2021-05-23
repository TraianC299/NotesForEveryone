import React from 'react'
import { NavLink, Route, useHistory } from 'react-router-dom'
import styled from "styled-components"
import Notes from './Notes'
import SubSubTopics from "./SubSubTopics"

const SubTopic = ({topic, name, color, path}) => {
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
   
    return (
        <>
         
        
            <NavLink to={`${path}/${name}`}>
                <Container>
                {name}
                </Container>
            </NavLink>
        
        </>
    )
}

export default SubTopic

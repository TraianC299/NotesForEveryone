import React from 'react'
import { Route } from 'react-router'
import styled from "styled-components"
import InputPage from '../PageComponents/InputPage'

const Note = ({name, link, color}) => {
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
    return (<>

        <a href={link}>
                <Container>
                {name}
                </Container>
            </a>
            </>
    )
}

export default Note

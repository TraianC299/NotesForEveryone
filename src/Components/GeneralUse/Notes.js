import React from 'react'
import useDatabase from '../../firebase/hooks/useDatabase'
import Note from './Note'
import styled from "styled-components"
import { useHistory, Route } from 'react-router'
import InputPage from '../PageComponents/InputPage'

const Notes = ({color, subSubTopic}) => {
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
    const docs =useDatabase("notes", subSubTopic)

    return (
        <>
        <div>

            {docs?
            docs.map(doc=><Note link={doc.link} color={color} name="heel"></Note>)
            
            :
            null}
        </div>
        </>
    )
}

export default Notes

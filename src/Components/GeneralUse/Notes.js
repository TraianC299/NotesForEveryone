import React from 'react'
import useDatabase from '../../firebase/hooks/useDatabase'
import Note from './Note'
import styled from "styled-components"
import { useRouteMatch } from 'react-router-dom'
import CenteredText from "../GeneralUse/CenteredText"

export const FlexRow=styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: space-around;
    align-items: flex-start;
`

const Notes = ({color, subSubTopic}) => {   
    const docs =useDatabase("notes", subSubTopic)
    let { url } = useRouteMatch();

    return (
        <>      
        <FlexRow>
            {docs&&docs.legth>1?
            docs.map(doc=><>
            
            <Note 
            path={url} 
            id={doc.id} 
            text={doc.text} 
            link={doc.link} 
            color={color} 
            name={doc.name}></Note>
            
            </>)
            
            :
            <CenteredText>It seems there are no notes in this SubSubTopic yet.</CenteredText>}
        </FlexRow>      

        </>
    )
}
export default Notes



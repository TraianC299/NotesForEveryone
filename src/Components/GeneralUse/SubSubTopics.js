import { Input } from '@material-ui/core'
import React from 'react'
import { Route, useHistory } from 'react-router-dom'
import InputPage from '../PageComponents/InputPage'
import Notes from './Notes'
import SubSubTopic from "./SubSubTopic"

const SubSubTopics = ({color, topic}) => {
    const location = useHistory()

    return (
        <>        

            {topic.map(element=><>                
            <SubSubTopic name={element} color={color}></SubSubTopic></>)}
        </>
    )
}

export default SubSubTopics

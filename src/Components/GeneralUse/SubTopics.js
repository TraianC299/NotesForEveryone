import React from 'react'
import SubTopic from "./SubTopic"
import {Route} from "react-router-dom"
import SubSubTopic from './SubSubTopic'
import SubSubTopics from './SubSubTopics'

const SubTopics = ({topic, color, path}) => {
    return (
        
        <>
        
             {Object.keys(topic).map(element=><SubTopic path={path} topic={topic} color ={color} name={element}/>)}
        </>
    )
}

export default SubTopics




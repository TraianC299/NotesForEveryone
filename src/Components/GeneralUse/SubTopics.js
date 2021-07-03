import React from 'react'
import SubTopic from "./SubTopic"
import {FlexRow} from "./Notes"
import CenteredText from './CenteredText'

const SubTopics = ({topic, color, path}) => {
    return (
        
        <FlexRow>

             {Object.keys(topic).legth>0?
             Object.keys(topic).map(element=><SubTopic path={path} topic={topic} color ={color} name={element}/>)
             :
             <CenteredText>It seems that there are no SubTopics in this Topic yet.</CenteredText>}
        </FlexRow>
    )
}

export default SubTopics




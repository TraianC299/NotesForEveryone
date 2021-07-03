import { Input } from '@material-ui/core'
import React from 'react'
import {useHistory } from 'react-router-dom'
import SubSubTopic from "./SubSubTopic"
import {FlexRow} from "./Notes"
import CenteredText from './CenteredText'


const SubSubTopics = ({color, topic}) => {
    const location = useHistory()

    return (
        <FlexRow>        

            {topic.legth>0?
            topic.map(element=><>                
            <SubSubTopic name={element} color={color}></SubSubTopic></>)
            :
            <CenteredText>It seems that there are no SubSubTopics in this SubTopic yet.</CenteredText>}
        </FlexRow>
    )
}

export default SubSubTopics

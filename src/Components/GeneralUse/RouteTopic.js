import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import Notes from './Notes'
import SubSubTopics from './SubSubTopics'
import SubTopics from './SubTopics'

const RouteTopic = ({path,topic, color}) => {
    delete topic["name"]
    let content=[]
    for (let name of Object.keys(topic)){
        for (let subName of topic[name]){
        content.push(
            <Route exact path={`/${path}/${name}/${subName}`}>
                  <Notes color={color} subSubTopic={subName}></Notes>
              </Route>)}}


    content.push(
    <Route exact path={`/${path}`}>
        <SubTopics color={color} path={`/${path}`} topic={topic}></SubTopics>
      </Route>)


      {Object.keys(topic).map(name=>
        content.push(
      <Route exact path={`/${path}/${name}`}>
            <SubSubTopics color={color}  topic={topic[name]}></SubSubTopics>
        </Route> ))
        }
    return (
        
        content
        
    )
}

export default RouteTopic

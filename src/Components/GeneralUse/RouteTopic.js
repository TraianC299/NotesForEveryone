import React from 'react'
import { Route } from 'react-router-dom'
import Notes from './Notes'
import SubSubTopics from './SubSubTopics'
import SubTopics from './SubTopics'


const RouteTopic = ({topic, color}) => {
    let content=[]
    const finalTopic={...topic}
    const path =finalTopic["name"]
    delete finalTopic["name"]
    delete finalTopic["color"]
    for (let name of Object.keys(finalTopic)){
        for (let subName of finalTopic[name]){
        content.push(
            <Route exact path={`/${path}/${name}/${subName}`}>
                  <Notes color={color} subSubTopic={subName}></Notes>
              </Route>)}}


    content.push(
    <Route exact path={`/${path}`}>
        <SubTopics color={color} path={`/${path}`} topic={finalTopic}></SubTopics>
      </Route>)


      {Object.keys(finalTopic).map(name=>
        content.push(
      <Route exact path={`/${path}/${name}`}>
            <SubSubTopics color={color}  topic={topic[name]}></SubSubTopics>
        </Route> ))
        }

  

    return (content)
}

export default RouteTopic

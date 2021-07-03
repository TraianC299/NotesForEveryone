import React, {useContext, useState, useEffect} from 'react'
import {auth, database} from "../config"

const TopicDetailsContext = React.createContext()
export const useTopicDetailsContext=()=>{
        return useContext(TopicDetailsContext)
    }

export const TopicDetailsProvider = ({children}) => {
    //this is an object that represent our current user, it will be available throuhg all of our application using context
const [topic, setTopic]  = useState("")
const [subTopic, setSubTopic] = useState("")
const [subSubTopic, setSubSubTopic] = useState("")
const [noteName, setNoteName] = useState("")
const [text, setText] = useState("")
const objectTopics=[]
let topics=[]
const [stateTopicsNames, setStateTopicsNames] = useState([])
const [stateObjectTopics, setStateObjectTopics] = useState([])


    useEffect(()=>{
        database.collection("Topics").get()
      .then(querySnapshot => {
        querySnapshot.docs.map(doc => {
      
          objectTopics.push(doc.data())
          topics = objectTopics.map(topic=>topic["name"])
          topics.sort()
          
        });
        setStateObjectTopics(objectTopics)
        setStateTopicsNames(topics) 
       
      });
      }
      ,[])


    let value={
        text,
        topic,
        subTopic,
        subSubTopic,
        noteName,
        setTopic,
        setSubTopic, 
        setSubSubTopic,
        setNoteName,
        setText,
        stateTopicsNames,
        stateObjectTopics
    }
    
    return (
        <TopicDetailsContext.Provider value={value}>
        {children}
        </TopicDetailsContext.Provider>
    )
}



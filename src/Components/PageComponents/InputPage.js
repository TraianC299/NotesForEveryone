import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import Button from '../GeneralUse/Button'
import { FaBookOpen, FaEvernote, FaNotesMedical } from 'react-icons/fa'
import { css } from "@emotion/css";
import {NavLink} from "react-router-dom"
import oneNote from "../../Images/onenote.svg"
import FreeSoloCreateOption from "../GeneralUse/Autocomplete"
import {database} from "../../firebase/config"
import {useAuth} from "../../firebase/contexts/AuthContext"
import TextField from '@material-ui/core/TextField';
import InputMUI from "../GeneralUse/InputMUI"
import { programming, economics, philosophy} from "../GeneralUse/topics"





const InputPage = () => {

  const [slideEvernote, setSlideEvernote] = useState(false)
const [slideOneNote, setSlideOneNote] = useState(false)

//topics state
const [topic, setTopic]  = useState("")
const [subTopic, setSubTopic] = useState("")
const [subTopics, setSubTopics] =useState([])
const [subSubTopics, setSubSubTopics] = useState([])
const [subSubTopic, setSubSubTopic] = useState("")

//note link and note name
const [noteLink, setNoteLink] = useState("")
const [noteName, setNoteName] = useState("")

//error
const [topicError, setTopicError] = useState(false)
const [subTopicError, setSubTopicError] = useState(false)
const [subSubTopicError, setSubSubTopicError] = useState(false)

  
const InputFile = styled.input`
visibility: hidden;
width: 90.72px;


:before {
  visibility: visible;
  content: '+';
  color: #565656;
  font-size: 8rem !important;
  display: inline-block;
  background: white;
  border: 2px solid #999;
  border-radius: 50%;
  padding: 0px 20px;
  outline: none;
  white-space: nowrap;
  cursor: pointer;
  
}
:active::before {
  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
}
`
const Container = css`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;

>a{
    text-decoration: none;
  }

>h2{
  color: #565656;
}

@media (min-width: 768px) {
    flex-direction: column;
    width: 60%;
    height: 80vh;
    margin: auto;
    margin-top: 10%;
    border-radius: 20px;
    box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12)
      }
`
const InputContainer = css`
  width: 100%;
  height: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  
  @media (min-width: 1025px) {
    flex-direction: column;
      }
`
const ButtonIcon = css`
width: 20vw;
height: 5.2rem;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
background-color: #2EBE60;
border: none;
border-radius: 7px;
margin: auto;

&.notes{
  background-color: #565656;
  >svg{
  height: 70%;
  width: 80%;
  color: white;
}
}


&.oneNote{
  background-color: #ae4bd5;
  transform: scale(${slideOneNote?"1.2":"1"});
  transition: transform 0.3s ease-out;
}




>svg, img{
  height: 80%;
  width: 80%;
  color: white;
}



@media (min-width: 768px) {
    width: 10vw;
    height: 5.2rem;
      }
`
const ButtonContainer=css`
display: flex;
width: 80%;
padding-top: 7%;

@media (min-width: 768px) {
    width: 40vw;
      }
`
const InputSlide = css`
    width: 80%;
    padding: 1.5rem;
    border-radius: 7px;
    outline:none;
    border: 2px solid #565656;
    font-size: 1.6rem;
    color: #565656;
    transform: translateY(-100%);
    opacity: 0;
    transition: all 300ms ease-in-out;
    z-index: -1000;
    margin: -20px;

   
    &.slide{
      transform: translateY(0%);
      opacity: 1;
      transition: all 300ms ease-in-out;
      pointer-events: auto;
      margin: 10px;
      z-index: initial;
      @media (min-width: 768px) {
        transform: translateY(-30%);
      }
    }

    @media (min-width: 768px) {
        margin:auto;
        margin: 20px 0px;
      }
`
const Input = css`
width: 80%;
padding: 1.5rem;
border-radius: 4px;
outline:none;
border: 0.5px solid rgba(0, 0, 0, 0.87);
font-size: 1.6rem;
color: #565656;

:hover{
    border: 2px solid #565656;
    transition: border 0.2s ease;
}

@media (min-width: 768px) {
    width: 30vw;
    margin:auto;
  }
`




const {currentUser} = useAuth()
const email = currentUser.email



function postNotesDatabase({topic, subTopic, subSubTopic, name, link, noteProvider}){
  return (
      database.collection("notes").doc().set({
          topic: topic,
          subTopic: subTopic,
          subSubTopic: subSubTopic,
          name: name,
          link: link,
          noteProvider: noteProvider,
          email: email
      })
      .then(() => {
          console.log("Document successfully written!");
      })
      .catch((error) => {
          console.error("Error writing document: ", error);
      }
  ))
}
 
const slideEvernoteFunction = (e) =>{
  setSlideEvernote(!slideEvernote)
  setSlideOneNote(false)
  e.preventDefault()
  
  }

const slideOneNoteFunction = (e) =>{
  setSlideOneNote(!slideOneNote)
  setSlideEvernote(false)
  e.preventDefault()
  
  }

const handleSubmit = (e) =>{
  e.preventDefault()
  const object = {
    topic: topic,
    subTopic: subTopic,
    subSubTopic: subSubTopic,
    name: noteName, 
    link: noteLink,
    noteProvider:""}
  
  validation()
  if (topicError||subTopicError||subSubTopicError){
    return null
  }

  postNotesDatabase(object)
  
 }

//Validation
const validation = ()=>{
  if (topic.length==0) {setTopicError(true)}else{setTopicError(false)}
  if (subTopic.length==0) {setSubTopicError(true)} else {setSubSubTopicError(false)}
  if (subSubTopic.length==0) {setSubSubTopicError(true)} else {setSubSubTopicError(false)}
}

let objectTopics=[programming, economics, philosophy]
const topics=[]
objectTopics.map(topic=>{topics.push(topic["name"])})

function handleSubTopics(){for (let theme of objectTopics){ if (theme["name"]==topic)
  {setSubTopics(Object.keys(theme))
  } else{return null}}}

  useEffect(()=>{
    handleSubTopics()
  },[topic])


  function handleSubSubTopics(){
    for (let theme of objectTopics){ if (theme["name"]==topic&&subTopic)
  {setSubSubTopics(theme[subTopic])
  } else{return null}}}

  useEffect(()=>{
    handleSubSubTopics()
  }, [subTopic])

    return (
        <>
          
          <form onSubmit={handleSubmit} className={`${Container}`}>
            <h2>Add Notes</h2>
          <div className={`${InputContainer}`}>
            <FreeSoloCreateOption 
                error={topicError}
                value={topic}
                setValue={setTopic}
                label={topicError? "Topic: Please fill in the input":"Topic" }
                options={topics}>
            </FreeSoloCreateOption>
            <FreeSoloCreateOption 
            error={subTopicError}
                value={subTopic}
                setValue={setSubTopic}
                label={subTopicError?"SubTopic: Please fill in the input":"SubTopic"} 
                options={subTopics}>
            </FreeSoloCreateOption>
            <FreeSoloCreateOption 
                error={subSubTopicError}
                value={subSubTopic}
                setValue={setSubSubTopic}
                label={subSubTopicError?"SubSubTopic: Please fill in the input":"SubSubTopic"} 
                options={subSubTopics}>
            </FreeSoloCreateOption>
            </div>
            
            <InputMUI value={noteName} setValue={setNoteName} label="Type the name of your note"></InputMUI>
          
            <div className={ButtonContainer}>
            <button className={`${ButtonIcon}`} onClick={slideEvernoteFunction} ><FaEvernote></FaEvernote></button>
            <button className={`${ButtonIcon} oneNote`} onClick={slideOneNoteFunction} ><img src={oneNote}></img></button>
            <NavLink style={{margin: "auto"}} to="/uploadNotes/quill">
            <button className={`${ButtonIcon} notes`} ><FaBookOpen></FaBookOpen></button></NavLink></div>
            
            
            <input onChange={(e)=>setNoteLink(e.target.value)} placeholder="ff" className={`${InputSlide} ${slideEvernote || slideOneNote ? "slide" : null}`}></input>

            <Button color="#565656" type="submit" text="Submit Note"></Button>
            
            
            
            
        
        </form></>
    )
}

export default InputPage

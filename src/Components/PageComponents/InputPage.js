import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import Button from '../GeneralUse/Button'
import { FaEvernote } from 'react-icons/fa'
import { css } from "@emotion/css";
import oneNote from "../../Images/onenote.svg"
import FreeSoloCreateOption from "../GeneralUse/Autocomplete"
import {database} from "../../firebase/config"
import {useAuth} from "../../firebase/contexts/AuthContext"
import InputMUI from "../GeneralUse/InputMUI"
import parse from 'html-react-parser';
import {useTopicDetailsContext} from "../../firebase/contexts/TopicDetailsContext"
import {useHistory} from "react-router-dom"
import TransitionAlert from "../GeneralUse/Alert"
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export function useTrait(initialValue) {
  const [trait, updateTrait] = useState(initialValue);

  let current = trait;

  const get = () => current;

  const set = newValue => {
     current = newValue;
     updateTrait(newValue);
     return current;
  }

  return {
     get,
     set,
  }
}

export const Flex= styled.div`
    @media (min-width: 768px){
    display:flex;
    align-items:center;
    justify-content:center;
    min-height:max-content;
    height: 100vh;
    background: linear-gradient(135deg,  #D0D5FF 50%, white 50%);
    }
`

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  paper: {
    width: "50vh"
  }

}));
const Container = css`
    min-height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    min-height: fit-content;
    background: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;    
    position: relative;
    padding: 10vh 0;
    margin: auto;


>a{
    text-decoration: none;
  }

>#quillPreview{
  overflow: scroll;
  padding: 10px 10px;
  border: 1px solid rgba(0, 0, 0, 0.23);
  border-radius: 3px;
  width: 80%;
  display: flex;
  flex-direction: column; 
  align-items: "center";
  justify-content:"flex-start";
  height: 20%;
  scroll-behavior: auto;
}

>h2{
      display: flex;
      align-items: center;
      position: absolute;
      justify-content: space-between;
      top: 0;
      color: black;
      height: 15%;
      width: 100%;
      padding-left: 10%;
      padding-right: 10%;
      background: #3E57FF;
      color: white;
      >button{
        top: 50%;
        right: 10%;
      }
    }


@media (orientation: landscape) , (min-width: 768px){
  justify-content: space-around;
  padding: 5vh 0;
  padding-top: 20vh;
  width: 60%;
  height: 80vh;
  min-height: fit-content;
  margin: auto;
  border-radius: 5px;


    >h2{
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      color: black;
      height: 20%;
      width: 100%;
      padding-left: 10%;
      padding-right: 10%;
      background: #3E57FF;
      color: white;
      border-radius: 5px 5px 0 0;
    }
      }

@media (orientation: landscape) and (max-height: 500px){
    width: 100%;
    padding-top: 40vh;
    height: fit-content;
    min-height: fit-content;
    border: none;

    >h2{
      border-radius: 0;
    }
    >button{
      margin-top: 50px;
    }
    

      }
@media (orientation: portrait) and (min-height: 1000px){
  padding-top: 10vh;
  height: 70vh;
}




`
const InputContainer = css`
  width: 100%;
  height: fit-content;
  min-height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 15%;
  
  >div{
    margin-top: 18px;
  }
 
  @media (orientation: landscape) {
    margin-top: 0;
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: stretch;
    align-items: stretch;
    grid-gap: 10%;
    >div{
      justify-self: center;
      width: 100% !important;
    }
      }
`
const ButtonIcon = css`
width: 12vw;
height: 12vw;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
background-color: #2EBE60;
border: none;
border-radius: 50%;
margin: auto;
transition: all 0.3s ease-out;


@media (orientation: landscape) {
    width: 5vw !important;
    height: 5vw !important;
      }

@media (orientation: portrait) and (min-height: 900px){
    width: 7vw !important;
    height: 7vw !important;
}

@media (orientation: landscape) and (max-height: 550px) {
    width: 8vw !important;
    height: 8vw !important;
      }



&.notes{
  background-color: white;
  border: 3px solid #3E57FF;

  >img{
  width: 60%;
  height: 60%;
  color: white;
}
}


&.oneNote{
  background-color: #ae4bd5;
  transition: all 0.3s ease-out;
}

&.evernote{
  transition: all 0.3s ease-out;

}

&.shadow{
  box-shadow:5px 5px rgba(0,0,0,.15);
  transition: box-shadow 0.3s ease-out;
}




>svg, img{
  height: 50%;
  width: 50%;
  color: white;
}




`
const ButtonContainer=css`
display: flex;
width: 80%;
padding-top: 4%;
padding-bottom: 4%;
transition: all 0.3s ease-out;
height: fit-content;


`
const Info = styled.button`
cursor: pointer;
border: none; 
border-radius: 50%; 
align-self:center; 
justify-self: center;
height: 30px;
width: 30px;
display: flex;
align-items: center;
justify-content: center;
> svg{
  height: 60%;
  width: 60% !important;
}
`


const InputPage = ({quill}) => {

const [slideEvernote, setSlideEvernote] = useState(false)
const [slideOneNote, setSlideOneNote] = useState(false)

//topics state
const {
 topic,
 subTopic,
 subSubTopic,
 noteName,
 setTopic,
 setSubTopic, 
 setSubSubTopic,
 setNoteName, 
  stateTopicsNames,
  stateObjectTopics, text
} = useTopicDetailsContext()



const [subTopics, setSubTopics] =useState([])
const [subSubTopics, setSubSubTopics] = useState([])

//note link and note name
const [noteLink, setNoteLink] = useState("")

//error
const topicError= useTrait(false)
const subTopicError= useTrait(false)
const subSubTopicError  = useTrait(false)
const noteNameError  = useTrait(false)

//success upload
const [successUpload, setSuccessUpload] = useState("")

//history object
const history = useHistory()



  
//Validation
async function validation(){
  if(topic.length==0) {await topicError.set(true)}
  if(subTopic.length==0) {await subTopicError.set(true)}
  if(subSubTopic.length==0) {await subSubTopicError.set(true)}
  if(noteName.length==0) {await noteNameError.set(true)}
}

let email=null
const {currentUser} =  useAuth()
if (currentUser) { email = currentUser.email}

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
          setSuccessUpload("Note successfully uploaded")
      })
      .catch((error) => {
          console.error("Error writing document: ", error);
      }
  ))
}

const postQuillNotesDatabase=()=>{
     database.collection("notes").doc().set({
         topic: topic,
         subTopic: subTopic,
         subSubTopic: subSubTopic,
         name: noteName,
         text: text,
         noteProvider: "quill",
      })
      .then(() => {
          console.log("Document successfully written!");
      })
      .catch((error) => {
          console.error("Error writing document:", error);
      });

 }
 
const slideEvernoteFunction = (e) =>{
  setSlideEvernote(previous=>!previous)
  setSlideOneNote(false)
  e.preventDefault()
  }

const slideOneNoteFunction = (e) =>{
  setSlideOneNote(!slideOneNote)
  setSlideEvernote(false)
  e.preventDefault()
  
  }

const postNewSubTopic = () =>{
  database.collection("Topics").doc(topic).set({
    [subTopic] : [subSubTopic]
 }, { merge: true })
 .then(() => {
     console.log("Document successfully written!");
 })
 .catch((error) => {
     console.error("Error writing document:", error);
 });
}

const postNewSubSubTopic = () =>{
  database.collection("Topics").doc(topic).set({
    [subTopic] : [subSubTopic]
 }, { merge: true })
 .then(() => {
     console.log("Document successfully written!");
 })
 .catch((error) => {
     console.error("Error writing document:", error);
 });
}

const handleSubmitNoteLink = async (e) => {
  const object = {
    topic: topic,
    subTopic: subTopic,
    subSubTopic: subSubTopic,
    name: noteName, 
    link: noteLink,
    email: currentUser.email,
    noteProvider: (
    slideEvernote? "evernote" : //if 
    slideOneNote? "onenote" : // else if 
    "quill" // else 
    )}
  e.preventDefault()
  await validation().then(()=>{
    if (topicError.get() || subTopicError.get() ||subSubTopicError.get() || noteNameError.get()){
      return null
    } else {
      if(quill) {postQuillNotesDatabase()} else {postNotesDatabase(object)}
       if (!subTopics.includes(subTopic)){postNewSubTopic()}
       if (!subSubTopics.includes(subSubTopic)){postNewSubSubTopic()}
    }
  })
  

  
 }


function handleSubTopics(){
  stateObjectTopics.forEach(element=>{
    if (element["name"]==topic){
    let finalSubTopics = Object.keys(element).filter((subTopic)=> subTopic!="name"&&subTopic!="color")
    setSubTopics(finalSubTopics)
  } 
  })
  if (subTopics==[]){setSubTopics([])}
    }


function handleSubSubTopics(){
    stateObjectTopics.forEach((element)=>{
      if (element["name"]==topic){
        console.log(element[subTopic])
        setSubSubTopics(element[subTopic])}
    })
    if (subSubTopics==[]){setSubSubTopics([])}

  }
    

  useEffect(()=>{
    handleSubTopics()
  },[topic])

  useEffect(()=>{
    handleSubSubTopics()
  }, [subTopic])

  useEffect(()=>{
    setTopic("")
    setSubTopic("") 
    setSubSubTopic("")
    setNoteName("")
  }, [successUpload])



  //Popover
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


    return (
      <>

          <Flex>
          <form onSubmit={handleSubmitNoteLink} className={`${Container}`}>
            <h2>Add Notes:
            <Info type="button" aria-describedby={id} onClick={handleClick}>
      <FontAwesomeIcon icon={faInfoCircle}/>

      </Info>
      <Popover
      classes={{
        paper: classes.paper,
      }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>
          If you use Evernote or OneNote there is a possibility to share you note as a link with only read option so nobody will be able to change the contents of it. Check out the share options of any note if you use Evenote or OneNote, you will surely find it there.
        </Typography>
      </Popover>
            </h2>
          <div className={`${InputContainer}`}>

            <FreeSoloCreateOption 
                setError={topicError.set}
                error={topicError.get()}
                value={topic}
                setValue={setTopic}
                label={topicError.get()? "Topic: Please fill in the input":"1. Topic" }
                options={stateTopicsNames}
                noOption={true}>
            </FreeSoloCreateOption>

            <FreeSoloCreateOption 
                disabled={topic? false:true}
                setError={subTopicError.set}
                error={subTopicError.get()}
                value={subTopic}
                setValue={setSubTopic}
                label={subTopicError.get()?"SubTopic: Please fill in the input":"2. SubTopic"} 
                options={subTopics}>
            </FreeSoloCreateOption>

            <FreeSoloCreateOption 
                disabled={subTopic? false:true}
                setError={subSubTopicError.set}
                error={subSubTopicError.get()}
                value={subSubTopic}
                setValue={setSubSubTopic}
                label={subSubTopicError.get()?"SubSubTopic: Please fill in the input":"3. SubSubTopic"} 
                options={subSubTopics}>
            </FreeSoloCreateOption>
            
            
            <InputMUI type="text" error={noteNameError.get()} setError={noteNameError.set}  value={noteName} setValue={setNoteName} label="Note Name"></InputMUI>
          </div>
            {quill?
            <div id="quillPreview" >{parse(text)}</div>
            :
            <>
            <div className={ButtonContainer}>
              <button className={`${ButtonIcon} evernote ${slideEvernote? "shadow":null}`} onClick={slideEvernoteFunction} ><FaEvernote></FaEvernote></button>
              <button className={`${ButtonIcon} oneNote ${slideOneNote? "shadow":null}`} onClick={slideOneNoteFunction} ><img src={oneNote}></img></button>
              
      
            </div>
            <InputMUI value={noteLink} setValue={setNoteLink} disabled={!(slideEvernote||slideOneNote)} label="Type the link of the mote"></InputMUI></>}

            <Button bigger={true}  fill={true} textColor="white" color="#3E57FF" type="submit" text="Submit Note"></Button>
            <TransitionAlert fixed={true} text={successUpload} severity="success" value={successUpload} setValue={setSuccessUpload}></TransitionAlert>

            </form>
          </Flex>
          </>
    )
}

export default InputPage





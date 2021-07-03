import React, {useEffect, useState, useRef} from 'react'
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components"
import {database} from "../../firebase/config"
import {useAuth} from "../../firebase/contexts/AuthContext"
import FoldedTemplate from '../GeneralUse/FoldedTemplate';
import {useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';

const Container=styled.div`
display:flex;
justify-content: flex-start;
align-items: center;
margin-top: 30px;
margin-left: 30px;


>h2{
    color: #565656;
    margin-left: 30px;
}
`

const SVG = styled.svg`
@media (orientation: portrait){
        width:15vw;
        height: 15vw;

      }
      @media (orientation: landscape){
        width:5vw;
        height: 5vw;
      }

      @media (orientation: landscape) and (max-height: 550px){
        width:10vw;
        height: 10vw;
      }

      @media (orientation: portrait) and (min-height: 900px){
        width:8vw;
        height: 8vw;
      }
      
      `





const MyProfile = () => {

const {currentUser} = useAuth()
const notesNames=[]
const links = []
const quill = []
const content=[]
const [noteState, setNoteState] = useState([])
const [linkState, setLinkState] = useState([])
const [quillState, setQuillState] = useState([])



useEffect(()=>{database.collection("notes").where("email", "==", currentUser.email)
.get()
.then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        if (doc.data().name) {notesNames.push(doc.data().name)}
        if (doc.data().link) {links.push(doc.data().link)}
        if (doc.data().text) {quill.push(`/${doc.data().topic}/${doc.data().subTopic}/${doc.data().subSubTopic}/${doc.data().name}/`)}
    });
    setNoteState(notesNames)
    console.log(notesNames)
    setLinkState(links)
    console.log(links)
    setQuillState(quill)
    console.log(quill)
})
.catch((error) => {
    console.log("Error getting documents: ", error);
});}, [])


for ( let link of linkState){
    noteState.map(element=>content.push(<a href={link}><FoldedTemplate color="#5D5FEF"
    text={element}></FoldedTemplate></a>))
}

for ( let quill of quillState){
    noteState.map(element=>content.push(<Link to={quill}><FoldedTemplate color="#5D5FEF"
    text={element}></FoldedTemplate></Link>))
}
    return (
        <>
            <Container><SVG><FontAwesomeIcon color="#565656" icon={faUserCircle}/></SVG><h2>Hi, there</h2></Container>
            {content.legth!==0? 
            content
            : 
            <div style={{position: "fixed", top: 0, display: "flex", height: "100vh", width: "100vw",flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
            <p style={{marginBottom: "20px", textAlign: "center"}}>Here will be displayed all the notes you have uploaded</p>
            </div>}
        </>
    )
}

export default MyProfile

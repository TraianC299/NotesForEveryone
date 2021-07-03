import React, {useState, useRef} from "react";
import { css } from "@emotion/css";
import { NavLink, useHistory } from "react-router-dom";
import Button from "./Button";
import {useAuth} from "../../firebase/contexts/AuthContext"
import {faUserCircle, faAlignCenter, faHome, faPlus, faSearch, faLink, faPen } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useTopicDetailsContext} from "../../firebase/contexts/TopicDetailsContext"
import logo from "../../Images/logo.svg"
//Utility functions
const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const toggleState = (setState) =>{
  setState(previous=>!previous)
}
//Non-state variables
//Styles
const easeSlow = css`
  transition: all 450ms ease-in-out;
`

const menuBtn = css`
  position: fixed;
  z-index: 3;
  right: 35px;
  bottom: 35px;
  cursor: pointer;
  ${easeSlow};
  &.closer {
    transform: rotate(180deg);
  }
`

const btnLine = css`
  width: 28px;
  height: 4px;
  margin: 0 0 5px 0;
  background-color: white;
  ${easeSlow};
  &.closer {
    background-color: #565656;  
    &:nth-child(1) {
      transform: rotate(45deg) translate(4px, 0px);
      width: 20px;
    }
    &:nth-child(2) {
      transform: translateX(-8px);
    }
    &:nth-child(3) {
      transform: rotate(-45deg) translate(4px, 0px);
      width: 20px;
    }
  }
`

const menuOverlay = css`
  z-index: 2;
  position: fixed;
  top: 0;
  right: 0;
  background-color: #f2f1f7;
  height: 100vh;
  width: 70vw;
  transform: translateX(100%);
  transition: all 300ms ease-in-out;

  
  &.show {
    background-color: #f2f1f7;
    transform: translateX(0%); 
    backdrop-filter: blur(200px);
  }
  nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 3rem;
    padding-top: 100px;

    a {
      z-index: 10;
      height: 30px;
      font-size: 2.2rem;
      text-decoration: none;
      color: #3E51FF;
      cursor: pointer;
      transition: all 150ms ease-in-out;
      margin-bottom: 20px;

      &:hover {
        color: black;
      } 
    }
  }
  @media (orientation: landscape) and (min-width: 768px){
    width: 25vw;
  }

  @media (orientation: portrait) and (min-width: 768px){
    width: 30vw;
  }

  @media (orientation: landscape) and (max-height: 500px){
    width: 50vw;
    nav {
    padding: 3rem;
    padding-top: 30px;}
  }
`



const Line = css`
width: 100%;
height: 3px;
background: black;
margin: auto;
border-radius: 50px;
`

const ButtonHolder = css`
margin-top: 20px;
align-self: center;


>a{
  margin-left: inherit !important;
}
`

const style = {
  marginRight: "15px"
}


function Menu () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openTopics, setOpenTopics] = useState(false)  
  const [openAddNotesOptions, setOpenAddOptions] = useState(false)
  

  const history = useHistory()
  const background = useRef()
  
  const {stateTopicsNames}=useTopicDetailsContext()
  const {currentUser, logOut} = useAuth()
  

  //State-chnaging functions managing menu functionality

  
const Background = css`
    position: fixed;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    background-color: transparent;
    opacity: 1;
    //attentive at the property below
    pointer-events: ${isMenuOpen? "auto": "none"};
    transition: all 0.5s ease-out;
      &.black{
      background-color: #000;
      opacity: 0.5;}
`

  const toggleBack = ()=>{
    if (isMenuOpen && openTopics){
      setOpenTopics(false)
    }
    
    else if (isMenuOpen && openAddNotesOptions){
      setOpenAddOptions(false)
    } else {toggleState(setIsMenuOpen)}
  }

  const closeAll = () =>{
    setOpenTopics(false)
    setIsMenuOpen(false)
    setOpenAddOptions(false)
  }
  let homeLinks=[]


//function that handles log out
  const handleLogOut=async ()=>{
    try{
        await logOut()
        history.push("/")
        closeAll()
    }catch{console.log("Failed to Log out")}
  }

//Extracting Topic Names from server
stateTopicsNames.forEach(element=>{
  homeLinks.push(<NavLink onClick={closeAll} to={`/${element}`}>{capitalize(element)}</NavLink>)
})
    
    return (
      <React.Fragment>
      {/* Dark Bckgrounf */}
      <div onClick={closeAll} ref={background} className={`${Background} ${isMenuOpen ? "black" : null}`}></div>
      {/* MenuButton */}
        <div className={`${menuBtn} ${isMenuOpen ? "closer" : null}`} onClick={toggleBack}>
          <div className={`${btnLine} ${isMenuOpen ? "closer" : null}`} />
          <div className={`${btnLine} ${isMenuOpen ? "closer" : null}`} />
          <div className={`${btnLine} ${isMenuOpen ? "closer" : null}`} />
        </div>

        {/* The actual menu */}
        <div  className={`${menuOverlay} ${isMenuOpen ? "show" : null}`}>
          <nav>

            <NavLink  onClick = {()=>toggleState(setIsMenuOpen)} to="/"><FontAwesomeIcon style={style} icon={faHome}/>Home</NavLink>
            <a onClick={()=>toggleState(setOpenTopics)}>
              <FontAwesomeIcon style={style} icon={faAlignCenter}/>Topics
            </a>
            
            <a onClick={()=>toggleState(setOpenAddOptions)}>
              <FontAwesomeIcon style={style} icon={faPlus}/>Add Notes
            </a>

            <NavLink onClick={()=>toggleState(setIsMenuOpen)} to="/search">
              <FontAwesomeIcon style={style} icon={faSearch}/>Search
            </NavLink>
            
            <NavLink onClick={closeAll} to="/myProfile">
              <FontAwesomeIcon style={style} icon={faUserCircle}/>My Profile
            </NavLink>

            <div className={`${Line}`}></div>
           
            {/* Buttons at the bottom of Menu */}
            <div className={`${ButtonHolder}`}>
            {!currentUser?
            <>
            <NavLink to="/signUp">
              <Button onClick={closeAll} text="Sign up" textColor="white" fill="true" color="#3E51FF"></Button>
            </NavLink>

            <NavLink to="/logIn">
              <Button onClick={closeAll} text="Log In"  color="#3E51FF"></Button>
            </NavLink>
            </>
            :
            <Button  onClick={handleLogOut} text="Log Out" color="#3E51FF"></Button>}
          </div>

          </nav>
        </div>


        {/* below are the sublinks */}
              {/* Topic Links */}
            <div className={`${menuOverlay} ${openTopics ? "show" : null}`}>
              <nav>
                {homeLinks}
              </nav>
            </div>

                {/* Add Notes Options */}
            <div className={`${menuOverlay} ${openAddNotesOptions ? "show" : null}`}>
              <nav>
              <NavLink onClick={closeAll} to="/uploadNotesLink"><FontAwesomeIcon style={style} icon={faLink}/>Link Upload</NavLink>             
              <NavLink onClick={closeAll} to="/uploadNotesQuill"><FontAwesomeIcon style={style} icon={faPen}/>Direct Upload</NavLink>
              </nav>
            </div>
            
      </React.Fragment>
    );
  
}

export default Menu;

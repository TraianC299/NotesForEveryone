import React, {useState, useRef} from "react";
import { css } from "@emotion/css";
import { NavLink, useHistory } from "react-router-dom";
import Button from "./Button";
import {useAuth} from "../../firebase/contexts/AuthContext"

const easeSlow = css`
  transition: all 450ms ease-in-out;
`;

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
`;

const btnLine = css`
  width: 28px;
  height: 4px;
  margin: 0 0 5px 0;
  background-color: #f2f1f7;
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
`;

const menuOverlay = css`
  z-index: 2;
  position: fixed;
  top: 0;
  right: 0;
  background-color: #f2f1f7;
  height: 100vh;
  width: 40vw;
  transform: translateX(100%);
  transition: all 300ms ease-in-out;
  
  &.show {
    background-color: #f2f1f7;
    transform: translateX(0%); 
    backdrop-filter: blur(200px);
  }
  nav {
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    a {
      z-index: 10;
      height: 30px;
      font-size: 2.2rem;
      text-decoration: none;
      color: #565656;
      cursor: pointer;
      transition: all 150ms ease-in-out;
      margin-bottom: 20px;
      margin-left: 3rem;

      @media (min-width: 768px){
        margin-left: 6rem;
      }
      &:hover {
        color: #18CE77;
      } 
    }
  }
  @media (max-width: 800px) {
    width: 70vw;
  }
`;

const Background = css`
    position: fixed;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    background-color: transparent;
    opacity: 1;
    //attentive at the property below
    pointer-events: none;
    transition: all 0.5s ease-out;
      &.black{
      background-color: #000;
      opacity: 0.5;
      }`

const Line = css`
width: 80%;
height: 3px;
background: #565656;
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


function Menu () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openTopics, setOpenTopics] = useState(false)  
  const [openAboutUs, setOpenAboutUs] = useState(false)
  const history = useHistory()
  const [error, setError] = useState("")

  const {currentUser, logOut} = useAuth()

  const background = useRef()

  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleTopics = () =>{
    setOpenTopics(!openTopics)
  }

  const toggleAboutUs = () =>{
    setOpenAboutUs(!openAboutUs)
  }

  const toggleBack = ()=>{
    if (isMenuOpen && openTopics){
      setOpenTopics(false)
    }

    else if (isMenuOpen && openAboutUs){
      setOpenAboutUs(false)
    } else {toggleMenu()}
  }

  const closeAll = () =>{
    setOpenAboutUs(false)
    setOpenTopics(false)
    setIsMenuOpen(false)
  }

  
  const handleLogOut=async ()=>{
    setError("")
    try{
        await logOut()
        history.push("/")
        closeAll()
    }catch{setError("Failed to Log out")}
}
  
    
    return (
      <React.Fragment>
      <div onClick={closeAll} ref={background} className={`${Background} ${isMenuOpen ? "black" : null}`}></div>
        <div
          className={`${menuBtn} ${isMenuOpen ? "closer" : null}`}
          onClick={toggleBack}
        >
          <div className={`${btnLine} ${isMenuOpen ? "closer" : null}`} />
          <div className={`${btnLine} ${isMenuOpen ? "closer" : null}`} />
          <div className={`${btnLine} ${isMenuOpen ? "closer" : null}`} />
        </div>
        <div  className={`${menuOverlay} ${isMenuOpen ? "show" : null}`}>
          <nav>
            <a onClick={toggleTopics} >Home</a>
            <NavLink onClick={toggleMenu}to="/uploadNotes">Add Notes</NavLink>
            <a onClick={toggleAboutUs}to="/">About Us</a><div className={`${Line}`}></div>
          <div className={`${ButtonHolder}`}>
            {!currentUser?
            (<><NavLink to="/signUp">
              <Button onClick={closeAll} text="Sign up" textColor="white" fill="true" color="#565656"></Button>
            </NavLink>
            <NavLink to="/logIn">
              <Button onClick={closeAll} text="Log In"  color="#565656"></Button>
            </NavLink></>)
            :
            <Button onClick={handleLogOut} text="Log Out"></Button>}
          </div>
          </nav>
        </div>
        {/* below are the sublinks */}
            <div className={`${menuOverlay} ${openTopics ? "show" : null}`}>
              <nav>
                <NavLink onClick={closeAll} to="/">ttttt</NavLink>
                <NavLink onClick={closeAll} to="/">ttttttt</NavLink>
                <NavLink onClick={closeAll} to="/">tttttttttt</NavLink>
              </nav>
            </div>
            <div className={`${menuOverlay} ${openAboutUs ? "show" : null}`}>
              <nav>
                <NavLink onClick={closeAll}to="/uploadNotes">ddd</NavLink>
                <NavLink onClick={closeAll}to="/">dddd</NavLink>
                <NavLink onClick={closeAll}to="/">dddd</NavLink>
              </nav>
            </div>
      </React.Fragment>
    );
  
}

export default Menu;

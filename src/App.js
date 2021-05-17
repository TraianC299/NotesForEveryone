import './App.css';
import TopicContainer from "./Components/GeneralUse/TopicContainer"
import {BrowserRouter as Router, Switch, Route, useLocation} from "react-router-dom"
import Home from "./Components/PageComponents/Home"
import {useState} from "react"
import InputPage from './Components/PageComponents/InputPage';
import styled from "styled-components"
import Programming from './Components/PageComponents/TopicPages.js/Programming/Programming';
import Business from './Components/PageComponents/TopicPages.js/Business/Business';
import Economics from './Components/PageComponents/TopicPages.js/Economics/Economics';
import Philosophy from './Components/PageComponents/TopicPages.js/Philosophy/Philosophy';
import Menu from './Components/GeneralUse/Menu';
import PrivateRoute from "./Components/GeneralUse/PrivateRoute"
import {useAuth} from "./firebase/contexts/AuthContext"
import {AuthProvider} from "./firebase/contexts/AuthContext"
import LogIn from './Components/GeneralUse/LogIn';
import SignUp from './Components/GeneralUse/SignUp';
import Quill from './Components/PageComponents/Quill';


function App() {
  let Space=styled.div`
    width: 66px;
    height: 66px;
    border-radius: 50%;
    position: fixed;
    background: #565656;
    right: 16px;
    bottom: 17px;
    z-index: 2;
    box-shadow: 0px 4px 20px 10px rgba(0, 0, 0, 0.1);
    
    @media (min-width: 768px) {
        

      }

      @media (min-width: 768px) and (max-width: 1024px){
        
      }`


  return (
    <><Space></Space>
    <AuthProvider>
      <Route  path="/" exact component={Home}></Route>
      <Route path="/programming" component={Programming}></Route>
      <Route path="/business" component={Business}></Route>
      <Route path="/economics" component={Economics}></Route>
      <Route path="/philosophy" component={Philosophy}></Route>
      <PrivateRoute exact path="/uploadNotes" component={InputPage}></PrivateRoute>
      <PrivateRoute  path ="/uploadNotes/quill" exact component={Quill}></PrivateRoute>
      <Route path="/logIn" component={LogIn}></Route>
      <Route path="/signUp" component={SignUp}></Route>
    </AuthProvider>
      <Menu></Menu>
      
    </>
  );
}

export default App;

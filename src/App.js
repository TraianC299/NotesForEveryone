import './App.css';
import {BrowserRouter as Router, Switch, Route, useLocation} from "react-router-dom"
import Home from "./Components/PageComponents/Home"
import InputPage from './Components/PageComponents/InputPage';
import styled from "styled-components"
import SubTopics from "./Components/GeneralUse/SubTopics"
import Menu from './Components/GeneralUse/Menu';
import PrivateRoute from "./Components/GeneralUse/PrivateRoute"
import {useAuth} from "./firebase/contexts/AuthContext"
import {AuthProvider} from "./firebase/contexts/AuthContext"
import LogIn from './Components/GeneralUse/LogIn';
import SignUp from './Components/GeneralUse/SignUp';
import Quill from './Components/PageComponents/Quill';
import {programming, economics} from "./Components/GeneralUse/topics"
import SubSubTopics from './Components/GeneralUse/SubSubTopics';
import useDatabase from "./firebase/hooks/useDatabase"
import Notes from './Components/GeneralUse/Notes';
import RouteTopic from "./Components/GeneralUse/RouteTopic"


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
      <Switch>
      <Route  path="/" exact component={Home}></Route>
      
      {RouteTopic({path:"programming", topic: programming, color: "#B1BEFF"})}
        
        {RouteTopic({path:"economics", topic: economics, color: "#B1DAFF"})}

        


      <PrivateRoute exact path="/uploadNotes" component={InputPage}></PrivateRoute>
      <PrivateRoute  path ="/uploadNotes/quill" exact component={Quill}></PrivateRoute>
      <Route path="/logIn" component={LogIn}></Route>
      <Route path="/signUp" component={SignUp}></Route>
      </Switch>
    </AuthProvider>
      <Menu></Menu>
      
    </>
  );
}

export default App;

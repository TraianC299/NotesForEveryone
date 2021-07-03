import './App.css';
import { Switch, Route} from "react-router-dom"
import Home from "./Components/PageComponents/Home"
import InputPage from './Components/PageComponents/InputPage';
import styled from "styled-components"
import Menu from './Components/GeneralUse/Menu';
import PrivateRoute from "./Components/GeneralUse/PrivateRoute"
import {AuthProvider} from "./firebase/contexts/AuthContext"
import LogIn from './Components/GeneralUse/LogIn';
import SignUp from './Components/GeneralUse/SignUp';
import Quill from './Components/PageComponents/Quill';
import RouteTopic from "./Components/GeneralUse/RouteTopic"
import Search from './Components/PageComponents/Search';
import MyProfile from './Components/PageComponents/MyProfile';
import {database} from "./firebase/config"
import { useEffect, useState } from 'react';
import NoteQuill from './Components/GeneralUse/NoteQuill';
import {useTopicDetailsContext} from "./firebase/contexts/TopicDetailsContext"
import NotFound from './Components/PageComponents/NotFound';

let Space=styled.div`
    width: 66px;
    height: 66px;
    border-radius: 50%;
    position: fixed;
    right: 16px;
    bottom: 17px;
    z-index: 2;
    background: #3E51FF;

    :before{
      filter: blur(10px);
    }
    
    @media (min-width: 768px) {
        

      }

      @media (min-width: 768px) and (max-width: 1024px){
        
      }
`

function App() {
  
const [docs, setDocs] = useState([])
const {stateObjectTopics} = useTopicDetailsContext()
stateObjectTopics.forEach(element=>{
})
useEffect(()=>{
  database.collection("notes")
  .where("noteProvider", "==", "quill")
  .onSnapshot((snap)=>{
    let documents=[]
      //this snap is the collection at a moment in time, it is an array of documents, you can use the forEach function on it and store the documents inside the docimets variable
      snap.forEach(doc=>{
          documents.push({
            topic: doc.data().topic, 
            subTopic: doc.data().subTopic, 
            subSubTopic: doc.data().subSubTopic, 
            name: doc.data().name, 
            text: doc.data().text})
      })
      setDocs(documents)
  })
}, [])


let content=[]
let topicRoutes = []

stateObjectTopics.forEach(element=>{
  topicRoutes.push(RouteTopic({path: element.name, topic: element, color: element.color}))
})

docs.map(doc=>content.push({path:`${doc.topic}/${doc.subTopic}/${doc.subSubTopic}/${doc.name}`, text: doc.text, name: doc.name}))
  return (
    <><Space></Space>
    <AuthProvider>
      <Switch>
      <Route  path="/" exact component={Home}></Route>

      {topicRoutes}
      <Route exact path="/search" >
        <Search noteNames={content}></Search>
      </Route>
      <PrivateRoute path="/myProfile" component={MyProfile}></PrivateRoute>
      <PrivateRoute exact path="/uploadNotesLink" component={InputPage}>
      </PrivateRoute>
      <PrivateRoute exact path="/uploadNotesQuill" component={Quill}></PrivateRoute>
      <PrivateRoute exact path="/uploadNotesQuill/submit" 
      ><InputPage quill={true}></InputPage></PrivateRoute>
      <Route path="/logIn" component={LogIn}></Route>
      <Route path="/signUp" component={SignUp}></Route>
      {content.map(object=><Route path={`/${object.path}`}><NoteQuill path={object.path} name={object.name} text={object.text}></NoteQuill></Route>)}
      <Route component={NotFound}></Route>
      </Switch>
    </AuthProvider>
      <Menu></Menu>
      
    </>
  )
}

export default App;

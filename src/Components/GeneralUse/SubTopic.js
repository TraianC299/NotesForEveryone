import React from 'react'
import { NavLink, Route, useHistory } from 'react-router-dom'
import styled from "styled-components"
import FoldedTemplate from './FoldedTemplate'
import Notes from './Notes'
import SubSubTopics from "./SubSubTopics"

const SubTopic = ({topic, name, color, path}) => {
    
  
    return (
        <>
         
        
            <NavLink to={`${path}/${name}`}>
            <FoldedTemplate type="SubTopic" color={color} text={name}></FoldedTemplate>

            </NavLink>
        
        </>
    )
}

export default SubTopic

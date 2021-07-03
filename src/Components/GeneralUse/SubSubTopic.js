import React from 'react'
import {NavLink, useHistory} from "react-router-dom"
import FoldedTemplate from './FoldedTemplate'

const SubSubTopic = ({name, color}) => {

    const location = useHistory()
    return (
        <>
        
        <NavLink to={`${location.location.pathname}/${name}`}>
            <FoldedTemplate type="SubSubTopic" text={name} color={color}></FoldedTemplate>
        </NavLink>

        </>
    )
}

export default SubSubTopic

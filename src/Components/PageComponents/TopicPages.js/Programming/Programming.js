import React, {useContext} from 'react'
import Category from '../../../GeneralUse/Category'
import { faCode, faDatabase } from "@fortawesome/free-solid-svg-icons";
import {Route} from "react-router-dom"
import {ProgrammingSubTopics} from "../../../GeneralUse/SubTopics"

const Programming = () => {
    const color="#7DF481"
    return (
        <div>
            <Route path="/programming/javascript" component={ProgrammingSubTopics}></Route>
            <Category link="/programming/javascript" color={color} text="Web Development" icon={faCode}></Category>
            <Category link="/programming/javascript" color={color} text="Data Science" icon={faDatabase}></Category>
        </div>
    )
}

export default Programming

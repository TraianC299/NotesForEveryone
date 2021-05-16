import React from 'react'
import SubTopicsTemplate from "./SubTopicsTemplate"

const ProgrammingSubTopics = () => {
    const color1="#7DF481"
    return (
        <div>
            <SubTopicsTemplate color={color1} list={["JavaScript", "HTML", "CSS"]}></SubTopicsTemplate>
        </div>
    )
}

const EconomicsSubTopics = () => {
    const color2="#7DF481"
    return (
        <div>
            <SubTopicsTemplate color={color2} list={"History Of Economics"}></SubTopicsTemplate>
        </div>
    )
}


const PhilosophySubTopics = () => {
    const color3="#7DF481"
    return (
        <div>
            <SubTopicsTemplate color={color3} list={"History Of Economics"}></SubTopicsTemplate>
        </div>
    )
}

const BusinessSubTopics = () => {
    const color4="#7DF481"
    return (
        <div>
            <SubTopicsTemplate color={color4} list={"History Of Economics"}></SubTopicsTemplate>
        </div>
    )
}

export {ProgrammingSubTopics, BusinessSubTopics, EconomicsSubTopics, PhilosophySubTopics}





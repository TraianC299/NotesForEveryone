import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import Button from "./Button"
import {NavLink} from "react-router-dom"
import einstein from "../../Images/einstein.png"


const TopicContainer = ({color, textColor, topic, route, child, text}) => {
    const Container = styled.div`
    width: 95%;
    margin: auto;
    border-radius: 20px;
    height: 66vh;
    background: ${color};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 13% 0px;
    position: relative;
    overflow: hidden;

    >h2{
        color: ${textColor}
    }

    @media (min-width: 768px){
        padding: 9% 0px;
        border-radius: 0;
        width: 100%;
        padding-right: 100px;
        align-items: flex-end;
      }
    `

    const P = styled.p`
    max-width: 400px;
    font-size: 2rem;
    text-align: right;
    color: ${textColor};`
   
    const [width, setWidth] = useState()
    useEffect(()=>{
        setWidth(window.innerWidth)
    },[])

   

    return (
        <Container>
            {child}
            <h2>{topic}</h2>
            {width>760?<P>{text}</P>:null}
            <NavLink to={route}>
                {width<800?
                <Button text="See more" textColor= {topic!=="Physics"?textColor:"#565656"} color={topic!=="Physics"?color:"white"} fill={true}></Button>
                :
                <Button text="See more" textColor= {textColor} color={textColor} ></Button>}
                </NavLink>
        </Container>
    )
}

export default TopicContainer

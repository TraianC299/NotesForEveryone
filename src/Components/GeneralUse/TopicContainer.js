import React from 'react'
import styled from "styled-components"
import Button from "./Button"
import {NavLink} from "react-router-dom"


const TopicContainer = ({color, textColor, topic, route, image}) => {
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
      }
    `

    const Photo = styled.div`
    width: 100%;
    height: 65%;
    background-image: url(${image});
    background-size: cover;
    position: absolute;
    bottom: 0;
    left: 0;
    `

    return (
        <Container>
            <h2>{topic}</h2>
            <Photo></Photo>
            <NavLink to={route}><Button text="See more" textColor= {textColor}color={color} fill={true}></Button></NavLink>
        </Container>
    )
}

export default TopicContainer

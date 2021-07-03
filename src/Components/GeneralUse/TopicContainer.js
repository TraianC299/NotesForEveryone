import { Link } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components"
import {shadeColor} from "./FoldedTemplate"

const TopicContainer = ({topic, color, image, route}) => {

const [width, setWidth] = useState(window.innerWidth)
function handleResize() {
    setWidth(window.innerWidth)
          }

useEffect(()=>{
    window.addEventListener("resize", handleResize)
},[])


const Container = styled.span`
position: relative;
margin-top: 20px;
border-radius: 10px;
overflow: hidden;


>svg{
    width: 360px;
    margin:auto;
    @media (orientation:portrait) and (max-width:508px){
        width: ${width*0.95}px;}
    
    @media (min-width: 850px) and (max-width:1100px){
        width: ${width*0.45}px;}
    }
>a{position: absolute;
    bottom: 80%;
    left: 10%;
    color: black;
    background: transparent;
    border-bottom: 4px solid white;
    padding: 3px;
    transition: all 0.3s ease;
}

>a>span>h2{
    font-size: 3rem;
    color: white;
    @media (min-width: 850px) and (max-width:1100px){
        font-size:3.5rem;}
}

>a:hover{
    transform: scale(1.1);
}

>img{
margin-bottom: 2px;
width: 80%;
position: absolute;
bottom: 0;
left: 0;
}
`



    return (

        <Container>
            <NavLink to={route}><span><h2>{topic}</h2></span></NavLink>
        <img src={image}></img>
    <svg  viewBox="0 0 375 563" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="1" width="375" height="562" fill={`#${shadeColor(color, -15)}`}/>
    <path d="M375 563L0 563L221.5 227.538L375 0L375 563Z" fill={color}/>
    </svg>
    </Container>

    )
}

export default TopicContainer

import React, {useEffect, useState} from 'react';
import parse from 'html-react-parser';
import styled from "styled-components"
import {useSpring, animated} from "react-spring"


const Container = styled.div`
>p>img{
    cursor: pointer;
}
padding: 0 2.5%;
margin: auto;
>p>img{
    height: 300px;
}
p>a>img{
    height: 300px;
}

>h1{
    font-size: 4rem;
}
`

const Header = styled.h2`
margin: 2rem 0;
`

const P = styled.p`
display: flex;
align-items: center;
width: 100%;
padding: 3.5% 2.5% ;
background: #3E51FF;
max-height: fit-content;
color: white;
@media (min-width: 768px){
padding: 2% 2.5% ;
}

`

function NoteQuill({path, name, text}) {
    const [showImage, setShowImage] = useState(false)
    const [src, setSrc] = useState("")
    const contentProps = useSpring({
        opacity: showImage ? 1 : 0,
        marginTop: showImage ? 0 : -500
    });
    
    const split=()=>{
         return path.split("/")
    }


    useEffect(()=>{
        const images = document.getElementsByTagName("img")
        for (let image of images){
            image.addEventListener("click", (e)=>{
                setShowImage(previous=>!previous)
                setSrc(previous=>e.currentTarget.src)})
        }
    },[])

    const details=split().reduce((accumulator, currentValue) =>accumulator+" > "+currentValue)
    return (
        <>
        <P>{details}</P>
        <Container>
        <animated.div className="animation" style={contentProps}>
            <h1 onClick={()=>{setShowImage(false)}}>×</h1>
            <img src={src}></img>
        </animated.div>
        <Header>{name}</Header>
        {parse(text)}
        </Container>
        </>
    );
}

export default NoteQuill;
import React, {useState } from 'react'
import styled from "styled-components"
import TopicContainer from "../GeneralUse/TopicContainer"
import camus from "../../Images/camus.png"
import einstein from "../../Images/einstein.png"
import mises from "../../Images/mises.png"
import linus from "../../Images/linus.png"
import logo from "../../Images/logo.svg"
import studyBig from "../../Images/studybig.png"
import jobs from "../../Images/SteveJobs.png"
import curie from "../../Images/Curie.png"



const Flex = styled.div`
    max-width: 95%;
    margin:auto;
    margin-top: 0px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
   >h1{
       color: #565656
   }
`


const SquareContainer=styled.div`
display:  grid;
width: 95%;
margin: 5vh auto;
grid-template-columns: repeat(3, 29.77777vw);
grid-template-rows: repeat(5, 30vw);
align-items: center;
grid-gap: 3vw;
margin-bottom: -63vw;


@media (min-width: 768px){
grid-template-columns: repeat(7, 12.28vw);
grid-template-rows: repeat(6, 12.28vw);
grid-gap: 1.5vw;
margin-bottom: -7vw;

    }

@media (min-width: 1080px){
grid-template-columns: repeat(13, 6.38vw);
grid-template-rows: repeat(6, 6.38vw);
grid-gap: 1vw;
margin-bottom: 5vh;

    }

@media (max-height: 450px) and (orientation: landscape){
grid-template-columns: repeat(7, 12.28vw);
grid-template-rows: repeat(3, 12.28vw);
grid-gap: 1vw;
margin-bottom: -5vw;

    }




>div{
    justify-self: center;
    display: inline-block;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
    border-radius: 5px;
}

>div:hover{
    transform: scale(0.9);
    box-shadow: inset 0px 10px 30px rgba(0, 0, 0, 0.3);

    

}

>img{
    justify-self: center;
    grid-column: 1 / 3;
    grid-row: 1 / 3;
    width: 90%;
    height: 90%;
}

>.hello{
    background: blue;
    grid-column: 2 / 4;
    grid-row: 4 / 6;
    padding: 5%;
    color: white;

    @media (min-width: 768px){
        grid-column: 5 / 8;
        grid-row: 4 / 7;
    }
    @media (min-width: 1080px){
        grid-column: 11 / 14;
    }


    >h3{
        font-weight: 300;
        margin-top: 10px;
    }
 
}

>.study{
    >img{
        width: 80%;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    background: blue;
    grid-column: 1 / 2;
    grid-row: 5 / 6;
    padding: 5%;
    color: white;

    @media (min-width: 768px){
        grid-column: 1 / 4;
        grid-row: 4 / 6;
    }
    @media (min-width: 1080px){
        grid-column: 2 / 5;

    }


    >h3{
        font-weight: 300;
        margin-top: 10px;
    }
 
}

div:nth-child(odd){
    background: #00D870;
}
div:nth-child(even){
    background: #3E57FF;
}
`



const Home = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const square= <div className="square"></div>
    return (
        <>     
        <SquareContainer>
        <img src={logo}></img>{square}{width>768?<div className="study"><img src={studyBig}></img></div>:null}
            {square}{square}{square}{square}{square}{square}{square}{square}{square}{square}
            {square}{square}{square}{square}{square}{square}{square}{square}{square}{square}{square}
            {square}{square}{square}{square}{square}{square}{square}{square}{square}{square}{square}
            {square}{square}
            
            {square}{square}{square}{square}{square}{square}{square}{square}{square}
            {square}{square}{square}{square}{square}{square}{square}{square}{square}{square}{square}
            {square}{square}{square}{square}{square}{square}{square}{square}{square}{square}{square}
            {square}{square}{square}{square}{square}{square}{square}{square}{square}{square}{square}
            {square}{square}{square}{square}{square}{square}{square}{square}{square}{square}{square}
            <div className="hello"><h2>Open Notes</h2><h3>Knowledge must be free, so lets make it free together</h3></div>
        </SquareContainer>
        <Flex><h1 >Topics:</h1></Flex>

        <Flex>
            <TopicContainer topic="Physics" color="#00D870" route="/Physics"
                image={einstein}>
            </TopicContainer>

            <TopicContainer topic="Economics" color="#57B8FF"  route="/Economics"
                image={mises}>
            </TopicContainer>

            <TopicContainer topic="Programming" color="#3E57FF" 
                image={linus} route="/programming">
            </TopicContainer>

            <TopicContainer topic="Philosophy" color="#F8CF3E" route="/Philosophy"
                image={camus}>
            </TopicContainer> 

            <TopicContainer topic="Business" color="#a0a0a9" route="/Business"
                image={jobs}>
            </TopicContainer> 
            <TopicContainer topic="Chemistry" color="#F5313C" route="/Chemistry"
                image={curie}>
            </TopicContainer> 
        </Flex>
        
        
        </>
    )
}

export default Home

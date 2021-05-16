import React from 'react'
import { FaEuroSign } from 'react-icons/fa'
import styled from "styled-components"
import TopicContainer from "../GeneralUse/TopicContainer"
import keynes from "../../Images/keynes.png"
import camus from "../../Images/camus.png"
import berners from "../../Images/TimBernersLee.png"
import einstein from "../../Images/einstein.png"
import mises from "../../Images/mises.png"
import linus from "../../Images/linus.png"

const Home = () => {
    const Grid = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-gap: 30px;

    @media (min-width: 768px){
    grid-template-columns: 100%;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-gap: 0px;
      }
    `

    const Img = styled.img`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    @media (min-width: 768px) {
        width: 30%;
      }
    `

    return (
        <Grid>
            <TopicContainer topic="Programming" color="#B1BEFF" textColor="#4542CD"      route="/programming" image={berners} 
                child={<Img src={linus}></Img>}
                text={`I often compare open source to science. To where science took this whole notion of developing ideas in the open and improving on other peoples' ideas and making it into what science is today and the incredible advances that we have had. And I compare that to witchcraft and alchemy, where openness was something you didn't do.`}>
            </TopicContainer>
            <TopicContainer topic="Physics" color="#5A5A5A" textColor="white" route="/business"
            child={<Img src={einstein}
            ></Img>}
            text={`Out yonder there was this huge world, which exists independently of us human beings and which stands before us like a great, eternal riddle, at least partially accessible to our inspection and thinking. The contemplation of this world beckoned like a liberation…`}>
            </TopicContainer>
            <TopicContainer topic="Economics" color="#B1DAFF" textColor="#0056A6" route="/economics"
            child={<Img src={mises}></Img>}
            text={`“It is vain to fight totalitarianism by adopting totalitarian methods. Freedom can only be won by men unconditionally committed to the principles of freedom. The first requisite for a better social order is the return to unrestricted freedom of thought and speech.”`}></TopicContainer>
            <TopicContainer topic="Philosophy" color="#DE9967" textColor="#662B00" route="/philosophy"
            child={<Img src={camus}
            ></Img>}
            text={`“In the midst of winter, I found there was, within me, an invincible summer.

            And that makes me happy. For it says that no matter how hard the world pushes against me, within me, there’s something stronger – something better, pushing right back.”`}></TopicContainer>
        </Grid>
    )
}

export default Home

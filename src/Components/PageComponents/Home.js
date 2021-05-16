import React from 'react'
import { FaEuroSign } from 'react-icons/fa'
import styled from "styled-components"
import TopicContainer from "../GeneralUse/TopicContainer"
import keynes from "../../Images/keynes.png"
import camus from "../../Images/camus.png"
import berners from "../../Images/TimBernersLee.png"
import einstein from "../../Images/einstein.png"
import mises from "../../Images/mises.png"

const Home = () => {
    const Grid = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-gap: 50px;

    @media (min-width: 768px){
    grid-template-columns: 50% 50%;
    grid-template-rows: 1fr 1fr;
    grid-gap: 0px;
      }
    `

    return (
        <Grid>
            <TopicContainer topic="Programming" color="#B1BEFF" textColor="#4542CD" route="/programming" image={berners}></TopicContainer>
            <TopicContainer topic="Physics" color="#5A5A5A" textColor="white" route="/business" image={einstein}></TopicContainer>
            <TopicContainer topic="Economics" color="#B1DAFF" textColor="#0056A6" route="/economics" image={mises}></TopicContainer>
            <TopicContainer topic="Philosophy" color="#DE9967" textColor="#662B00" route="/philosophy" image={camus}></TopicContainer>
        </Grid>
    )
}

export default Home

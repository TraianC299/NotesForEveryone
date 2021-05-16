import React from 'react'
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';




const Category = ({color, text, icon, link}) => {

    const Container=styled.div`
    width: 90vw;
    height: 50vw;
    background: ${color};
    border-radius: 20px;
    box-shadow: 
    12px 12px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
    padding: 3rem;
    color: white;
    position: relative;
    margin: 30px 18px;
    transition: all 0.3s ease-out;

    :hover{
        transform: scale(1.1)
    }

    @media (min-width: 768px) {
        padding: 2.5rem;
        width: 350px;
        height: 170px;
      }

      @media (min-width: 768px) and (max-width: 1024px) {
        margin: 30px 0px;
        width: 290px;
        height: 141px;
      }
    `
    const IMG = styled.img`
    height: 65%;
    width: 100px;
    position: absolute;
    top: 8.1vh;
    right: 7vw;
    color: black;


    @media (min-width: 768px) {
        height: 60%;
        top: 55px;
        right: 15px;
      }
    `

    const style = {
        width: "75px",
        height: "75px",
        position:"absolute",
        top: "11vh",
        right: "7vw",
        color: "white"
    }
    return (

        <div>
        <NavLink to={link}>
            <Container>
                <h2>{text}</h2>
                <FontAwesomeIcon style={style} icon={icon} />
            </Container>
        </NavLink>
        </div>
    )
}

export default Category

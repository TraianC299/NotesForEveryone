import React from 'react'
import styled from "styled-components"

export function shadeColor(color, percent) {

    var R = parseInt(color.substring(1,3),16);
    var G = parseInt(color.substring(3,5),16);
    var B = parseInt(color.substring(5,7),16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R<255)?R:255;  
    G = (G<255)?G:255;  
    B = (B<255)?B:255;  

    var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
    var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
    var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

    return RR+GG+BB;
}

const adapt = (input) =>{
     return `linear-gradient(135deg,  #${input} 50%, #ffffff 50%)`
}

const FoldedTemplate = ({type, color, text}) => {
    const Note = styled.span`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 12px;
    padding-right: 40px;
    height: fit-content;
    width: 90vw;
    position: relative;
    background: ${color};
    margin: auto;
    margin-top: 3vh;
    border-radius: 5px;
    
    @media (min-width: 768px){
    width: 40vw;}

    > .top{
        position: absolute;
        bottom: -0.9px;
        right: -1px;
        width: 30px;
        height: 30px;
        z-index: 0;
        background: linear-gradient(135deg,  transparent 50%,white 50%);
        
    }

    >.buttom{
        position: absolute;
        bottom: 0px;
        right: 0px;
        width: 30px;
        height: 30px;
        border-top-left-radius: 5px;
        background: ${adapt(shadeColor(color, -25))};
    }

    >h2{
        font-weight: 400;
        font-size: 3rem;
        color: white;
    }
    `

    const SubTopic = styled.div`
    display: flex;
    padding-bottom: 50px;
    flex-direction: column;
    align-items: flex-start;
    padding: 12px;
    padding-right: 25%;
    padding-bottom: 50px;
    height: fit-content;
    width: 90vw;
    position: relative;
    background: ${color};
    margin: auto;
    margin-top: 3vh;
    border-radius: 5px;
    @media (min-width: 768px){
    width: 40vw;}

    :before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    border-top: 25px solid ${`#${shadeColor(color, -25)}`};
    border-left: 25px solid transparent;
    width: 15%;
    border-top-right-radius: 5px;
    }   

    >div{
    position: absolute;
    top: 0;
    right: 0;
    border-top: 25px solid ${`#${shadeColor(color, -50)}`};
    border-left: 25px solid transparent;
    width: 10%;
    border-top-right-radius: 5px;

    @media (max-width: 768px){
        width: 15%;

    }
    }

    >h2{
        font-weight: 400;
        font-size: 3rem;
        color: white;
    }
    `
    return (
        <>
        {type=="SubTopic"?<SubTopic><h2>{text}</h2></SubTopic>:
        type=="SubSubTopic"?<SubTopic><div></div><h2>{text}</h2></SubTopic>:
        <Note><h2>{text}</h2><div className="top"></div><div className="buttom"></div></Note>
        }
        </>

    )
}



export default FoldedTemplate

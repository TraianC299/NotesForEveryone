import React from 'react'
import styled from 'styled-components'




const Button = ({text, color , borderColor, onClick, type, fill, textColor, bigger}) => {

    const Button = styled.button`
    position: relative;
    background: ${fill? color : "transparent"};
    color: ${fill? textColor: color};
    padding: 5px 20px;
    margin: 10px;
    border: 1.5px solid ${borderColor};
    border-radius: 30px;
    border-color: ${color};
    font-size: ${bigger? "2.5rem": "1.6rem"};
    outline: none;
    cursor: pointer;

    @media (min-width: 768px) and (max-width: 1100px){
        font-size: 2rem
      }
    `


    return (
        <Button type={type} onClick={onClick}>{text}</Button>
    )
}

export default Button

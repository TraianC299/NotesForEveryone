import React from 'react'
import styled from 'styled-components'




const Button = ({style, text, color , borderColor, onClick, type, fill, textColor, bigger, className}) => {

    const Button = styled.button`
    width: ${bigger? "80%":"auto"};
    height: ${bigger? "52px":"auto"};
    position: relative;
    background: ${fill? color : "transparent"};
    color: ${fill? textColor: color};
    padding: 5px 20px;
    border-radius: 3px;
    margin: 10px;
    border: 2px solid ${borderColor};
    border-color: ${color};
    font-size: ${bigger? "2.5rem": "1.6rem"};
    outline: none;
    cursor: pointer;

    @media (min-width: 768px) and (max-width: 1100px){
        font-size: 2rem
      }
    `
    
    return (
        <Button style={style} className={className} type={type} onClick={onClick}>{text}</Button>
    )
}

export default Button

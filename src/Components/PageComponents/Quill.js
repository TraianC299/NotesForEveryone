import ReactQuill from 'react-quill'; 
import React, {useState, useEffect} from 'react'
import 'react-quill/dist/quill.snow.css'; 
import { css } from "@emotion/css";

const Button = css`
    position: fixed;
    bottom: 20px;
    left: 20px;
    background: #565656;
    color: white;
    padding: 5px 20px;
    margin: 10px;
    border-radius: 30px;
    font-size: 1.6rem;
    outline: none;
    cursor: pointer;

    @media (min-width: 768px) and (max-width: 1100px){
        font-size: 2rem
      }`

const Quill = () => {
    const [text, setText] = useState("")
    
    const handleChange = (html) =>{
        setText(html)
        console.log(text)
    }

    return (
        <div>
            <ReactQuill theme="snow" value={text}
                  onChange={handleChange.bind(this)}/>
                  <button className={`${Button}`}>Upload</button>
        </div>
    )
}

export default Quill

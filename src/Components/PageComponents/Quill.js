import ReactQuill, {Quill} from 'react-quill'; 
import React, {useEffect, useMemo} from 'react'
import 'react-quill/dist/quill.snow.css'; 
import { useTopicDetailsContext } from '../../firebase/contexts/TopicDetailsContext';
import Button from '../GeneralUse/Button';
import { NavLink } from 'react-router-dom';


const Quilll = () => {
    const {text, setText} = useTopicDetailsContext()
    const handleChange = (html) =>{
        setText(html)  
    }
   
    let container = document.getElementsByClassName("ql-editor")[0]

    const handleImages = () =>{
    if (container) {
        let images = document.getElementsByTagName("img")
         for (let image of images ){
             if(image){
        fetch(image.src).then(response=>response.blob()).then(data=>{
         let reader = new FileReader();
         reader.readAsDataURL(data)
         reader.onloadend = function() {
             var base64data = reader.result;                
             image.src=base64data
         }
         })
     }}
}}
   

  


    const modules = useMemo(()=>({
        toolbar: {
            container: [
                [{'header': [3, 4, 5, 6, false]}],
                ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code'],
                [{color: []}, {background: []}],
                [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                ['link', 'image'],
                ['clean']
            ],
        
        
        },
    }), [])
    

      let formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'color', 'code'
      ]
      
      
    return (

        <div>
            <ReactQuill 
            theme="snow" 
            value={text}
            modules={modules}
            formats={formats}
            onChange={handleChange.bind(this)}/>
            <NavLink to="/uploadNotesQuill/submit">
                <Button onClick={handleImages} textColor="white" color="#3e57ff" fill={true} style={{position: "fixed", bottom:"20px", left:"20px"}} text="Next"></Button>
            </NavLink>

        </div>
    )
}

export default Quilll

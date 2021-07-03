import React, {useState, useEffect} from 'react'
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import styled from "styled-components"
import TextField from '@material-ui/core/TextField';
import FreeSoloCreateOption from "../GeneralUse/Autocomplete"
import { makeStyles } from '@material-ui/core/styles';
import {useTopicDetailsContext} from "../../firebase/contexts/TopicDetailsContext"
import  Button  from '../GeneralUse/Button';
import { Link } from 'react-router-dom';
import {Form} from "../GeneralUse/LogIn";
import {Flex} from "../PageComponents/InputPage"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


const PurpleRadio = withStyles({
  
  root: {
    height: "150%",
    color: "#3E51FF",
    '&$checked': {
      color: "#3E51FF",
    },

    "& .MuiSvgIcon-root":{
      fontSize: "2.5rem"
    },
    "> .MuiTypography-body1":{
      fontSize: "1.5rem",
    }
  },
  
  checked: {},
})((props) => <Radio color="default" {...props} />)
;

  
const Body = styled(Form)`
padding: 0;
>h2{
      display: flex;
      align-items: center;
      position: fixed;
      top: 0;
      color: black;
      height: 15%;
      width: 100%;
      padding-left: 10%;
      background: #3E57FF;
      color: white;
      margin-top: 0;
    }

    @media (orientation: landscape) , (min-width: 768px){
      padding: 7% 0 3% 0;

    >h2{
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      color: black;
      height: 20%;
      width: 100%;
      padding-left: 10%;
      background: #3E57FF;
      color: white;
      border-radius: 5px 5px 0 0;
    }
      }
`


const Container = styled.div`
width: 80%;
display: grid;
grid-template-columns: 1fr ;
justify-content: center;
align-items: center;
padding-left: 0;
`
const useStyles = makeStyles((theme) => ({
    root:{
        width: '80% !important',
        ' > *': {
          margin: theme.spacing(1),
          color: 'red',
        },

        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
          borderColor: "#565656"
        },
        "& .MuiOutlinedInput-notchedOutline":{
            borderColor:"rgba(0, 0, 0, 0.23)"
        }
      },
    }))

const Search = ({noteNames, TOPIC}) => {
    const classes = useStyles();
    const [choose, setChoose] = useState('Topic');
    const [path, setPath] = useState("")
    const [options, setOptions] = useState([])
    const [value, setValue] = useState("")

    const {stateObjectTopics} = useTopicDetailsContext()


    useEffect(()=>{
      if (choose=="Note Name"){
        setOptions(noteNames.map(element=>element.name))
      }

      else if (choose=="Topic"){
      let finalOptions = []
      stateObjectTopics.forEach(element=>{
        finalOptions.push(`${element.name} (T)`)
        for (let some of Object.keys(element)){
            if (some!="color"&&some!="name") {
              finalOptions.push(`${some} (sT)`)
              element[some].forEach(subSubTopic=>finalOptions.push(`${subSubTopic} (sST)`))
            }
        }}
        )
      setOptions(finalOptions)}
    }, [choose])

    useEffect(()=>{
      if (choose=="Note Name") {noteNames.forEach(element=>{
        if (element.name==value){
          setPath(previous=>element.path)
        }
      })}

      else if (choose=="Topic"){
          if (value.includes(" (T)")) {
            setPath(previous=>`/${value.replace(" (T)", "")}`)
          }

          else if (value.includes(" (sT)")) {
            stateObjectTopics.forEach(element=>{
              for (let subTopic of Object.keys(element)){
                if (subTopic==value.replace(" (sT)", "")){
                  setPath(previous=>`/${element.name}/${value.replace(" (sT)", "")}`)
                }
              }
            }
              )
          }

          else if (value.includes(" (sST)")) {
            stateObjectTopics.forEach(element=>{
              for (let subTopic of Object.keys(element)){
                if (subTopic!="name" && subTopic!="color"){
                for (let subSubTopic of element[subTopic]){
                  if (subSubTopic==value.replace(" (sST)", "")){
                    setPath(previous=>`/${element.name}/${subTopic}/${subSubTopic}`)
                  }
                }}
                }
              })
          }
              
          


      }
    },[value])

    


 
    const handleChange = (event) => {
      setChoose(event.target.value);
    };

    return (
      <Flex>
        <Body>
        <h2>Search for something</h2>

        <Container >

<FormControl component="fieldset">
      <FormLabel component="legend"></FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={choose} onChange={handleChange}>
        <FormControlLabel value="Topic" control={<PurpleRadio />} label="Topic" />
        <FormControlLabel value="Note Name" control={<PurpleRadio />} label="Note Name" />
      
      </RadioGroup>
    </FormControl>

        </Container>
        <FreeSoloCreateOption
        label="Options available"
        value={value}
        setValue={setValue}
        className={classes.root}
        id="combo-box-demo"
        options={options}
        getOptionLabel={(option) => option}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
    />
        <Link style={{textDecoration: "none", width: "100%", display: "flex", justifyContent:"center"}} to={path}><Button fill={true} color="rgb(62, 87, 255)" textColor="white" bigger={true} text="Search"></Button></Link>
        </Body>
        </Flex>
    )
}

export default Search

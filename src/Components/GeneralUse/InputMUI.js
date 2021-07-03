import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

 const useStyles = makeStyles((theme) => ({
    root:{
        width: '80%',

        ' > *': {
          margin: theme.spacing(1),
          color: 'red',
        },
        "& .MuiOutlinedInput-root":{
          borderRadius: 3,
        },

        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
          borderColor: "#3E57FF"
        },
        "& .MuiInputBase-input":{
          fontSize: "1.5rem",
          height: "auto"
        },
        "& .MuiFormLabel-root.Mui-focused":{
            color: "#3E57FF",
        },
        "& .MuiFormLabel-root":{
          fontSize: "150%",
        },

        "& .PrivateNotchedOutline-legendLabelled-4":{
          fontSize: "1.1em",
        }
        

      },

    
    }))

const InputMUI = ({value, setValue, label, type, error, setError, disabled, defaultValue}) => {
    
     function handleChange (e){
       e.preventDefault()
     if (setError){setError(false)}else {}
     if(typeof(e.target.value)==undefined){
         return null
     }else{
         setValue(e.target.value)
         }}

  
    const classes = useStyles();


    return (
        <>
            <TextField 
            defaultValue={defaultValue}
            error={error}
            value={value}
            disabled={disabled}
            onChange={handleChange} 
            className={classes.root} 
            id="outlined-basic" 
            type={type} 
            label={label} 
            variant="outlined" />
        </>
    )
}

export default InputMUI

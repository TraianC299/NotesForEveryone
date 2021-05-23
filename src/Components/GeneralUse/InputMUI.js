import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root:{
        width: '80%',
        ' > *': {
          margin: theme.spacing(1),
          color: 'red',
        },

        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
          borderColor: "#565656"
        }
      },

    
    }))

const InputMUI = ({value, setValue, label, type}) => {
    
  function handleChange (e){
    if(typeof(e.target.value)==undefined){
        return null
    }else{
      
        setValue(e.target.value)
        }}

    const classes = useStyles();
    return (
        <>
            <TextField 

            onChange={handleChange} 
            value={value}
            className={classes.root} 
            id="outlined-basic" 
            type={type} label={label} variant="outlined" />
        </>
    )
}

export default InputMUI

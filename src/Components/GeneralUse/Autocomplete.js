/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

const filter = createFilterOptions();

export default function FreeSoloCreateOption({disabled, options, label, value, setValue, error, setError, noOption}) {
const useStyles = makeStyles((theme) => ({
    root:{
      
        width: '80% !important',
        borderRadius: "0",
        ' > *': {
          margin: theme.spacing(1),
        },

        "& .MuiOutlinedInput-root":{
          borderRadius: 3,
        },

        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
          borderColor: "#3E57FF",
          borderRadius: "3px"

        },
        "& .MuiOutlinedInput-notchedOutline":{
            borderColor: error? "red":"rgba(0, 0, 0, 0.23)"
        },
        "& .MuiInputBase-input":{
          fontSize: "150%",
        },
        "& .MuiAutocomplete-endAdornment":{
          top: "auto",
          ">button":{height: "150%"}
        },

         "& .MuiSvgIcon-fontSizeSmall":{
           fontSize: "1.9rem",
         }, 

         "& .MuiFormLabel-root":{
           fontSize: "140%",
         },

         "& .PrivateNotchedOutline-legendLabelled-5":{
           fontSize: "1.1em",
         },
         "& .PrivateNotchedOutline-legendLabelled-15":{
          fontSize: "1.1em",
        },

      },
    }))
  const classes = useStyles();
  return (
    <Autocomplete
    clearOnEscape
      disabled={disabled}
      className={classes.root}
      value={value}
      onChange={(event, newValue) => {
        event.preventDefault()
        if (setError){setError(false)}
        if (typeof newValue === 'string') {
          setValue(newValue);
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue(newValue.inputValue);
        } else {
          setValue(newValue);
        }
      }}

      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        // Suggest the creation of a new value
        if (params.inputValue !== '' && !noOption) {
          filtered.push(params.inputValue);
        }
        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={options}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return noOption? null : (option.inputValue);
        }
        // Regular option
        return option;
      }}
      renderOption={(option) => option}
      style={{ color: "black", width: 300 }}
      freeSolo={!noOption}
      renderInput={(params) => (
        <TextField error={error} {...params} label={label} variant="outlined" />
      )}
    />
  );
}

/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import InputMUI from "./InputMUI"

const filter = createFilterOptions();

export default function FreeSoloCreateOption({options, label, value, setValue, error, onChange}) {

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
            borderColor: error? "red":"rgba(0, 0, 0, 0.23)"
        }
      },
    }))
  const classes = useStyles();
  

  return (
    <Autocomplete
    className={classes.root}
      value={value}
      onChange={(event, newValue) => {
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
        if (params.inputValue !== '') {
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
          return option.inputValue;
        }
        // Regular option
        return option;
      }}
      renderOption={(option) => option}
      style={{ color: "black", width: 300 }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
    />
  );
}

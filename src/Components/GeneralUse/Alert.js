import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';



export default function TransitionAlert({value, setValue, severity, text, fixed}) {
  
  const useStyles = makeStyles((theme) => ({
  root: {
    width: fixed?'100%':'80%',
    position: fixed?"fixed":"auto",
    top: 0,
  },
}));
const classes = useStyles();
  return (
    <div className={classes.root}>
      <Collapse in={value}>
        <Alert
        variant="filled"
        severity={severity}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setValue(false);
              }}
            >
              <h4 style={{weight: 300}}>×</h4>
            </IconButton>
          }
        >
          {text}
        </Alert>
      </Collapse>
    </div>
  );
}

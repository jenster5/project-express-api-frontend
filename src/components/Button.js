import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  button: {
    backgroundColor: 'yellow',
    color: 'black',
    '&:hover': {
      backgroundColor: 'olive'
    }
  }
});

const MyButton = () => {
  const classes = useStyles();
  return (
    <Button className={classes.button}>Submit</Button>
  )
}

export default MyButton;

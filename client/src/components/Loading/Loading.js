import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '40%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
	  position: "absolute",
	  left: "50%",
	  top: "50%", 
	  transform: "translate(-50%, -50%)"
  },
}));

export default function Loading() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
		<Typography align="center" variant="body1">Loading..</Typography>
      <LinearProgress />
    </div>
  );
}
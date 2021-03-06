import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
	navbar: {
	background: "teal",
}, 

}));

const Navbar = () =>  {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <LocalShippingIcon />
          </IconButton>   
			  <Typography variant="h6" className={classes.title}>
				  <Link to="/">
				Export Planning Tool
				 </Link>
			  </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;

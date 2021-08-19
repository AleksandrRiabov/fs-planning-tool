import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import SingleDay from './Pages/SingleDay/SingleDay';
import SingleWeek from "./Pages/SingleWeek/SingleWeek";
import Footer from "./components/Footer/Footer";
import Navbar from './components/Navbar/Navbar';
import PageNotFound from './components/PageNotFound/PageNotFound';

import moment from "moment";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
	container: {
		minHeight: "75vh"
	}
}));

function App() {
  const classes = useStyles();
  const currentWeek = moment().format("WW");

  return (
	  <Router>
    <div className="app">
      <Navbar />
        <Container className="main">
        <div className={classes.root}>
          <Grid className={classes.container} container spacing={3}>
			     <Grid item xs={12}>
           <Switch>
                <Route path="/week/:year/:number" render={({match}) => {
                  return <SingleWeek year={match.params.year} number={match.params.number}/>
                }} />
                <Route path="/day/:date"  render={({match}) => {
                  return <SingleDay date={match.params.date}/>
                }}/>
                <Route component={PageNotFound}/>
		      </Switch>	
             </Grid>	 
        </Grid>
      </div>      
      </Container>
      <Footer />
    </div>
		   </Router>
  );
}

export default App;

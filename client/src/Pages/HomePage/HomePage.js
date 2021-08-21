import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import ViewWeekRoundedIcon from '@material-ui/icons/ViewWeekRounded';
import TodayIcon from '@material-ui/icons/Today';
import "./HomePage.css";
import useStyles from "./useStyles";

import { Link } from "react-router-dom";

import OptionBtn from '../../components/OptionBtn/OptionBtn';

import moment from "moment";

 const today = moment();
 const currentWeekNumber = today.format("WW");
 const currentYear = today.format("YYYY");
 const currentDate = today.format("DD MM YYYY");


const HomePage = () => {
   const classes = useStyles();
   return (
      <>
      <div className="appBackground"></div>
      <Grid container className={classes.root}>
      <Grid item xs={12} md={7}>
        <Paper className={classes.root}>
           <Typography variant="h4" className={classes.title}>Export Planning Tool</Typography>
           <Typography variant="body2" className={classes.about} color="textSecondary">
            We and our partners store and/or access information 
            on a device, such as cookies and process personal 
            data, such as unique identifiers and standard
               information sent by a device for personalised ads and content
           </Typography>
           <Box className={classes.wrapper}>
               <Link to={`/week/${currentYear}/${currentWeekNumber}`}>
               <Box>
                  <OptionBtn text="Current Week" variant="contained" icon={<ViewWeekRoundedIcon fontSize="small"/>}/>
               </Box>
               </Link>
               <Link to={`/day/${currentDate}`}>
               <Box>
                  <OptionBtn text="Current Day" variant="contained" icon={<TodayIcon fontSize="small" />}/>
               </Box>
               </Link>
            </Box>
        </Paper>
        </Grid>
        <Grid item xs={12} md={5}>
        
        </Grid>
      </Grid>
      </>
   )
}

export default HomePage

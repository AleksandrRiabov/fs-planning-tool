import "./HomePage.css";
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Container from '@material-ui/core/Container';
import Box from "@material-ui/core/Box";
import ViewWeekRoundedIcon from '@material-ui/icons/ViewWeekRounded';
import TodayIcon from '@material-ui/icons/Today';

import { Link } from "react-router-dom";

import OptionBtn from '../../components/OptionBtn/OptionBtn';

import moment from "moment";

const useStyles = makeStyles((theme) => ({
   root: {
      display: "flex", 
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
   },
   wrapper: {
      width: "60%",
      maxWidth: "600px",
      minWidth: "300px",
      height: "300px",
      padding: "30px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: "linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)"
   }
 }));

 const today = moment();
 const currentWeekNumber = today.format("WW");
 const currentYear = today.format("YYYY");
 const currentDate = today.format("DD MM YYYY");


const HomePage = () => {
   const classes = useStyles();
   return (
      <>
      <Container className={classes.root}>
         <Paper className={classes.wrapper}>
        <Link to={`/week/${currentYear}/${currentWeekNumber}`}>
        <Box>
           <OptionBtn text="This Week" variant="contained" icon={<ViewWeekRoundedIcon fontSize="small"/>}/>
        </Box>
        </Link>
        <Link to={`/day/${currentDate}`}>
        <Box>
           <OptionBtn text="Current Day" variant="contained" icon={<TodayIcon fontSize="small" />}/>
        </Box>
        </Link>
        </Paper>
      </Container>
      </>
   )
}

export default HomePage

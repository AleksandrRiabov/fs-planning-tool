import "./HomePage.css";
import useStyles from "./useStyles";
import Paper from "@material-ui/core/Paper";
import Container from '@material-ui/core/Container';
import Box from "@material-ui/core/Box";
import ViewWeekRoundedIcon from '@material-ui/icons/ViewWeekRounded';
import TodayIcon from '@material-ui/icons/Today';

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
      <Container className={classes.root}>
         <Paper className={classes.wrapper}>
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
        </Paper>
      </Container>
      </>
   )
}

export default HomePage

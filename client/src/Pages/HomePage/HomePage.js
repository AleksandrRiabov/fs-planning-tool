import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ViewWeekRoundedIcon from "@material-ui/icons/ViewWeekRounded";
import TodayIcon from "@material-ui/icons/Today";
import "./HomePage.css";
import useStyles from "./useStyles";

import { Link } from "react-router-dom";

import OptionBtn from "../../components/OptionBtn/OptionBtn";

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
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Paper className={classes.root}>
            <Typography variant="h4" className={classes.title}>
              All you need to estimate, <br></br>the number of trailers
            </Typography>
            <Typography
              variant="body2"
              className={classes.about}
              color="textSecondary"
            >
              Export Planning Tool is designed to simplify process of estimating
              the required number of trailers for a specific day of the week.
              All estimates are based on the average of the five previous weeks,
              or specific days of the week. With app charts, you can easily
              identify seasonal order spikes, and prepare for the growing
              demand.
            </Typography>
            <Box className={classes.wrapper}>
              <Link to={`/week/${currentYear}/${currentWeekNumber}`}>
                <Box>
                  <OptionBtn
                    text="Current Week"
                    variant="contained"
                    icon={<ViewWeekRoundedIcon fontSize="small" />}
                  />
                </Box>
              </Link>
              <Link to={`/day/${currentDate}`}>
                <Box>
                  <OptionBtn
                    text="Current Day"
                    variant="contained"
                    icon={<TodayIcon fontSize="small" />}
                  />
                </Box>
              </Link>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={5}></Grid>
      </Grid>
    </>
  );
};

export default HomePage;

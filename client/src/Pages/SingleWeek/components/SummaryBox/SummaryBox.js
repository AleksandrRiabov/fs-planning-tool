import { useStyles } from "./useStyles";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import moment from "moment";


import CountUp from "react-countup";

import { getAllTotalsAndAverages } from "../../../../helpers";

const SummaryBox = ({ data, week, setWeek, setIndicator }) => {
   const classes = useStyles();

   const {
      cases,
      averageCases,
      pallets,
      averagePallets,
      trailers,
      averageTrailers,
   } = getAllTotalsAndAverages(data);

   const getYear = (date) => {
      return date.clone()
       .subtract(1, "week")
       .clone()
       .add(1, "day") 
       .startOf("week")
       .format("YYYY");
     } 
  
   const getWeekNumber = (type) => {
      const date = type === "next" 
         ? moment(`${week.number} ${week.year}`, "WW YYYY").clone().add(1, "week")
         : moment(`${week.number} ${week.year}`, "WW YYYY").clone().subtract(1, "week")
         const year = getYear(date);
         const number = date.format("WW"); 
         return {year, number}
   };


   const nextDate = getWeekNumber("next");
   const prevDate = getWeekNumber("previous");

   const arrowRightUrl = `/week/${nextDate.year}/${nextDate.number}` ;
   const arrowLeftUrl = `/week/${prevDate.year}/${prevDate.number}` 

   //getting correct year of the week number
    
   return (
      <Paper className={classes.root}>
         <Grid container spacing={1}>
            <Grid item xs={12}>
               <Box className={classes.titleBox}>
                  <Link to={{pathname: arrowLeftUrl}} onClick={() => setWeek({year: prevDate.year, number: prevDate.number})}>
                  <ArrowBackIcon
                     onClick={() => getWeekNumber("subtract")}
                     className={classes.arrows}
                  />
                  </Link>
                  <Typography variant="h6" color="inherit">
                     Week {week.number}{" "}
                  </Typography>
                  <Link to={{pathname: arrowRightUrl}} onClick={() => setWeek({year: nextDate.year, number: nextDate.number})}>
                  <ArrowForwardIcon
                     onClick={() => getWeekNumber("add")}
                     className={classes.arrows}
                  />
                  </Link>
               </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={12}>
               <Box>
                  <Box>
                     <Typography variant="h6" gutterBottom>
                        Day Average:
                     </Typography>
                  </Box>
                  <Box>
                     <Typography align={"left"} variant="body1" gutterBottom>
                        Cases: <span className="bold"> <CountUp 
                        start={0}
                        end={averageCases}
                        duration={1}
                        separator=","/></span>
                     </Typography>
                  </Box>
                  <Box>
                     <Typography align={"left"} variant="body1" gutterBottom>
                        Pallets: <span className="bold"><CountUp 
                              start={0}
                              end={averagePallets}
                              duration={0.8}
                              separator=","/></span>
                     </Typography>
                  </Box>
                  <Box>
                     <Typography align={"left"} variant="body1" gutterBottom>
                        Trailers:{" "}
                        <span className="bold"><CountUp 
                              start={0}
                              end={averageTrailers}
                              duration={0.8}
                              separator=","/></span>
                     </Typography>
                  </Box>
               </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={12}>
               <Box>
                  <Box>
                     <Typography variant="h6" gutterBottom>
                        Total:
                     </Typography>
                  </Box>
                  <Box>
                     <Typography align={"left"} variant="body1" gutterBottom>
                        Cases: <span className="bold">
                           <CountUp 
                              start={0}
                              end={cases}
                              duration={1}
                              separator=","/></span>
                     </Typography>
                  </Box>
                  <Box>
                     <Typography align={"left"} variant="body1" gutterBottom>
                        Pallets: <span className="bold"><CountUp 
                              start={0}
                              end={pallets}
                              duration={1}
                              separator=","/></span>
                     </Typography>
                  </Box>
                  <Box>
                     <Typography align={"left"} variant="body1" gutterBottom>
                        Trailers: <span className="bold">{trailers.trailers} {trailers.pallets ?  ` and ${trailers.pallets} pallets`: ""}</span>
                     </Typography>
                  </Box>
               </Box>
            </Grid>
         </Grid>
      </Paper>
   );
};

export default SummaryBox;
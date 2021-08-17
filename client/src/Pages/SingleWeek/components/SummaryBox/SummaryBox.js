import { useStyles } from "./useStyles";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CountUp from "react-countup";

import { getAllTotalsAndAverages } from "../../../../helpers";

const SummaryBox = ({ data, weekDate, setWeekDate, setIndicator }) => {
   const classes = useStyles();

   const {
      cases,
      averageCases,
      pallets,
      averagePallets,
      trailers,
      averageTrailers,
   } = getAllTotalsAndAverages(data);

   const changeWeekNumber = (type) => {
      if (type === "add") {
         setWeekDate((prev) => prev.clone().add(1, "week"));
         setIndicator(1);
      }
      if (type === "subtract") {
         setWeekDate((prev) => prev.clone().subtract(1, "week"));
         setIndicator(-1);
      }
   };

   return (
      <Paper className={classes.root}>
         <Grid container spacing={1}>
            <Grid item xs={12}>
               <Box className={classes.titleBox}>
                  <ArrowBackIcon
                     onClick={() => changeWeekNumber("subtract")}
                     className={classes.arrows}
                  />
                  <Typography variant="h6" color="inherit">
                     Week {weekDate.format("WW")}{" "}
                  </Typography>
                  <ArrowForwardIcon
                     onClick={() => changeWeekNumber("add")}
                     className={classes.arrows}
                  />
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
                        <span className="bold">{averageTrailers}</span>
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
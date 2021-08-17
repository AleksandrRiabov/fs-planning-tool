import { useState} from "react";
import { useStyles } from "./useStyles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import LineChart from "../../components/LineChart/LineChart";
import SummaryBox from "./components/SummaryBox/SummaryBox";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import Modal from "../../components/Modal/Modal";
import AddNewWeek from "./components/AddNewWeek/AddNewWeek";

import { Link } from "react-router-dom";

import moment from "moment";
import useFetch from "../../hooks/useFetch";
import { Typography } from "@material-ui/core";



export default function MainTable() {
   const [weekDate, setWeekDate] = useState(moment());
   const [creatingInProgress, setCreatingInProgress] = useState(false);
   const [indicator, setIndicator] = useState(0); //Indicate previos week when need to redirect on cancel
   const year = weekDate
      .clone()
      .subtract(1, "week")
      .clone()
      .add(1, "day") 
      .startOf("week")
      .format("YYYY"); //getting correct year of the week number

   const  url = `/api/week/${year}/${weekDate.format("WW")}`;
   const { loading, error, data, weekExist } = useFetch(url, weekDate);
   
   const classes = useStyles();

   const createNewWeek = async() => {
      setCreatingInProgress(true);
      const weekStartingDate = weekDate.startOf('week').add(1, "day").format("DD MM YYYY");
      await fetch(`/api/add/week/${weekStartingDate}`);
      setCreatingInProgress(false)
      setWeekDate(moment(weekDate.format("DD MM YYYY"), "DD MM YYYY")); 
   }

   const cancel = () => {
      if (indicator < 0){
         setWeekDate(weekDate.clone().add(1, "week"));
      } else{
         setWeekDate(weekDate.clone().subtract(1, "week"));
      }
   }
    
   if (loading) {
      return <Loading />;
   }
   if (error.show) {
      return <Error message={error.message} />;
   }

   if (!weekExist){
      return (
      <Modal>
         {creatingInProgress ? "Please wait..": <AddNewWeek 
         weekNumber={weekDate.format("WW")}
         createNewWeek={createNewWeek}
         cancel={cancel}
         />}
      </Modal>)
   }
   return (
      <Paper className={classes.paper}>
         <Grid container spacing={3}>
            <Grid item xs={12} md={9}>
               <Paper>
                  <LineChart chartData={data.days} loading={loading}/>
                  <Typography  variant="body2"  color="textSecondary">{`Week  ${data.weekNumber}`}</Typography>
               </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
               <SummaryBox
                  weekDate={weekDate}
                  setWeekDate={setWeekDate}
                  setIndicator={setIndicator}
                  data={data.days}
               />
            </Grid>
            <Grid item xs={12}>
               <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                     <TableHead className={classes.tableHeader}>
                        <TableRow>
                           <TableCell>Week number: {data.week}</TableCell>
                           <TableCell align="center">Day</TableCell>
                           <TableCell align="center">Cases</TableCell>
                           <TableCell align="center">Pallets</TableCell>
                           <TableCell align="center">Trailers</TableCell>
                           <TableCell align="center">More Info</TableCell>
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        {data.days.map((day) => (
                           <TableRow key={day.date}>
                              <TableCell className={classes.firstCell}>
                                 {day.day}
                              </TableCell>
                              <TableCell align="center">{day.date}</TableCell>
                              <TableCell align="center">{day.cases}</TableCell>
                              <TableCell align="center">
                                 {day.pallets}
                              </TableCell>
                              <TableCell align="center">
                                 {day.trailers}
                              </TableCell>
                              <TableCell align="center">
                                 <Link to={`/day/${day.date}`}>
                                    <Button
                                       className={classes.btn}
                                       size="small"
                                       variant="contained"
                                       color="primary"
                                    >
                                       Open Day Details
                                    </Button>
                                 </Link>
                              </TableCell>
                           </TableRow>
                        ))}
                     </TableBody>
                  </Table>
               </TableContainer>
            </Grid>
         </Grid>
      </Paper>
   );
}
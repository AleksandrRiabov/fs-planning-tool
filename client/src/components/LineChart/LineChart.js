import  Typography  from "@material-ui/core/Typography";
import {Line} from "react-chartjs-2";
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";


const useStyles = makeStyles({
   root: {
      position: "relative"
   },
   loadingLocal: {
      position: "absolute",
      display: "flex",
      justifyContent: "center", 
      alignItems: "center",
      width: "100%",
      height: "100%",
   }
 });

const LineChart = ({chartData, loading}) =>  {
   const data = chartData.length ? chartData: [{}];
   const classes = useStyles()

   return (
      <Box className={classes.root}>
         {loading ? <Box className={classes.loadingLocal}>
            <Typography className={classes.txt} variant="h6" color="textSecondary">Loading.. Please Wait..</Typography>
         </Box>: null}

         {data.length ? 
       <Line 
       data={{
          labels: data.map(day => day.date), 
          datasets: [{
             data: data.map(day => day.cases),
             label: "Cases",
             borderColor: "teal",
             backgroundColor: "#00808026",
             fill: true
          },{
             data: data.map(day => day.pallets), 
             label: "Pallets",
             borderColor: "red",
             backgroundColor: "rgba(255,0,0,0.2)",
             fill: true
          },
          {
            data: data.map(day => day.trailers), 
            label: "Trailers",
            borderColor: "#3333ff",
            backgroundColor: "#3333ff20",
            fill: true
         }]
       }}
       /> : null}
      </Box>
   )
}

export default LineChart

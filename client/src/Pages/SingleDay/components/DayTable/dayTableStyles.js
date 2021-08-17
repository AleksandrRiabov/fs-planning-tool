
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
   table: {
     minWidth: 350,
   },
   cell: {
      border: "1px solid red"
   },
   product: {
      fontWeight: 600,
      background: "teal",
      color: "white",
      textTransform: "capitalize"
   },
   tableTitle: {
      textAlign: "center",
      borderBottom: "1px solid #000",
      padding: "3%"
   },
   tableHead: {
      background: "#d0d0d04d"
   },
   flexWrapper: {
      display: "flex",
      flexDirection: "column"
   },
	predicted: {
		background: "teal",
		color: "#fff"
	},
   predictedInfo: {
      opacity: "0.5"
   },
	first: {
      background: "#a2a2a22b",
   },
   second: {
      background: "#f6f6f6"
   },
   paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
   }
 }));
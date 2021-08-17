import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
   },
   dayTitle: {
     marginBottom: theme.spacing(1),
     padding: theme.spacing(2),
     background: "#f1f1f1",
     color: "teal",
     fontWeight: "500",
     textTransform: "uppercase"
   },
   chart: {
     marginTop: "20px"
   } 
 }));

 export default useStyles;
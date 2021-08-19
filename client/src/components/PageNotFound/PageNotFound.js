import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography  from "@material-ui/core/Typography";
import { makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
   root: {   
      margin: "100px auto",
   },
   wrapper: {
      padding: "30px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
   },
   link: {
      marginTop: "50px"
   }

});
const PageNotFound = () => {
   const classes = useStyles();
   return (
      <div>
         <Grid  constainer spacing={5}> 
             <Grid className={classes.root} item xs={12} md={8}>
                <Paper className={classes.wrapper}>
                   <Typography variant="h1">404 </Typography>
                   <Typography variant="h6">Page Not Found </Typography>
                   <Typography className={classes.link} variant="button" color="primary"><a href="/" > Return to home page.</a></Typography>              
                </Paper>
             </Grid>
         </Grid>
      </div>
   )
}

export default PageNotFound;
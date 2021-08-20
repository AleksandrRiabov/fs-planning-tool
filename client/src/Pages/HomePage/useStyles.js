import { makeStyles } from '@material-ui/core/styles';

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
   }
 }));

 export default useStyles;
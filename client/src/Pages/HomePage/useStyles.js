import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   root: {
      marginTop: "50px",
      padding: "40px 40px 20px",
   },
   title: {
      marginBottom: "35px",
   },
   about: {
      marginBottom: "40px", 
   },
   wrapper: {
      display: "flex",
   }
 }));

 export default useStyles;
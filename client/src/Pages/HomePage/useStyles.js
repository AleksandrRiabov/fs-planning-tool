import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   root: {
      marginTop: "20%",
      padding: "40px 40px 20px",
      background: "#fffffff2"
   },
   title: {
      marginBottom: "35px",
   },
   about: {
      marginBottom: "40px", 
   },
   wrapper: {
      display: "flex",
      flexWrap: "wrap"
   }
 }));

 export default useStyles;
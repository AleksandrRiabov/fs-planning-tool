import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
   root: {
      padding: "20px",
   },
   titleBox:{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "teal",
      color: "#fff",
      height: "100%",
   },
    arrows: {
       cursor: "pointer",
       padding: "10px",
       background: "#e7fff4",
       color: "teal"
    },
 });

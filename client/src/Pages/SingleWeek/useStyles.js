import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
   table: {
      minWidth: 350,
   },
   firstCell: {
      background: "teal",
      color: "#fff",
      textTransform: "capitalize",
      fontWeight: "600",
   },
   tableHeader: {
      background: "#e7fff4",
   },
   btn: {
      background: "teal",
   },
   paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
   },
}));
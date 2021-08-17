import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles({
  btn: {
     margin: "10px"
  }
});
const OptionBtn = ({color = "primary", func, text, icon, variant}) => {
   const classes = useStyles();

   return (
      <Button
         onClick={func ? () => func() : null}
         color={color}
         variant={variant}
         className={classes.btn}>
            <Box>
               <Box>{icon}</Box>
               <Box>{text}</Box>
         </Box>
      </Button>
   )
}

export default OptionBtn;
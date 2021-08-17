import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import img from "./images/seal.jpg";

const useStyles = makeStyles({
   root: {
      maxWidth: 345,
   },
});

export default function AddNewWeek({ weekNumber, createNewWeek, cancel }) {
   const classes = useStyles();

   return (
      <Card className={classes.root}>
         <Typography align="center" gutterBottom variant="h6" component="h2">
            Week {weekNumber} does not exist yet.
         </Typography>
         <CardActionArea>
            <CardMedia
               component="img"
               alt="Week Not Found"
               image={img}
               title="Week Not Found"
            />
            <CardContent>
               <Typography gutterBottom variant="h6" component="h2">
                  Do you want to create week {weekNumber} ?
               </Typography>
               <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
               </Typography>
            </CardContent>
         </CardActionArea>
         <CardActions>
            <Button
               onClick={() => createNewWeek()}
               size="small"
               variant="contained"
               color="primary"
            >
               Add New Week
            </Button>
            <Button
               onClick={cancel}
               size="small"
               variant="contained"
               color="secondary"
            >
               Cancel
            </Button>
         </CardActions>
      </Card>
   );
}

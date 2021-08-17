import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";
import image from "./unseccessful.png";

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
	root: {
    maxWidth: 400,
  },
	media: {
    height: 0,
    paddingTop: '100%', // 16:9
  },
	flex: {
		height: "100%",
		display: "flex",
		justifyContent: "center", 
		alignItems: "center"
	},
	btn:{
		color: "teal"
	}
}));

const Error = ({ message }) => {
	const classes = useStyles();
	
   return (
        <Container className={classes.flex}>
         <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography  gutterBottom variant="h5" component="h2">
            Oops, Something Went Wrong..
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {message}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to="/">
			  <Button  className={classes.btn} size="small" color="primary">
				  Go to home page
			</Button>
		  </Link>
      </CardActions>
    </Card>
	</Container>	   
   );
};

export default Error;

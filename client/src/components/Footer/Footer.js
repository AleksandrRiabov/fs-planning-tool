import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
   root: {
      marginTop: "100px",
      background: "#00808017",
      height: " 90px",
      position: "relative",
   },
   footerEmail: {
      position: "absolute",
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
   },
   fontSize: {
      fontSize: "0.9rem",
   },
});

const Footer = () => {
   const classes = useStyles();
   return (
      <Box className={classes.root}>
         <Container>
            <Box className={classes.footerEmail}>
               <Typography variant="body2" className={classes.fontSize}>
                  © 2021 WebDevApplications@gmail.com{" "}
               </Typography>
            </Box>
         </Container>
      </Box>
   );
};

export default Footer;
import { useState , useRef} from "react";
import useFetch from "../../../../hooks/useFetch";
import useScrollToElement from "../../../../hooks/useScrollToElemet";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import { useStyles } from "./useStyles";

import LineChart from "../../../../components/LineChart/LineChart";
import ProductPcker from "../ProductPicker/ProductPicker";
import Error from "../../../../components/Error/Error";

const DaysLineChart = ({ date, weeksQty, allProdNames }) => {
   const classes = useStyles();
   const [selectedProduct, setSelectedProduct] = useState("chill");
   const chartRef = useRef(null);

   const url = `/api/day/linechart/${date}/${selectedProduct}/${weeksQty}`;
   const { loading, error, data } = useFetch(url, selectedProduct);

   useScrollToElement(chartRef);

   if (error.show) {
      return <Error message={error.message} />;
   }

   return (
      <Paper ref={chartRef} className={classes.paper}>
         <Box className={classes.flex}>
            <Box className={classes.margin}>
               <Typography variant="button">Select Product:</Typography>
            </Box>
            <ProductPcker
               selectedProduct={selectedProduct}
               setSelectedProduct={setSelectedProduct}
               allProdNames={allProdNames}
            />
         </Box>
         <LineChart chartData={loading ? [{}] : data} loading={loading} />
      </Paper>
   );
};

export default DaysLineChart;

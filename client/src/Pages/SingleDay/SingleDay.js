import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./SingleDay.css";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import useStyles from "./useStyles";

import DayTable from "./components/DayTable/DayTable";
import BarChart from "./components/BarChart/BarChart";
import OptionsBar from "./components/OptionsBar/OptionsBar";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import Saving from "./components/Saving/Saving";
import Modal from "../../components/Modal/Modal";
import DaysLineChart from "./components/DaysLineChart/DaysLineChart";


import { formatChartData } from "../../helpers";
import { getSingleDayData } from "../../services";

export const SingleDay = ({ date }) => {
   const [data, setData] = useState();
   const [showBarChart, setShowBarChart] = useState(false);
   const [showLineChart, setShowLineChart] = useState(false);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState({ isError: false, message: "" });
   const [saving, setSaving] = useState({ inProgress: false, showBtn: false, errorMessage: "" });

   const classes = useStyles();

   useEffect(() => {
      window.scrollTo(0, 0);
      setLoading(true);
      const fetchAndModifyData = async (date) => {
         try {
            const fetchedData = await getSingleDayData(date);
            //Count "Predicted" pallets for each product according to coefficient and add's to array of data
            const products = fetchedData.products.map((product) => {
               const cases = +product.cases > 0 ? +product.cases : +product.predictedCases;
               const predictedPallets = Math.round(product.cof * cases);
               return { ...product, predictedPallets };
            });
            const names = products.map((product) => product.name);

            setData({ ...fetchedData, products, names });
         } catch (err) {
            console.log("Data Not Fetched");
            setError({ isError: true, message: err.message });
         } finally {
            setLoading(false);
         }
      };

      fetchAndModifyData(date);
   }, [date]);

   const saveChanges = async () => {
      setSaving({ ...saving, inProgress: true });
      try {
        const res = await fetch(`/api/day/${data._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data.products),
         });
         if (res.status !== 200){
           throw new Error({message: "Not saved"})
         }
         setSaving({ ...saving, inProgress: true, showBtn: true});
      } catch (e) {
        setSaving({ inProgress: true, showBtn: true, errorMessage: "Could Not Save Data! Please try again.." });
      } 
   };

   const onPalletsInputChange = (e) => {
      const updated = data.products.map((product) => {
         if (product.name === e.target.name) {
            const value = parseInt(e.target.value)
               ? parseInt(e.target.value)
               : 0;
            return { ...product, pallets: value };
         } else {
            return product;
         }
      });
      setData({ ...data, products: updated });
   };

   const onCasesInputChange = (e) => {
      const updated = data.products.map((product) => {
         if (product.name === e.target.name) {
            const value = parseInt(e.target.value)
               ? parseInt(e.target.value)
               : 0;

            const predictedPallets =
               value && value !== 0
                  ? Math.round(product.cof * +value)
                  : Math.round(product.cof * product.predictedCases);
            return { ...product, cases: value, predictedPallets };
         } else {
            return product;
         }
      });
      setData({ ...data, products: updated });
   };

   const closeModal = () => setSaving({ inProgress: false, showBtn: false, errorMessage: "" });

   if (loading) {
      return <Loading />;
   }
   if (error.isError) {
      return <Error message={error.message} />;
   }

   return (
      <Paper className={classes.paper}>
         {saving.inProgress ? (
            <Modal>
               <Saving showBtn={saving.showBtn} closeModal={closeModal} errorMessage={saving.errorMessage}/>
            </Modal>
         ) : null}
         <div className="singleDay">
            <Paper className={classes.dayTitle}>
               {data.day} - {data.date}
            </Paper>
            <Grid container spacing={1}>
               <Grid item xs={12}>
                  <DayTable
                     data={data.products}
                     onCasesInputChange={onCasesInputChange}
                     onPalletsInputChange={onPalletsInputChange}
                  />
               </Grid>
               <Grid className={classes.chart} item xs={12}>
                  {showLineChart ? (
                     <DaysLineChart
                        date={data.date}
                        allProdNames={data.names}
                        weeksQty="5"
                     />
                  ) : null}
               </Grid>
               <CSSTransition
                  in={showBarChart}
                  timeout={300}
                  classNames="chart"
                  unmountOnExit
               >
                  <Grid item xs={12}>
                        <BarChart
                           chartData={formatChartData(data.products)}
                           title={"Actual Cases vs Expected "}
                        />
                  </Grid>
               </CSSTransition>
               <OptionsBar
                  showBarChart={showBarChart}
                  setShowBarChart={setShowBarChart}
                  saveChanges={saveChanges}
                  showLineChart={showLineChart}
                  setShowLineChart={setShowLineChart}
               />
            </Grid>
         </div>
      </Paper>
   );
};

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
<<<<<<< HEAD
import Tooltip from "@material-ui/core/Tooltip";
=======
import Tooltip from '@material-ui/core/Tooltip';
>>>>>>> routerchanges

import { useStyles } from "./useStyles";
import "./DayTable.css";

import { getTrailersFromPallets, getTotal } from "../../../../helpers";

const DayTable = ({ data, onCasesInputChange, onPalletsInputChange }) => {
  const classes = useStyles();

  const {
    totalCases,
    totalPallets,
    totalPredictedCases,
    totalPredictedPallets,
  } = getTotal(data);
  const totalActualTrailers = getTrailersFromPallets(totalPallets);
  const totalPredictedTrailers = getTrailersFromPallets(totalPredictedPallets);
<<<<<<< HEAD

  const tooltips = {
    averageCases: "Last 5 Weeks Average",
    averagePallets:
      "Expected pallet count according to the  average coeficient of the last 5 weeks.",
    averageTrailers: "Expected number of required trailers",
  };
=======
	  
  const tooltips = {
    averageCases: "Last 5 Weeks Average",
    averagePallets: "Expected pallet count according to the  average coeficient of the last 5 weeks.",
    averageTrailers: "Expected number of required trailers"
  }
>>>>>>> routerchanges
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="center">Cases</TableCell>
            <TableCell align="center">Pallets</TableCell>
            <TableCell align="center">Trailers</TableCell>
<<<<<<< HEAD
            <Tooltip
              title={tooltips.averageCases}
              aria-label={tooltips.averageCases}
            >
=======
            <Tooltip title={tooltips.averageCases} aria-label={tooltips.averageCases}>
>>>>>>> routerchanges
              <TableCell align="center" className={classes.predicted}>
                Expected Cases
              </TableCell>
            </Tooltip>
<<<<<<< HEAD
            <Tooltip
              title={tooltips.averagePallets}
              aria-label={tooltips.averagePallets}
            >
              <TableCell align="center" className={classes.predicted}>
                Expected Pallets
              </TableCell>
            </Tooltip>
            <Tooltip
              title={tooltips.averageTrailers}
              aria-label={tooltips.averageTrailers}
            >
              <TableCell align="center" className={classes.predicted}>
                Expected Trailers
              </TableCell>
=======
            <Tooltip title={tooltips.averagePallets} aria-label={tooltips.averagePallets}>
            <TableCell align="center" className={classes.predicted}>
              Expected Pallets
            </TableCell>
            </Tooltip>
            <Tooltip title={tooltips.averageTrailers} aria-label={tooltips.averageTrailers}>
            <TableCell align="center" className={classes.predicted}>
              Expected Trailers
            </TableCell>
>>>>>>> routerchanges
            </Tooltip>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((product, index) => {
            const { name, cases, pallets, predictedCases, predictedPallets } =
              product;
            return (
              <TableRow
                className={index % 2 === 0 ? classes.second : classes.first}
                key={name}
              >
                <TableCell
                  className={classes.product}
                  component="th"
                  scope="product"
                >
                  {name}
                </TableCell>
                <TableCell align="center">
                  <input
                    onChange={(e) => onCasesInputChange(e)}
                    name={name}
                    value={cases}
                  />
                </TableCell>
                <TableCell align="center">
                  <input
                    onChange={(e) => onPalletsInputChange(e)}
                    name={name}
                    value={pallets}
                  />
                </TableCell>
                <TableCell align="center">
                  {pallets ? (pallets / 26).toFixed(2) : 0}
                </TableCell>
<<<<<<< HEAD
                {/* SECTION EXPECTED DATA*/}
                <TableCell align="center" className={classes.predictedInfo}>
                  {predictedCases}
=======
                {/*  EXPECTED DATA*/}
                <TableCell
                  align="center"
                  className={classes.predictedInfo}
                >
                  { predictedCases}
>>>>>>> routerchanges
                </TableCell>
                <TableCell
                  align="center"
                  className={
                    cases && parseInt(cases) > 0 ? "" : classes.predictedInfo
                  }
                >
                  {predictedPallets}
                </TableCell>
                <TableCell
                  align="center"
                  className={
                    cases && parseInt(cases) > 0 ? "" : classes.predictedInfo
                  }
                >
                  {(predictedPallets / 26).toFixed(2)}
                </TableCell>
              </TableRow>
            );
          })}
          {/*  ACTUAL DATA SUMMRY*/}
          <TableRow key="total">
            <TableCell
              className={classes.product}
              component="th"
              scope="product"
            >
              TOTAL
            </TableCell>
            <TableCell align="center">Total cases: {totalCases}</TableCell>
            <TableCell align="center">Total Pallests: {totalPallets}</TableCell>
            <TableCell align="center" display="flex">
              Total:
              <Box className={classes.flexWrapper}>
                <Box>{totalActualTrailers.trailers} Trailers</Box>
                <Box>{totalActualTrailers.pallets} pallets</Box>
              </Box>
            </TableCell>
<<<<<<< HEAD
            {/* EXPECTED SUMMRY*/}
            <TableCell align="center" className={classes.predicted}>
              Total Expected cases: {totalPredictedCases}
            </TableCell>
=======
            {/* EXPECTED DATA SUMMRY*/} 
              <TableCell align="center" className={classes.predicted}>  
                        Total Expected cases: { totalPredictedCases }
              </TableCell>
>>>>>>> routerchanges
            <TableCell align="center" className={classes.predicted}>
              Total Expected Pallests: {totalPredictedPallets}
            </TableCell>
            <TableCell
              align="center"
              className={classes.predicted}
              display="flex"
            >
              Total Expected:
              <Box className={classes.flexWrapper}>
                <Box>{totalPredictedTrailers.trailers} Trailers</Box>
                <Box>{totalPredictedTrailers.pallets} pallets</Box>
              </Box>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DayTable;
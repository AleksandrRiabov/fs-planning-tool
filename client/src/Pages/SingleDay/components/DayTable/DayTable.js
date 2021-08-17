import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

import { useStyles } from "./dayTableStyles";
import "./DayTable.css";

import { getTrailersFromPallets, getTotal } from "../../../../helpers";

  const DayTable = ({ data, onCasesInputChange, onPalletsInputChange }) => {
  const classes = useStyles();
	  
  const { totalCases, totalPallets, totalPredictedCases, totalPredictedPallets } = getTotal(data);
  const totalActualTrailers = getTrailersFromPallets(totalPallets);
  const totalPredictedTrailers = getTrailersFromPallets(totalPredictedPallets);
	  
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="center">Cases</TableCell>
            <TableCell align="center">Pallets</TableCell>
            <TableCell align="center">Trailers</TableCell>
            <TableCell align="center" className={classes.predicted}>
              Expected Cases
            </TableCell>
            <TableCell align="center" className={classes.predicted}>
              Expected Pallets
            </TableCell>
            <TableCell align="center" className={classes.predicted}>
              Expected Trailers
            </TableCell>
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
                {/* SECTION EXPECTED DATA*/}
                <TableCell
                  align="center"
                  className={classes.predictedInfo}
                >
                  { predictedCases}
                </TableCell>
                <TableCell
                  align="center" 
                  className={(cases && parseInt(cases) > 0  ) ? "" : classes.predictedInfo}
                >
                  {predictedPallets}
                </TableCell>
                <TableCell
                  align="center"
                  className={(cases && parseInt(cases) > 0  ) ? "" : classes.predictedInfo}
                >
                  {(predictedPallets / 26).toFixed(2)}
                </TableCell>
              </TableRow>
            );
          })}
          {/*SUMMRY ACTUAL DATA*/}
          <TableRow key="total">
            <TableCell
              className={classes.product}
              component="th"
              scope="product"
            >
              TOTAL
            </TableCell>
            <TableCell align="center">
              Total cases: {totalCases}
            </TableCell>
            <TableCell align="center">
              Total Pallests: {totalPallets}
            </TableCell>
            <TableCell align="center" display="flex">
              Total:
              <Box className={classes.flexWrapper}>
                <Box>
                  { totalActualTrailers.trailers }
                  {" "} Trailers
                </Box>
                <Box>
                  { totalActualTrailers.pallets }
                  {" "}pallets
                </Box>
              </Box>
            </TableCell>
            {/* EXPECTED SUMMRY*/}
            <TableCell align="center" className={classes.predicted}>
              Total Expected cases: { totalPredictedCases }
            </TableCell>
            <TableCell align="center" className={classes.predicted}>
              Total Expected Pallests: { totalPredictedPallets }
            </TableCell>
            <TableCell
              align="center"
              className={classes.predicted}
              display="flex"
            >
              Total Expected:
              <Box className={classes.flexWrapper}>
                <Box>
                  {totalPredictedTrailers.trailers}
                  {" "} Trailers
                </Box>
                <Box>
                  {totalPredictedTrailers.pallets}
                  {" "} pallets
                </Box>
              </Box>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DayTable;
import { useParams, useLocation } from "react-router";
import useFetch from "../../hooks/useFetch";
import useCreateNewWeek from "../../hooks/useCreateNewWeek";
import { useStyles } from "./useStyles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import LineChart from "../../components/LineChart/LineChart";
import SummaryBox from "./components/SummaryBox/SummaryBox";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import Modal from "../../components/Modal/Modal";
import AddNewWeek from "./components/AddNewWeek/AddNewWeek";
import Saving from "../../components/Saving/Saving";

import { Link } from "react-router-dom";

const SingleWeek = () => {
  const { year, number } = useParams();
  const { pathname } = useLocation();

  const { creatingStatus, closeModal, cancel, createNewWeek } =
    useCreateNewWeek({ year, number });

  const url = `/api/${pathname}`;
  const { loading, error, data, weekExist } = useFetch(
    url,
    creatingStatus.refreshPage
 );

  const classes = useStyles();

  if (loading) {
    return <Loading />;
  }
  if (error.show) {
    return <Error message={error.message} />;
  }

  if (!weekExist) {
    return (
      <Modal>
        {creatingStatus.inProgress ? (
          <Saving
            showBtn={creatingStatus.showBtn}
            closeModal={closeModal}
            message={creatingStatus.message}
          />
        ) : (
          <AddNewWeek
            weekNumber={number}
            createNewWeek={createNewWeek}
            cancel={cancel}
          />
        )}
      </Modal>
    );
  }

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
          <Paper>
            <LineChart chartData={data.days} loading={loading} />
            <Typography
              variant="body2"
              color="textSecondary"
            >{`Week  ${data.weekNumber}`}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <SummaryBox year={year} number={number} data={data.days} />
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead className={classes.tableHeader}>
                <TableRow>
                  <TableCell>Week number: {data.week}</TableCell>
                  <TableCell align="center">Day</TableCell>
                  <TableCell align="center">Cases</TableCell>
                  <TableCell align="center">Pallets</TableCell>
                  <TableCell align="center">Trailers</TableCell>
                  <TableCell align="center">More Info</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.days.map((day) => (
                  <TableRow key={day.date}>
                    <TableCell className={classes.firstCell}>
                      {day.day}
                    </TableCell>
                    <TableCell align="center">{day.date}</TableCell>
                    <TableCell align="center">{day.cases}</TableCell>
                    <TableCell align="center">{day.pallets}</TableCell>
                    <TableCell align="center">{day.trailers}</TableCell>
                    <TableCell align="center">
                      <Link to={`/day/${day.date}`}>
                        <Button
                          className={classes.btn}
                          size="small"
                          variant="contained"
                          color="primary"
                        >
                          Open Day Details
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SingleWeek;
import { useState } from "react";
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
import Saving from "../../components/Saving/Saving";
import Modal from "../../components/Modal/Modal";
import DaysLineChart from "./components/DaysLineChart/DaysLineChart";

import { useFetchAndModifyData } from "./useFetchAndModifyData";
import { formatChartData } from "../../helpers";
import { onInputChange } from "./onInputChange";
import { onSaveChages } from "./onSaveChanges";

const SingleDay = ({ date }) => {
  const { data, setData, loading, error } = useFetchAndModifyData(date);
  const [showBarChart, setShowBarChart] = useState(false);
  const [showLineChart, setShowLineChart] = useState(false);
  const [saving, setSaving] = useState({
    inProgress: false,
    showBtn: false,
    message: "",
  });
  const [newChanges, setNewChanges] = useState(false);

  const classes = useStyles();

  const { onPalletsInputChange, onCasesInputChange } = onInputChange({
    data,
    setData,
    setNewChanges,
  });
  const saveChanges = onSaveChages({ data, setSaving, setNewChanges });

  const closeModal = () =>
    setSaving({ inProgress: false, showBtn: false, errorMessage: "" });

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
          <Saving
            showBtn={saving.showBtn}
            closeModal={closeModal}
            message={saving.message}
          />
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
            newChanges={newChanges}
          />
        </Grid>
      </div>
    </Paper>
  );
};

export default SingleDay;
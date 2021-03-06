import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import BarChartIcon from '@material-ui/icons/BarChart';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import SaveIcon from '@material-ui/icons/Save';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import OptionBtn from "../../../../components/OptionBtn/OptionBtn";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
  },
});

export default function OptionsBar({showBarChart, setShowBarChart, saveChanges, showLineChart, setShowLineChart, newChanges}) {

  const classes = useStyles();
  const toggleBarChart = () => {
     setShowBarChart(!showBarChart);
  }

  const toggleLineChart = () => {
    setShowLineChart(!showLineChart);
 }
 
  return (
    <Box
      className={classes.root}
    >
      <Box>
         <OptionBtn
            text={showBarChart ? "Hide Barchart" : "Show Barchart"}
            func={toggleBarChart} 
            icon={<BarChartIcon/>}/>

          <OptionBtn
            text={showLineChart ? "Hide Linechart" : "Show Linechart"}
            func={toggleLineChart} 
            icon={<ShowChartIcon/>}/>

         <OptionBtn
          text="Create Plan"
          icon={<DeveloperModeIcon/>}/>
      </Box>
      
      <Box>
      <OptionBtn
            text="Save changes"
            func={saveChanges} 
            icon={<SaveIcon/>}
            variant={newChanges ? "contained": "text"}
            />
      </Box>
    </Box>
  );
}

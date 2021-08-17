import { useRef } from "react";
import { Bar } from "react-chartjs-2";
import Paper from "@material-ui/core/Paper";
import useScrollToElement from "../../../../hooks/useScrollToElemet";

const BarChart = ({ chartData, title }) => {
   const chartRef = useRef(null);
   
   useScrollToElement(chartRef);

   if (!chartData) {
      return "... Loading";
   }
   const { labels, cases } = chartData;
   return (
      <Paper ref={chartRef}>
         <Bar
         className="chart"
         data={{
            labels: labels,
            datasets: [
               {
                  label: title,
                  backgroundColor: [
                     "rgba(0,0,255,0.6)",
                     "rgba(0,0,255,0.4)",
                     "rgba(0,255,0,0.6)",
                     "rgba(0,255,0,0.4)",
                     "rgba(255,0,0,0.6)",
                     "rgba(255,0,0,0.4)",
                     "rgba(0,0,255,0.6)",
                     "rgba(0,0,255,0.4)",
                     "rgba(0,255,0,0.6)",
                     "rgba(0,255,0,0.4)",
                     "rgba(255,0,0,0.6)",
                     "rgba(255,0,0,0.4)",
                  ],
                  data: cases,
               },
            ],
         }}
      />
      </Paper>
   );
};

export default BarChart;

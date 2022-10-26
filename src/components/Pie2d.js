// STEP 1 - Include Dependencies
// Include react
import React from "react";
import ReactDOM from "react-dom";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);


// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
const Pie2D= ()=>{

  // STEP 2 - Chart Data
const chartData = [
  {
    label: "HTML",
    value: "210"
  },
  {
    label: "CSS",
    value: "260"
  },
  {
    label: "JS",
    value: "180"
  },
  {
    label: "RAILS",
    value: "140"
  },
  {
    label: "NODEJS",
    value: "115"
  },
  {
    label: "PHP",
    value: "100"
  },
  {
    label: "C++",
    value: "30"
  },
  {
    label: "PYTHON",
    value: "30"
  }
];

// STEP 3 - Creating the JSON object to store the chart configurations
const chartConfigs = {
  type: "pie2d", // The chart type
  width: "100%", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      //Set the chart caption
      caption: "Most language used",
      //Set the chart subcaption
      // subCaption: "In MMbbl = One Million barrels",
      //Set the x-axis name
      xAxisName: "Languages",
      //Set the y-axis name
      yAxisName: "Reserves (MMbbl)",
      numberSuffix: "K",
      //Set the theme for your chart
      theme: "fusion"
    },
    // Chart Data
    data: chartData
  }
};

    return (<ReactFC {...chartConfigs} />);
}

export default Pie2D;
import React from "react";
import './Chart.css'
import ChartBar from "./ChartBar";

const Chart = (props) => {

    const dataPointValues = props.chartDataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointValues)
    return (<div className="chart">
        {props.chartDataPoints.map(chartDataPoint => <ChartBar key={chartDataPoint.label} value={chartDataPoint.value} maxValue={totalMaximum} label={chartDataPoint.label}></ChartBar>)
        }
    </div >)
}

export default Chart
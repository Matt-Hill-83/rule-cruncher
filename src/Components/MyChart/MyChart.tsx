import React from "react"

import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"

import css from "./MyChart.module.scss"
import { MyChartProps, ChartOptionsInter, ChartData } from "./types"

const defaultOptions: ChartOptionsInter = {
  chart: {
    type: "spline",
  },
  title: {
    text: "Chart",
  },
  series: [],
}

const getChartOptions = (
  data: ChartData,
  options: ChartOptionsInter
): ChartOptionsInter => {
  if (data) {
    options.series = [{ data }]
  }
  return options
}

function MyChart(props: MyChartProps) {
  const { options = defaultOptions, data } = props
  console.log("data", data) // zzz

  return (
    <div className={css.main}>
      <HighchartsReact
        highcharts={Highcharts}
        options={getChartOptions(data, options)}
      />
    </div>
  )
}

export default MyChart

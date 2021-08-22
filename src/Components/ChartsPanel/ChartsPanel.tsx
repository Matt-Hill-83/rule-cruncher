import React from "react"
import cx from "classnames"

import css from "./ChartsPanel.module.scss"

import MyChart from "../MyChart/MyChart"
import { ChartDefsInter, ChartOptionsInter } from "../MyChart/types"

const getLittleChartOptions = (
  newOptions: ChartOptionsInter | {} = {}
): ChartOptionsInter => {
  const options = {
    chart: {
      type: "spline",
    },
    title: {
      text: "Little Chart",
    },
    series: [],
  }
  return { ...options, ...newOptions }
}

const bigChartptions: ChartOptionsInter = {
  chart: {
    type: "spline",
  },
  title: {
    text: "Big Chart",
  },
  series: [],
}

const bigChartDefs: ChartDefsInter = {
  options: bigChartptions,
  data: [1, 2, 1, 4, 3, 6],
}

const littleChartDefs1: ChartDefsInter = {
  options: getLittleChartOptions({
    title: {
      text: "XLM",
    },
  }),
  data: [10, 20, 10, 40, 30, 6],
}

const littleChartDefs2: ChartDefsInter = {
  options: getLittleChartOptions(),
  data: [10, 20, 0, 40, 30, 6],
}

const littleChartsDefsGroup: ChartDefsInter[] = [
  littleChartDefs1,
  littleChartDefs2,
  littleChartDefs1,
  littleChartDefs2,
]

const renderLittleCharts = () => {
  const output = littleChartsDefsGroup.map((littleChartDefs, chartIndex) => {
    const chart = (
      <div className={cx(css.chart)}>
        <MyChart {...littleChartDefs} chartIndex={chartIndex} />
      </div>
    )
    return chart
  })
  return output
}

function ChartsPanel() {
  return (
    <div className={css.main}>
      <div className={css.bigChart}>
        <div className={cx(css.chart)}>
          <MyChart {...bigChartDefs} />
        </div>
      </div>
      <div className={css.littleCharts}>
        {renderLittleCharts()}
        {/*  */}
      </div>
    </div>
  )
}

export default ChartsPanel

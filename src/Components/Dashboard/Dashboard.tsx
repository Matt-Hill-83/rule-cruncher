import React from "react"

import css from "./Dashboard.module.scss"

import InstructionsPanel from "../InstructionsPanel/InstructionsPanel"
import Spacer from "../Spacer/Spacer"

import { InstructionsPanelPropsType } from "../InstructionsPanel/types"
import { InstructionStepProps } from "../InstructionStep/types"
// import ChartsPanel from "../ChartsPanel/ChartsPanel"
import MyMultiSelect from "../MultiSelect/MultiSelect"

const stepPropsGroup: InstructionStepProps[] = [
  {
    stepNum: 1,
    label: "Get the Scent",
    buttonLabel: "Sniff",
  },
  {
    stepNum: 2,
    label: "Get 'em Girl!",
    buttonLabel: "Run",
  },
  {
    stepNum: 3,
    label: "Take it to the Bank!",
    buttonLabel: "Ruff Ruff!",
  },
]

const InstructionsPanelProps: InstructionsPanelPropsType = { stepPropsGroup }

const listItems = [
  { title: "BitCoin", year: 1994 },
  { title: "Doge Coin", year: 1972 },
  { title: "Baby Doge Coin", year: 1974 },
]

const multiSelectProps = { listItems, className: css.multiPicker }

function Dashboard() {
  return (
    <div className={css.main}>
      <div className={css.instructions}>
        <InstructionsPanel {...InstructionsPanelProps} />
      </div>
      <Spacer />
      <div className={css.controls}>
        <MyMultiSelect {...multiSelectProps} />
      </div>
      <Spacer />
      <div className={css.charts}></div>
      <Spacer />
    </div>
  )
}

export default Dashboard

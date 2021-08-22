import React from "react"

import InstructionStep from "../InstructionStep/InstructionStep"
import { InstructionStepProps } from "../InstructionStep/types"
import { InstructionsPanelPropsType } from "../InstructionsPanel/types"

import css from "./InstructionsPanel.module.scss"

const renderSteps = (stepPropsGroup: InstructionStepProps[]) => {
  return stepPropsGroup.map((stepProps) => <InstructionStep {...stepProps} />)
}

function InstructionsPanel(props: InstructionsPanelPropsType) {
  const { stepPropsGroup } = props
  return <div className={css.main}>{renderSteps(stepPropsGroup)}</div>
}

export default InstructionsPanel

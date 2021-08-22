import React from "react"

import Button from "react-bootstrap/Button"

import css from "./InstructionStep.module.scss"

import { InstructionStepProps } from "./types"

function InstructionStep(props: InstructionStepProps) {
  const { stepNum = 0, label = "none", buttonLabel = "none" } = props

  return (
    <div className={css.main}>
      <div className={css.card}>
        <div className={css.header}>
          <div className={css.stepNum}>{stepNum}</div>
          <div className={css.instruction}>{label}</div>
        </div>
        <Button className={css.button1}>{buttonLabel}</Button>
      </div>
    </div>
  )
}

export default InstructionStep

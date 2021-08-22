import React from "react"

import css from "./Dashboard.module.scss"

import Spacer from "../Spacer/Spacer"
import RuleMaker from "Components/RuleMaker/RuleMaker"

function Dashboard() {
  return (
    <div className={css.main}>
      <div className={css.instructions}></div>
      <Spacer />
      <div className={css.controls}>
        <RuleMaker />
      </div>
      <Spacer />
      <div className={css.charts}></div>
      <Spacer />
    </div>
  )
}

export default Dashboard

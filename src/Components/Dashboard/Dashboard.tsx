import React from "react"

import css from "./Dashboard.module.scss"

import Spacer from "../Spacer/Spacer"
import RuleMaker from "Components/RuleMaker/RuleMaker"

function Dashboard() {
  return (
    <div className={css.main}>
      <div className={css.controls}>
        <RuleMaker />
      </div>
    </div>
  )
}

export default Dashboard

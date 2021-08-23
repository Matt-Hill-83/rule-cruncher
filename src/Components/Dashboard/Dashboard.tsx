import React from "react"

import css from "./Dashboard.module.scss"

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

import React from "react"

import css from "./RuleMaker.module.scss"

import MyTable from "Components/MyTable/MyTable"

export default function RuleMaker() {
  return (
    <div className={css.main}>
      <MyTable />
    </div>
  )
}

import React from "react"

import css from "./RuleMaker.module.scss"

import MyTable2 from "Components/MyTable2/MyTable2"
// import MyTable from "Components/MyTable/MyTable"

export default function RuleMaker() {
  return (
    <div className={css.main}>
      <MyTable2 />
    </div>
  )
}

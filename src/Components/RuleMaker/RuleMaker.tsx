import React from "react"

import css from "./RuleMaker.module.scss"

import MyTable2 from "Components/MyTable2/MyTable2"
import MyTable from "Components/MyTable/MyTable"
import MyTable1 from "Components/MyTable/MyTable1"

export default function RuleMaker() {
  const data = [{}]

  return (
    <div className={css.main}>
      {/* <MyTable2 /> */}
      {/* <MyTable1 /> */}
      {/* <MyTable /> */}
      <MyTable data={data} />
    </div>
  )
}

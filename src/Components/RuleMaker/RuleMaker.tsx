import React from "react"

import css from "./RuleMaker.module.scss"

import MyTable2 from "Components/MyTable2/MyTable2"
import MyTable from "Components/MyTable/MyTable"
import MyReactTable4 from "Components/MyReactTable4/MyReactTable4"
import MyTable1 from "Components/MyTable1/MyTable1"
import MyTable3 from "Components/MyTable3/MyTable3"

export default function RuleMaker() {
  const data = [{}]

  return (
    <div className={css.main}>
      {/* <MyTable /> */}
      <MyTable3 />
      {/* <MyTable1 /> */}
      {/* <MyTable2 /> */}
      {/* <MyTable data={data} /> */}
      {/* <MyReactTable4 theData={data} /> */}
    </div>
  )
}

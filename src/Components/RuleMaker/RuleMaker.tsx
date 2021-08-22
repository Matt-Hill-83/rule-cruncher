import React from "react"

import css from "./RuleMaker.module.scss"

import MyTable2 from "Components/MyTable2/MyTable2"
import MyTable from "Components/MyTable/MyTable"
import MyTable1 from "Components/MyTable/MyTable1"
import MyReactTable4 from "Components/MyReactTable4/MyReactTable4"

export default function RuleMaker() {
  const data = [{}]

  return (
    <div className={css.main}>
      {/* <MyTable /> */}
      {/* <MyTable1 /> */}
      <MyTable2 />
      {/* <MyTable data={data} /> */}
      {/* <MyReactTable4 theData={data} /> */}
    </div>
  )
}

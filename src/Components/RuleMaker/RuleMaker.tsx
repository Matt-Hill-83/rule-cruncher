import React from "react"

import css from "./RuleMaker.module.scss"

import MyMultiSelect from "Components/MultiSelect/MultiSelect"

const listItems = [
  { title: "Alligator", year: 1994 },
  { title: "Bunny", year: 1972 },
  { title: "Caterpillar", year: 1974 },
]

const multiSelectProps = { listItems, className: css.multiPicker }

export default function RuleMaker() {
  return (
    <div className={css.main}>
      <MyMultiSelect {...multiSelectProps} />
    </div>
  )
}

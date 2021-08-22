import React from "react"

import css from "./RuleMaker.module.scss"

import MyMultiSelect from "Components/MultiSelect/MultiSelect"

const listItems = [
  { title: "BitCoin", year: 1994 },
  { title: "Doge Coin", year: 1972 },
  { title: "Baby Doge Coin", year: 1974 },
]

const multiSelectProps = { listItems, className: css.multiPicker }

export default function RuleMaker() {
  return (
    <div className={css.main}>
      <MyMultiSelect {...multiSelectProps} />
    </div>
  )
}

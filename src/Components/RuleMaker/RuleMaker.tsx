import React, { useState, useEffect } from "react"
import css from "./RuleMaker.module.scss"

import InputTable from "Components/InputTable/InputTable"
import { IInputRow } from "./types"

import * as data from "./data"
import OutputTable from "Components/OutputTable/OutputTable"
import cx from "classnames"

export default function RuleMaker() {
  const { inputTableRows, restaurantList, inputTableDummyRow } = data
  const defaultData: IInputRow[] = []

  const [inputTableData, setInputTableData] = useState(defaultData)

  useEffect(() => {
    setInputTableData(inputTableRows)
  }, [inputTableRows])

  const updateTableData = (newRows: IInputRow[]) => {
    setInputTableData(newRows)
  }

  const inputTableProps = {
    restaurantList,
    inputTableRows: inputTableData,
    dummyRow: inputTableDummyRow,
    onChange: updateTableData,
  }

  return (
    <div className={css.main}>
      <div className={cx(css.card, css.card1)}>
        <div className={cx(css.header)}>
          <div className={css.title}>Explicit Rules</div>
        </div>
        <div className={cx(css.table)}>
          <InputTable {...inputTableProps} />
        </div>
      </div>
      <div className={cx(css.card, css.card2)}>
        <div className={cx(css.header)}>
          <div className={css.title}>Derived Rules</div>
        </div>
        <div className={cx(css.table)}>
          <OutputTable {...inputTableProps} />
        </div>
      </div>
    </div>
  )
}

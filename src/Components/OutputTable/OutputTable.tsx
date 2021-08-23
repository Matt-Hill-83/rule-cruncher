import { useEffect, useState } from "react"

import cx from "classnames"
import DataGrid from "react-data-grid"

import { IUpdateRestaurant, IUpdateRow } from "./types"

import css from "./OutputTable.module.scss"

const multiSelectInputWidth = 200

export default function OutputTable(props: any) {
  const { inputTableRows, dummyRow } = props
  const [rows, setRows] = useState([dummyRow])

  useEffect(() => {
    console.log("useEffect - IT") // zzz
    setRows(inputTableRows)
  }, [inputTableRows])

  const columns = [
    {
      key: "id",
      name: "Rule Id",
      width: 20,
    },
    {
      key: "alligator",
      name: "Alligator",
      formatter: (info: any) => renderButton(info),
      width: 30,
    },
    {
      key: "bunny",
      name: "Bunny",
      formatter: (info: any) => renderButton(info),
      width: 30,
    },
    {
      key: "cat",
      name: "Cat",
      formatter: (info: any) => renderButton(info),
      width: 30,
    },
    {
      key: "",
      name: "",
      formatter: (info: any) => renderArrow(info),
      width: 200,
    },
    {
      key: "restaurant",
      name: "Restaurant",
      className: css.restaurant,
      formatter: (info: any) => renderRestaurant(info),
      width: multiSelectInputWidth,
    },
  ]

  const renderArrow = (info: any) => {
    return <div className={css.arrow}>{`===>`}</div>
  }

  const renderRestaurant = (info: any) => {
    const { row, column } = info
    const columnName: string = column.key
    const value: string = row[columnName]

    return <div className={css.restaurant}>{value}</div>
  }

  const renderButton = (info: any) => {
    const { row, column } = info
    const columnName: string = column.key
    const value: boolean = row[columnName]

    const className = cx(css.valueButton, {
      [css.true]: value,
      [css.false]: !value,
    })

    return <div className={className}>{value ? "true" : ""}</div>
  }

  return <DataGrid className={css.main} columns={columns} rows={rows} />
}

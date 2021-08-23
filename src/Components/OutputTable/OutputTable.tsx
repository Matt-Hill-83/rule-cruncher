import { useEffect, useState } from "react"
import cx from "classnames"
import DataGrid from "react-data-grid"

import { IInputRow } from "Components/RuleMaker/types"

import css from "./OutputTable.module.scss"
import { AnimalNames } from "Constants/General"

const multiSelectInputWidth = 200

function convertIntToBinary(num: number, digits: number) {
  var out = ""
  while (digits--) out += (num >> digits) & 1
  return out
}

const processRows = (rows: IInputRow[]) => {
  const allPossibleRows = []

  const animalNames = [
    AnimalNames.ALLIGATOR,
    AnimalNames.BUNNY,
    AnimalNames.CAT,
  ]

  const numAnimals = animalNames.length
  const numRows = Math.pow(2, numAnimals)
  console.log("numRows", numRows) // zzz

  const test = convertIntToBinary(11, numAnimals)
  console.log("test", test) // zzz

  return rows
}

export default function OutputTable(props: any) {
  const { inputTableRows, dummyRow } = props
  const [rows, setRows] = useState([dummyRow])

  useEffect(() => {
    const newRows = processRows(inputTableRows)
    setRows(newRows)
  }, [inputTableRows])

  const columns = [
    {
      key: "id",
      sortable: true,
      name: "Rule Id",
      width: 20,
    },
    {
      key: "alligator",
      sortable: true,
      name: "Alligator",
      formatter: (info: any) => renderButton(info),
      width: 30,
    },
    {
      key: "bunny",
      sortable: true,
      name: "Bunny",
      formatter: (info: any) => renderButton(info),
      width: 30,
    },
    {
      key: "cat",
      sortable: true,
      name: "Cat",
      formatter: (info: any) => renderButton(info),
      width: 30,
    },
    {
      key: "",
      sortable: true,
      name: "",
      formatter: (info: any) => renderArrow(info),
      width: 200,
    },
    {
      key: "restaurant",
      sortable: true,
      name: "Restaurant",
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

  const sortRows =
    (initialRows: any, sortColumn: any, sortDirection: any) => (rows: any) => {
      const comparer: any = (a: any, b: any) => {
        if (sortDirection === "ASC") {
          return a[sortColumn] > b[sortColumn] ? 1 : -1
        } else if (sortDirection === "DESC") {
          return a[sortColumn] < b[sortColumn] ? 1 : -1
        }
      }
      return sortDirection === "NONE" ? initialRows : [...rows].sort(comparer)
    }

  return (
    <DataGrid
      columns={columns}
      rowGetter={(i: number) => rows[i]}
      rowsCount={ROW_COUNT}
      minHeight={500}
      onGridSort={(sortColumn, sortDirection) =>
        setRows(sortRows(initialRows, sortColumn, sortDirection))
      }
    />
  )

  return (
    <DataGrid
      className={css.main}
      columns={columns}
      rows={rows}
      // onGridSort={(sortColumn, sortDirection) =>
      //   setRows(sortRows(initialRows, sortColumn, sortDirection))
      // }
    />
  )
}

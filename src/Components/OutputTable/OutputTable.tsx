import { useEffect, useState } from "react"
import cx from "classnames"
import DataGrid from "react-data-grid"

import { IInputRow } from "Components/RuleMaker/types"

import css from "./OutputTable.module.scss"
import { AnimalNames } from "Constants/General"

const multiSelectInputWidth = 200

function convertIntToBinary(num: number, digits: number) {
  var outputString = ""
  while (digits--) outputString += (num >> digits) & 1
  return outputString
}

const processRows = (rows: IInputRow[]) => {
  const allPossibleRows = getAllPossibleRows(rows)
  const realRows = rows

  allPossibleRows.forEach((derivedRow) => {
    realRows.forEach((realRow) => {
      let isMatch = true

      const trueA = realRow.alligator === true
      const trueB = realRow.bunny === true
      const trueC = realRow.cat === true

      const matchA = realRow.alligator === derivedRow.alligator
      const matchB = realRow.bunny === derivedRow.bunny
      const matchC = realRow.cat === derivedRow.cat

      if (trueA) {
        isMatch = isMatch && matchA
      }
      if (trueB) {
        isMatch = isMatch && matchB
      }
      if (trueC) {
        isMatch = isMatch && matchC
      }

      if (isMatch) {
        derivedRow.id = realRow.id
        derivedRow.restaurant = realRow.restaurant
        derivedRow.isMatch = true
      } else {
        if (!derivedRow.isMatch) {
          derivedRow.restaurant = "--none--"
          derivedRow.id = 999
        }
      }
    })
  })

  allPossibleRows.sort((a: any, b: any) =>
    a.id > b.id ? 1 : b.id > a.id ? -1 : 0
  )

  return allPossibleRows
}

const getAllPossibleRows = (rows: IInputRow[]) => {
  console.log("rows", rows) // zzz
  const allPossibleRows: IInputRow[] = []

  const animalNames = [
    AnimalNames.ALLIGATOR,
    AnimalNames.BUNNY,
    AnimalNames.CAT,
  ]

  const numAnimals = animalNames.length
  const numRows = Math.pow(2, numAnimals)

  const binaries = []

  for (let index = 0; index < numRows; index++) {
    const test = convertIntToBinary(index, numAnimals).split("")
    binaries.push(test)
  }

  binaries.forEach((binary) => {
    const newRow = {
      [AnimalNames.ALLIGATOR.toLowerCase()]: binary[0] === "1" ? true : false,
      [AnimalNames.BUNNY.toLowerCase()]: binary[1] === "1" ? true : false,
      [AnimalNames.CAT.toLowerCase()]: binary[2] === "1" ? true : false,
      restaurant: "",
    }
    allPossibleRows.push(newRow)
  })

  console.log("allPossibleRows", allPossibleRows) // zzz
  return allPossibleRows
  // return rows
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

  return <DataGrid className={css.main} columns={columns} rows={rows} />
}

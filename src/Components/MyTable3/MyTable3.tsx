import { useState } from "react"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import DataGrid from "react-data-grid"
import cx from "classnames"
import { DraggableRowRenderer } from "./DraggableRowRenderer"
import { Button } from "react-bootstrap"

import MyMultiSelect from "Components/MultiSelect/MultiSelect"

import { IUpdateRestaurant, IUpdateRow } from "./types"

import css from "./MyTable3.module.scss"

function createRows() {
  const rows = [
    {
      id: 0,
      alligator: true,
      bunny: false,
      cat: false,
      restaurant: "Applebees",
    },
    { id: 1, alligator: false, bunny: true, cat: true, restaurant: "Denny's" },
    {
      id: 2,
      alligator: true,
      bunny: false,
      cat: false,
      restaurant: "Chilli's",
    },
  ]
  return rows
}

export default function MyTable3(props: any) {
  const { restaurantList } = props

  const [rows, setRows] = useState(createRows)

  const columns = [
    {
      key: "id",
      name: "Rule Id",
      width: 30,
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
      width: 30,
    },
    {
      key: "restaurant",
      name: "Restaurant",
      formatter: (info: any) => renderRestaurant(info),
      width: 300,
    },
  ]

  const clickButton = ({ columnName, rowId }: IUpdateRow) => {
    updateRow({
      columnName,
      rowId,
    })
  }

  const updateRow = ({ columnName, rowId }: IUpdateRow) => {
    const newRows = [...rows]

    const row = newRows.find((row) => row.id === rowId)
    if (row && columnName) {
      // messy gymnastics to avoid a type error when using object bracket notation
      const testRow: { [key: string]: any } = { ...row }
      testRow[columnName] = !testRow[columnName]
      Object.assign(row, testRow)

      setRows(newRows)
    }
  }

  const updateRestaurant = ({ newValue, rowId }: IUpdateRestaurant) => {
    console.log("updateRestaurant") // zzz
    const newRows = [...rows]

    const row = newRows.find((row) => row.id === rowId)
    if (row) {
      row.restaurant = newValue
      console.log("setting rows") // zzz
      setRows(newRows)
    }
  }

  const renderArrow = (info: any) => {
    return <div className={css.arrow}>{`===>`}</div>
  }

  const renderRestaurant = (info: any) => {
    console.log("renderRestaurant") // zzz
    const listItems = restaurantList

    const { row, column } = info
    const columnName: string = column.key
    const value: string = row[columnName]

    const multiSelectProps = {
      initialValue: value,
      listItems,
      className: css.multiPicker,
      onChange: (newValue: string) =>
        updateRestaurant({ newValue, rowId: row.id }),
    }

    return (
      <div className={css.restaurant}>
        <MyMultiSelect {...multiSelectProps} />
      </div>
    )
  }

  const renderButton = (info: any) => {
    const { row, column } = info
    const columnName: string = column.key
    const value: boolean = row[columnName]

    const className = cx(css.valueButton, {
      [css.true]: value,
      [css.false]: !value,
    })

    return (
      <Button
        onClick={() => clickButton({ columnName, rowId: row.id })}
        className={className}
      >
        {value ? "true" : ""}
      </Button>
    )
  }

  function onRowReorder(fromIndex: number, toIndex: number) {
    const newRows = [...rows]
    newRows.splice(toIndex, 0, newRows.splice(fromIndex, 1)[0])

    setRows(newRows)
  }

  console.log("rows", rows) // zzz

  return (
    <DndProvider backend={HTML5Backend}>
      <DataGrid
        className={css.main}
        columns={columns}
        rows={rows}
        rowRenderer={(p) => (
          <DraggableRowRenderer {...p} onRowReorder={onRowReorder} />
        )}
      />
    </DndProvider>
  )
}

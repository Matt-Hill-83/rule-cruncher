import { useState } from "react"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

import DataGrid from "react-data-grid"
import { DraggableRowRenderer } from "./DraggableRowRenderer"

import css from "./MyTable3.module.scss"
import { Button } from "react-bootstrap"

function createRows() {
  const rows = [
    { id: 0, alligator: true, bunny: false, cat: false },
    { id: 1, alligator: false, bunny: true, cat: true },
    { id: 2, alligator: true, bunny: false, cat: false },
  ]
  return rows
}

export default function MyTable3() {
  const [rows, setRows] = useState(createRows)

  const columns = [
    {
      key: "alligator",
      name: "Alligator",
      formatter: (info: any) => renderAlligator(info),
      width: 30,
    },
    {
      key: "bunny",
      name: "Bunny",
      formatter: (info: any) => renderAlligator(info),
      width: 30,
    },
    {
      key: "cat",
      name: "Cat",
      formatter: (info: any) => renderAlligator(info),
      width: 30,
    },
  ]

  // Todo - add rule number and drag handle
  // Todo - add output table

  const clickButton = ({
    columnName,
    rowId,
  }: {
    columnName: string
    rowId: number
  }) => {
    const newRows = [...rows]

    const row = newRows.find((row) => row.id === rowId)
    console.log("row", row) // zzz
    if (row && columnName) {
      row.alligator = !row.alligator
      setRows(newRows)
    }
  }

  const renderAlligator = (info: any) => {
    const { row, column } = info
    console.log("info", info) // zzz

    const columnName: string = column.key
    console.log("columnName", columnName) // zzz
    const value = row[columnName]

    return (
      <Button
        onClick={() => clickButton({ columnName, rowId: row.id })}
        className={css.valueButton}
      >
        {value ? "true" : "false"}
      </Button>
    )
  }

  console.log("rows", rows) // zzz
  function onRowReorder(fromIndex: number, toIndex: number) {
    const newRows = [...rows]
    newRows.splice(toIndex, 0, newRows.splice(fromIndex, 1)[0])

    setRows(newRows)
  }

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

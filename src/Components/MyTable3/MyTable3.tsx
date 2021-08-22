import { useState } from "react"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

// import { DraggableRowRenderer } from './components/RowRenderers';
import DataGrid from "react-data-grid"
import { DraggableRowRenderer } from "./DraggableRowRenderer"

import css from "./MyTable3.module.scss"
import { Button } from "react-bootstrap"

function createRows() {
  const rows = [
    { id: 0, alligator: true, bunny: false },
    { id: 1, alligator: false, bunny: true },
    { id: 2, alligator: true, bunny: false },
  ]
  return rows
}

const clickButton = (info: any) => {
  console.log("info", info) // zzz
}

const renderAlligator = (info: any) => {
  const { row } = info
  const { alligator } = row

  return (
    <Button onClick={() => clickButton(info)} className={css.valueButton}>
      {alligator ? "true" : "false"}
    </Button>
  )
}

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
    key: "caterpillar",
    name: "Caterpillar",
    formatter: (info: any) => renderAlligator(info),
    width: 30,
  },
]

export default function MyTable3() {
  const [rows, setRows] = useState(createRows)

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

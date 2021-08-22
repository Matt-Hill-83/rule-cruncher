import React from "react"

import css from "./MyTable.module.scss"

import MyMultiSelect from "Components/MultiSelect/MultiSelect"
import MaterialTable from "material-table"

const listItems = [
  { title: "Alligator", year: 1994 },
  { title: "Bunny", year: 1972 },
  { title: "Caterpillar", year: 1974 },
]

const multiSelectProps = { listItems, className: css.multiPicker }

export default function MyTable() {
  return (
    <div className={css.main}>
      <MaterialTable
        columns={[
          { title: "Adı", field: "name" },
          { title: "Year", field: "birthYear", type: "numeric" },
          {
            field: "url",
            title: "Avatar",
            render: () => (
              <div style={{ width: 50, borderRadius: "50%" }}>
                <MyMultiSelect {...multiSelectProps} />
              </div>
            ),
          },
        ]}
        data={[
          {
            name: "Mehmet",
            surname: "Baran",
            birthYear: 1987,
          },
        ]}
        title="Demo Title"
      />
    </div>
  )
}

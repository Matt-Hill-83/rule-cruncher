import React from "react"

import css from "./MyTable1.module.scss"

import MyMultiSelect from "Components/MultiSelect/MultiSelect"
import MaterialTable, { MTableToolbar } from "material-table"

const listItems = [
  { title: "Alligator", year: 1994 },
  { title: "Bunny", year: 1972 },
  { title: "Caterpillar", year: 1974 },
]

const multiSelectProps = { listItems, className: css.multiPicker }

export default function MyTable1() {
  return (
    <div className={css.main}>
      <MaterialTable
        options={{
          toolbar: false,
        }}
        components={{
          Toolbar: (props) => (
            <div style={{ backgroundColor: "#e8eaf5" }}>
              <MTableToolbar {...props} />
            </div>
          ),
        }}
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

import React from "react"

import css from "./MyTable1.module.scss"

import MyMultiSelect from "Components/MultiSelect/MultiSelect"
import MaterialTable from "material-table"

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
          paging: false,
        }}
        components={{}}
        columns={[
          { title: <MyMultiSelect {...multiSelectProps} />, field: "name" },
          { title: "Bunny", field: "birthYear", type: "numeric" },
          {
            field: "url",
            title: "Avatar",
            render: () => <MyMultiSelect {...multiSelectProps} />,
          },
          {
            field: "url",
            title: "Avatar",
            render: () => <MyMultiSelect {...multiSelectProps} />,
          },
          {
            field: "url",
            title: "Avatar",
            render: () => <MyMultiSelect {...multiSelectProps} />,
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

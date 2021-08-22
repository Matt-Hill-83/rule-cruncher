import React from "react"

import css from "./Dashboard.module.scss"

import Spacer from "../Spacer/Spacer"
import RuleMaker from "Components/RuleMaker/RuleMaker"
import MaterialTable from "material-table"
import MyMultiSelect from "Components/MultiSelect/MultiSelect"

const listItems = [
  { title: "Alligator", year: 1994 },
  { title: "Bunny", year: 1972 },
  { title: "Caterpillar", year: 1974 },
]

const multiSelectProps = { listItems, className: css.multiPicker }

function Dashboard() {
  return (
    <div className={css.main}>
      <div className={css.instructions}>
        <div style={{ maxWidth: "100%" }}>
          <MaterialTable
            columns={[
              { title: "Adı", field: "name" },
              { title: "Year", field: "birthYear", type: "numeric" },
              {
                title: "City",
                field: "birthCity",
                lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
              },
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
                birthCity: 63,
              },
            ]}
            title="Demo Title"
          />
        </div>
      </div>
      <Spacer />
      <div className={css.controls}>
        <RuleMaker />
      </div>
      <Spacer />
      <div className={css.charts}></div>
      <Spacer />
    </div>
  )
}

export default Dashboard

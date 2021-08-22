import React from "react"

import css from "./Dashboard.module.scss"

import Spacer from "../Spacer/Spacer"
import RuleMaker from "Components/RuleMaker/RuleMaker"
import MaterialTable from "material-table"

function Dashboard() {
  return (
    <div className={css.main}>
      <div className={css.instructions}>
        <div style={{ maxWidth: "50%" }}>
          <MaterialTable
            columns={[
              { title: "Adı", field: "name" },
              { title: "Soyadı", field: "surname" },
              { title: "Doğum Yılı", field: "birthYear", type: "numeric" },
              {
                title: "Doğum Yeri",
                field: "birthCity",
                lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
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

import React, { Dispatch, SetStateAction } from "react"

import css from "./LeftNav.module.scss"

import { IMyState } from "../../types"

interface ITopNavProps {
  myState?: IMyState
  weather?: string
  setMyState?: Dispatch<SetStateAction<IMyState>>
}

function LeftNav(props: ITopNavProps) {
  const { myState } = props
  return (
    <div className={css.main}>
      <div className={css.textBox}>{JSON.stringify(myState)}</div>
    </div>
  )
}

export default LeftNav

import React from "react"
import css from "./PowerPanel.module.scss"

import Button from "react-bootstrap/esm/Button"
import { IPowerPanelProps } from "../../types"

function PowerPanel(props: { powerPanelProps: IPowerPanelProps }) {
  const { myState, setMyState } = props.powerPanelProps

  const localSetMyState = () => {
    setMyState((state) => {
      return { ...state, show: !state.show }
    })
  }

  return (
    <div className={css.main}>
      <div className={css.display}>{JSON.stringify(myState)}</div>
      <Button onClick={localSetMyState}>test</Button>
    </div>
  )
}

export default PowerPanel

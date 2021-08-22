import React from "react"
import cx from "classnames"

import css from "./Spacer.module.scss"

import { SpacerPropsInter } from "./types"

function Spacer(props: SpacerPropsInter) {
  const {
    color = "rgb(112, 152, 196)",
    spacerWidthPct = 98,
    borderWidthPx = 1,
  } = props

  const styleProps = {
    borderBottomColor: color,
    borderWidth: `${borderWidthPx}px`,
    width: `${spacerWidthPct}%`,
  }

  return <div className={cx(css.main)} style={styleProps}></div>
}

export default Spacer

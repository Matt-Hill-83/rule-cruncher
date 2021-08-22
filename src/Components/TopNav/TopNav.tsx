import css from "./TopNav.module.scss"

import { IPowerPanelProps } from "../../types"
import PowerPanel from "../PowerPanel/PowerPanel"

interface ITopNavProps {
  // powerPanelProps: any
  powerPanelProps: IPowerPanelProps
}

function TopNav(props: ITopNavProps) {
  const { powerPanelProps } = props

  return (
    <div className={css.main}>
      Crypto Sniffer
      <PowerPanel powerPanelProps={powerPanelProps} />
    </div>
  )
}

export default TopNav

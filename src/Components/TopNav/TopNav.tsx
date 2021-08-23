import css from "./TopNav.module.scss"

import { IPowerPanelProps } from "../../types"
import PowerPanel from "../PowerPanel/PowerPanel"

interface ITopNavProps {
  // powerPanelProps: any
  powerPanelProps: IPowerPanelProps
}

function TopNav(props: ITopNavProps) {
  return (
    <div className={css.main}>
      <div className={css.title}>Rule Cruncher</div>
    </div>
  )
}

export default TopNav

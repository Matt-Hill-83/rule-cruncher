import React, { useEffect, useState } from "react"

import css from "./App.module.scss"
import Dashboard from "./Components/Dashboard/Dashboard"
import TopNav from "./Components/TopNav/TopNav"
import LeftNav from "./Components/LeftNav/LeftNav"

import { IMyState, IPowerPanelProps } from "./types"

function App() {
  let defaultState: IMyState = { power: 0, show: true }

  const [myState, setMyState] = useState<IMyState>(defaultState)

  const setDefaultState = async () => {
    setTimeout(() => {
      setMyState((oldState) => {
        return {
          ...oldState,
          power: 3,
        }
      })
    }, 0)
  }

  useEffect(() => {
    setDefaultState()
  }, [])

  const powerPanelProps: IPowerPanelProps = {
    myState,
    setMyState,
  }

  console.log("App.js") // zzz
  return (
    <div className={css.main}>
      {JSON.stringify(myState)}
      <TopNav powerPanelProps={powerPanelProps}></TopNav>
      <LeftNav myState={myState} setMyState={setMyState} />
      <Dashboard />
    </div>
  )
}

export default App

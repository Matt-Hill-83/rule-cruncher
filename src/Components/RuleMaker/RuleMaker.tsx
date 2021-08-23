import React from "react"

import css from "./RuleMaker.module.scss"

import MyTable3 from "Components/MyTable3/MyTable3"

// import { useDispatch, useSelector } from "react-redux"

// import { sniff } from "../../state/action-creators"

export default function RuleMaker() {
  // const dispatch = useDispatch()

  // const state2 = useSelector((state) => state.crypto)

  // let defaultState: IMyState = { power: 0, show: true }

  // const [myState, setMyState] = useState < IMyState > defaultState
  // const setDefaultState = async () => {
  //   setTimeout(() => {
  //     setMyState((oldState) => {
  //       return {
  //         ...oldState,
  //         power: 3,
  //       }
  //     })
  //   }, 0)
  // }

  // useEffect(() => {
  //   setDefaultState()
  // }, [])

  return (
    <div className={css.main}>
      <MyTable3 />
    </div>
  )
}

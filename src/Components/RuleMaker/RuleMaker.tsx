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

  const rows = [
    {
      id: 0,
      alligator: true,
      bunny: false,
      cat: false,
      restaurant: "Applebees",
    },
    { id: 1, alligator: false, bunny: true, cat: true, restaurant: "Denny's" },
    {
      id: 2,
      alligator: true,
      bunny: false,
      cat: false,
      restaurant: "Chilli's",
    },
  ]

  const inputTableProps = {
    restaurantList: [
      { title: "Applebees", year: 1994 },
      { title: "Burger King", year: 1972 },
      { title: "Chilli's", year: 1974 },
      { title: "Denny's", year: 1974 },
    ],
    rows,
  }

  return (
    <div className={css.main}>
      <MyTable3 {...inputTableProps} />
    </div>
  )
}

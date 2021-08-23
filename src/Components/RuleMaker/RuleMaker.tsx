import React, { useState, useEffect } from "react"

import css from "./RuleMaker.module.scss"

import InputTable from "Components/InputTable/InputTable"
import { IInputRow } from "./types"
import { RestaurantNames } from "Constants/General"
import * as data from "./data"

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

  const { inputTableRows, restaurantList, inputTableDummyRow } = data
  const defaultData: IInputRow[] = []

  const [inputTableData, setInputTableData] = useState(defaultData)

  useEffect(() => {
    setInputTableData(inputTableRows)
  }, [inputTableRows])

  const updateTableData = (newRows: IInputRow[]) => {
    console.log("updateTableData") // zzz
    setInputTableData(newRows)
  }

  const inputTableProps = {
    restaurantList,
    inputTableRows: inputTableData,
    dummyRow: inputTableDummyRow,
    onChange: updateTableData,
  }

  return (
    <div className={css.main}>
      <InputTable {...inputTableProps} />
    </div>
  )
}

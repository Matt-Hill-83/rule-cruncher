import React from "react"
import css from "./Counter.module.scss"

import { useDispatch, useSelector } from "react-redux"
import {
  depositMoney,
  sniff,
  withdrawMoney,
  bankrupt,
} from "../../state/action-creators"

import { RootState } from "../../state/reducers"
import Button from "react-bootstrap/esm/Button"

function Counter() {
  const state = useSelector((state: RootState) => state.bank)
  const state2 = useSelector((state: RootState) => state.crypto)
  const dispatch = useDispatch()

  return (
    <div className={css.main}>
      <div className={css.total}>{state}</div>
      <div className={css.total}>{state2}</div>
      <Button
        className={css.button}
        onClick={() => dispatch(depositMoney(1000))}
      >
        Deposit
      </Button>
      <Button
        className={css.button}
        onClick={() => dispatch(withdrawMoney(1000))}
      >
        Withdraw
      </Button>
      <Button className={css.button} onClick={() => dispatch(bankrupt())}>
        Bankrupt
      </Button>
    </div>
  )
}

export default Counter

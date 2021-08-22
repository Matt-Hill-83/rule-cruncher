import { ActionType } from "../action-types"

export const sniff = (payload: string) => {
  return {
    type: "SNIFF",
    payload,
  }
}

export const depositMoney = (amount: number) => {
  return {
    type: ActionType.DEPOSIT,
    payload: amount,
  }
}

export const withdrawMoney = (amount: number) => {
  return {
    type: ActionType.WITHDRAW,
    payload: amount,
  }
}

export const bankrupt = () => {
  return {
    type: ActionType.BANKRUPT,
  }
}

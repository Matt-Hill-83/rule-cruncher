import { Dispatch, SetStateAction } from "react"
export interface IMyState {
  power: number
  show: boolean
}

export interface IPowerPanelProps {
  myState: IMyState
  setMyState: Dispatch<SetStateAction<IMyState>>
}

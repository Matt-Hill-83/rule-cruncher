import { combineReducers } from "redux"
import bankReducer from "./bankReducer"
import cryptoReducer from "./cryptoReducer"

const reducers = combineReducers({
  bank: bankReducer,
  crypto: cryptoReducer,
})

export default reducers

export type RootState = ReturnType<typeof reducers>

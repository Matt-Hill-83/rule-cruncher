import React from "react"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"

import { useDispatch, useSelector } from "react-redux"

import { sniff } from "../../state/action-creators"

export default function MyMultiSelect(props) {
  const { listItems } = props
  const listItems2 = listItems.map((item) => item.title)
  const dispatch = useDispatch()

  const state2 = useSelector((state) => state.crypto)

  const onChange = (event, newValue) => {
    dispatch(sniff(newValue))
  }

  return (
    <Autocomplete
      value={state2}
      onChange={onChange}
      options={listItems2}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} variant="outlined" />}
    />
  )
}

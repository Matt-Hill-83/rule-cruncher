import React, { useState, useEffect } from "react"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"

export default function MyMultiSelect(props) {
  const { listItems, className, initialValue, onChange } = props
  const options = listItems.map((item) => item.title)

  const [state, setState] = useState("")

  const localOnChange = (event, newValue) => {
    setState(newValue)
    onChange?.(newValue)
  }

  useEffect(() => {
    setState(initialValue)
  }, [initialValue])

  return (
    <Autocomplete
      value={state}
      onChange={localOnChange}
      options={options}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" className={className} />
      )}
    />
  )
}

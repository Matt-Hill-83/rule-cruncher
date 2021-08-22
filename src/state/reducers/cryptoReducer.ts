const initialState = "Agnostic"

const reducer = (
  state: string = initialState,
  action: { type: string; payload: string }
): string => {
  switch (action.type) {
    case "SNIFF":
      console.log("SNIFF") // zzz

      return action.payload

    default:
      return state
  }
}

export default reducer

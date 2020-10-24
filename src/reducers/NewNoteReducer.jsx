import { useReducer } from "react";


const reducer = (state, event) => {

}

export const useNewNoteReducer = () => {
  const [state, dispatch] = useReducer();

  return { state, dispatch }
}
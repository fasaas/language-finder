import React, { createContext, useContext } from 'react'
import { useNewNoteReducer } from '../reducers/NoteReducer';

const Context = createContext();

export const NewNoteProvider = ({ children }) => {
  const { state, dispatch } = useNewNoteReducer();

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
}

export const useNewNoteContext = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useNewNoteContext must be used within <NewNoteProvider>");
  }

  return context
}

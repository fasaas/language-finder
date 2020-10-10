import React, { createContext, useContext, useReducer } from 'react';

const VerbContext = createContext();

const reducer = (state, action) => {
  const currentVerbForm = state.verbForm;
  currentVerbForm[action.type] = action.text;
  return { verbForm: currentVerbForm }
}

const VerbProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { verbForm: {} })

  return (
    <VerbContext.Provider value={{ state, dispatch }}>
      {children}
    </VerbContext.Provider>
  )
}

const useVerbContext = () => {
  const context = useContext(VerbContext);
  if (context === undefined) {
    throw new Error('useVerbContext must be used within a <VerbProvider>')
  }

  return context
}

export { VerbProvider, useVerbContext }

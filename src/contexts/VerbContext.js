import React, { createContext, useContext, useReducer } from 'react';
import { buildEmptyVerbForm } from '../templates/verbForm';

const VerbContext = createContext();

const reducer = (state, action) => {
  const { text, tense, subject } = action
  const currentVerbForm = state.verbForm;
  currentVerbForm[tense].find((item) => item.label === subject).text = text;
  return { verbForm: currentVerbForm }
}

const VerbProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { verbForm: buildEmptyVerbForm() })

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

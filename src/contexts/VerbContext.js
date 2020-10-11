import React, { createContext, useContext, useReducer } from 'react';
import { buildEmptyVerbForm } from '../templates/verbForm';

const VerbContext = createContext();

const reducer = (state, action) => {
  const { text, tense, subject, type } = action
  const currentVerbForm = state.verbForm;
  if (type === 'set-title') {
    currentVerbForm.title = text;
  } else if (type === 'set-infinitive-origin') {
    currentVerbForm.infinitive.origin = text;
  } else if (type === 'set-infinitive-translated') {
    currentVerbForm.infinitive.translated = text;
  } else {
    currentVerbForm.tenses[tense].find((item) => item.label === subject).text = text;
  }
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

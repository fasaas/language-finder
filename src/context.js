import React, { createContext, useContext, useReducer } from 'react'

const StoreContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': {
      const currentCards = state.cards
      currentCards.push(action.content)
      return { cards: currentCards }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { cards: [] })

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}

const useStoreContext = () => {
  const context = useContext(StoreContext)
  if (context === undefined) {
    throw new Error('useStoreContext must be used within a <StoreProvider>')
  }

  return context
}

export { StoreProvider, useStoreContext }

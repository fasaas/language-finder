import React, { useContext, createContext } from 'react';

const CardsContext = createContext();

const CardsProvider = ({ cards, children }) =>
  <CardsContext.Provider value={cards}>{children}</CardsContext.Provider>;

const useCardsProvider = () => {
  const context = useContext(CardsContext);
  if (context === undefined) {
    throw new Error('useCardsProvider must be used within a CardsProvider');
  }
  return context;
};

export { CardsProvider, useCardsProvider };

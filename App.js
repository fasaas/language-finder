import React, { useState, useEffect } from 'react';
import { CardsProvider } from './src/context';
import { Layout } from './src/components';
import { getLanguageCards } from './src/api';

export default function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function getCards() {
      const cards = await getLanguageCards();
      setCards(cards);
    }

    getCards();
  }, []);

  return (
    <CardsProvider cards={cards} >
      <Layout />
    </CardsProvider>
  );
}

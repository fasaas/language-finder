import React from 'react';
import { View, Text } from 'react-native';
import { useCardsProvider } from '../context';

const Cards = () => {
  const cards = useCardsProvider();

  const CardsComponents = cards.map((card) => {
    return (
      <Text key={`card-${card.from}-${card.to}`}>
        {card.from} - {card.to}
      </Text>);
  });

  return (
    <View>{CardsComponents}</View>
  );
};


export { Cards };

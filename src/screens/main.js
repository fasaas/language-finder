
import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

const store = [];

const Cards = () => {
  return (
    <FlatList
      data={store}
      renderItem={({ item }) => <Text>{item}</Text>}
    />
  )
}

const Main = ({ navigation }) => {
  return (
    <Button title='Add new Card' onPress={() => navigation.navigate('New')} />
  )
}

export { Main }

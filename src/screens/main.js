
import { Picker } from '@react-native-community/picker';
import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { useStoreContext } from '../context';

const templates = ['Verb'];

const Cards = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Text>{item}</Text>}
    />
  )
}

const Main = ({ navigation }) => {
  const [selection, setSelectedItem] = useState('new');
  const { state } = useStoreContext();
  const { cards } = state || {}
  return (
    <View>
      {cards ? <Cards data={cards} /> : null}
      <Picker
        selectedValue={selection}
        onValueChange={setSelectedItem}
      >
        <Picker.Item label={'New'} value={'new'} />
        {
          templates.map((template, index) =>
            <Picker.Item key={`template-${index}`} label={template} value={template.toLowerCase()} />
          )
        }
      </Picker>
      <Button title='Add new Card' onPress={() => navigation.navigate('New', { selection })} />
    </View>
  )
}

export { Main }

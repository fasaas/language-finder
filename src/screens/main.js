
import { Picker } from '@react-native-community/picker';
import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

const store = [];
const templates = ['Verb'];

// const Cards = () => {
//   return (
//     <FlatList
//       data={store}
//       renderItem={({ item }) => <Text>{item}</Text>}
//     />
//   )
// }

const Main = ({ navigation }) => {
  const [selection, setSelectedItem] = useState('');
  return (
    <View>
      <Picker
        selectedValue={selection}
        onValueChange={setSelectedItem}
      >
        <Picker.Item label={'New'} value={'new'} />
        {
          templates.map((template) => <Picker.Item label={template} value={template.toLowerCase()} />)
        }
      </Picker>
      <Button title='Add new Card' onPress={() => navigation.navigate('New', { selection })} />
    </View>
  )
}

export { Main }

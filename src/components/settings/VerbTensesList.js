import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';

export const VerbTensesList = ({ tenses, set }) => {
  const [newTense, setNewTense] = useState('');
  const isDisabled = newTense.trim() === '' || tenses.includes(newTense);
  return (
    <View>
      <FlatList
        data={tenses}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
      <TextInput
        placeholder='New verb tense'
        value={newTense}
        onChangeText={setNewTense}
      />
      <Button
        disabled={isDisabled}
        title='+'
        onPress={() => set(tenses.concat(newTense))}
      />

    </View>
  )
}

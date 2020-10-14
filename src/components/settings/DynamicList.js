import React, { useState } from 'react';
import { Button, Text, View, FlatList, TextInput } from 'react-native';

export const DynamicList = ({ list, set, placeholder }) => {
  const [newValue, serValue] = useState('');
  const isDisabled = newValue.trim() === '' || list.includes(newValue);
  return (
    <View>
      <FlatList
        data={list}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
      <TextInput
        placeholder={placeholder}
        value={newValue}
        onChangeText={serValue}
      />
      <Button
        disabled={isDisabled}
        title='+'
        onPress={() => set(list.concat(newValue))}
      />
    </View>
  )
}

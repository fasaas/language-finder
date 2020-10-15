import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Button, Text, View, FlatList, TextInput } from 'react-native';

export const DynamicList = ({ list, set, placeholder }) => {
  const [newValue, serValue] = useState('');
  const isDisabled = newValue.trim() === '' || list.includes(newValue);
  return (
    <View style={{ margin: 15 }}>
      <View key='add-form' style={{ flexDirection: "row", marginBottom: 5 }}>
        <TextInput
          style={{ width: '70%' }}
          placeholder={placeholder}
          value={newValue}
          onChangeText={serValue}
        />
        <View style={{ width: '30%' }}>
          <Button
            disabled={isDisabled}
            title='+'
            onPress={() => set(list.concat(newValue))}
          />
        </View>
      </View>
      {
        list?.length > 0 ?
          <FlatList
            style={{ borderColor: 'black', borderTopWidth: 1 }}
            data={list}
            renderItem={({ item }) => (
              <View key={item} style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <Text style={{ width: '70%' }}>{'\u2022'} {item}</Text>
                <AntDesign style={{ width: '30%' }} name="delete" size={24} color="black" onPress={() => {
                  set(list.filter((listItem) => listItem !== item))
                }} />
              </View>
            )}
          />
          : null}
    </View>
  )
}

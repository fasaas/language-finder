import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useVerbContext } from '../contexts/VerbContext';

export const Input = (props) => {
  const { label, text, keys } = props;
  const { dispatch } = useVerbContext();

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
      <Text>{label}</Text>
      <TextInput
        style={{ height: 35, borderWidth: 1, borderColor: "gray" }}
        value={text}
        onChangeText={(text) => dispatch({ ...keys, text })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: "space-evenly"
  }
})

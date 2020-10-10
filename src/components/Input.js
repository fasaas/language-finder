import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useVerbContext } from '../contexts/VerbContext';

export const Input = (props) => {
  const { fromLabel, fromText, fromKey, toLabel, toText, toKey } = props;
  const { dispatch } = useVerbContext();

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
      <Text>{fromLabel}</Text>
      <TextInput style={{ height: 35, borderWidth: 1, borderColor: "gray" }} value={fromText} onChangeText={(text) => dispatch({ type: fromKey, text })} />
      <Text>{toLabel}</Text>
      <TextInput style={{ height: 35, borderWidth: 1, borderColor: "gray" }} value={toText} onChangeText={(text) => dispatch({ type: toKey, text })} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: "space-evenly"
  }
})

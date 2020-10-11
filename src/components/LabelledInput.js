import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useVerbContext } from '../contexts/VerbContext';

export const LabelledInput = (props) => {
  const { label, text, keys, type } = props;
  const { dispatch } = useVerbContext();

  return (
    <View style={styles.container}>
      <Text style={styles.item}>{label}</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={(text) => dispatch({ ...keys || {}, text, type })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    margin: 2
  },
  item: {
    paddingLeft: 15,
    width: '40%'
  },
  input: {
    height: 40,
    width: '50%',
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 15
  }
})

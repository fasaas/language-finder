import React from 'react';
import { TextInput, View } from 'react-native';
import { Collapsible } from '../components/collapsible';
import { useNewNoteContext } from '../contexts/NewNoteContext';

export const SentenceSection = ({ id, state }) => {
  const { from, to } = state;
  const { dispatch } = useNewNoteContext();
  return (
    <Collapsible style={{ marginTop: 10, marginBottom: 10 }}
    >
      <View key='from-sentence'>
        <TextInput
          style={{ borderColor: 'gray', borderWidth: 1 }}
          placeholder='Предложение / Cлово'
          value={from}
          onChangeText={(from) => dispatch({ action: 'set-sentence-from', id, from })}
        />
      </View>
      <View key='to-sentence'>
        <TextInput
          style={{ borderColor: 'gray', borderWidth: 1 }}
          placeholder='Traducción'
          value={to}
          onChangeText={(to) => dispatch({ action: 'set-sentence-to', id, to })}
        />
      </View>
    </Collapsible>
  )
}

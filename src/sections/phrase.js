import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Collapsible } from '../components/collapsible';

export const PhraseSection = ({ id, deleteMe }) => {
  const [from, setFrom] = useState();
  const [to, setTo] = useState();

  return (
    <Collapsible style={{ marginTop: 10, marginBottom: 10 }}
    >
      <View key='from-sentence'>
        <TextInput
          style={{ borderColor: 'gray', borderWidth: 1 }}
          placeholder='Предложение / Cлово'
          value={from}
          onChangeText={setFrom}
        />
      </View>
      <View key='to-sentence'>
        <TextInput
          style={{ borderColor: 'gray', borderWidth: 1 }}
          placeholder='Traducción'
          value={to}
          onChangeText={setTo}
        />
      </View>
    </Collapsible>
  )
}

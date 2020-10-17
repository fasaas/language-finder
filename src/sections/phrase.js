import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

export const PhraseSection = () => {
  const [from, setFrom] = useState();
  const [to, setTo] = useState();

  return (
    <View key='phrase-view' style={{ marginTop: 10, marginBottom: 10 }}>
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
    </View>
  )
}

import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Collapsible } from '../components/collapsible';

export const PhraseSection = ({ from, setFrom, to, setTo }) => {

  return (
    <Collapsible style={{ marginTop: 10, marginBottom: 10 }}
    >
      <View key='from-sentence'>
        <TextInput
          style={{ borderColor: 'gray', borderWidth: 1 }}
          placeholder='Предложение / Cлово'
          value={from}
          onChangeText={(text) => setFrom(text)}
        />
      </View>
      <View key='to-sentence'>
        <TextInput
          style={{ borderColor: 'gray', borderWidth: 1 }}
          placeholder='Traducción'
          value={to}
          onChangeText={(text) => setTo(text)}
        />
      </View>
    </Collapsible>
  )
}

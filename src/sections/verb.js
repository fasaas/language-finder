import { Picker } from '@react-native-community/picker';

import React, { useReducer, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { useSettingsContext } from '../contexts/SettingsContext';

const verbReducer = (state, { tense, subject, value }) => {
  state[tense][subject] = value;
  return state;
}

export const VerbSection = () => {
  const { settingsState } = useSettingsContext();
  const { tenses, subjects } = settingsState;
  const firstTense = tenses[0];
  const [tense, setTense] = useState(firstTense);

  const initialState = {}
  tenses.forEach(tense => initialState[tense] = {});
  const [state, dispatch] = useReducer(verbReducer, initialState);

  return (
    <View key='verb-view' style={{ marginTop: 10, marginBottom: 10 }}>
      <Picker
        selectedValue={tense}
        onValueChange={setTense}
      >
        {tenses.map((tense, index) => <Picker.Item key={`${tense}-${index}`} label={tense} value={tense} />)}
      </Picker>

      {subjects.map((subject) =>
        <View key={`${tense}-${subject}`}>
          <Text>{subject}</Text>
          <TextInput
            value={state[tense][subject]}
            onChangeText={(text) => dispatch({ tense, subject, value: text })}
          />
        </View>
      )}
    </View>
  )
}

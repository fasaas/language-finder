import { Picker } from '@react-native-community/picker';
import React, { useReducer, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useSettingsContext } from '../contexts/SettingsContext';
import { Collapsible } from '../components/collapsible';

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
    <Collapsible style={{ marginTop: 10, marginBottom: 10 }}>
      <View key='verb-picker' style={styles.bottomLine}>
        <Picker
          selectedValue={tense}
          onValueChange={setTense}
        >
          {tenses.map((tense, index) => <Picker.Item key={`${tense}-${index}`} label={tense} value={tense} />)}
        </Picker>
      </View>
      {
        subjects.map((subject) => {
          return (
            <View key={`${tense}-${subject}`} style={styles.inputContainer}>
              <Text style={styles.inputContainerLabel}>{subject}</Text>
              <TextInput
                style={styles.inputContainerTextInput}
                value={state[tense][subject]}
                onChangeText={(text) => dispatch({ tense, subject, value: text })}
              />
            </View>
          )
        })
      }
    </Collapsible>
  )
}

const styles = StyleSheet.create({
  bottomLine: {
    borderBottomWidth: 1
  },
  inputContainer: {
    flexDirection: "row",
    paddingLeft: 15,
  },
  inputContainerLabel: {
    marginTop: 8,
    width: '35%'
  },
  inputContainerTextInput: {
    height: 40,
    width: '60%',
    borderBottomWidth: 1
  }
})

import { Picker } from '@react-native-community/picker';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useSettingsContext } from '../contexts/SettingsContext';
import { Collapsible } from '../components/collapsible';
import { useNewNoteContext } from '../contexts/NewNoteContext';

export const VerbSection = ({ id, state }) => {
  const { settingsState } = useSettingsContext();
  const { tenses, subjects } = settingsState;

  const { dispatch } = useNewNoteContext();

  return (
    <Collapsible style={{ marginTop: 10, marginBottom: 10 }}>
      <View key='verb-picker' style={styles.bottomLine}>
        <Picker
          selectedValue={state.selectedTense}
          onValueChange={(tense) => { if (tense !== state.selectedTense) dispatch({ action: 'set-tense', id, tense }) }}
        >
          {tenses.map((tense, index) => <Picker.Item key={`${state.selectedTense}-${index}`} label={tense} value={tense} />)}
        </Picker>
      </View>
      {
        subjects.map((subject) => {
          return (
            <View key={`${state.selectedTense}-${subject}`} style={styles.inputContainer}>
              <Text style={styles.inputContainerLabel}>{subject}</Text>
              <TextInput
                style={styles.inputContainerTextInput}
                value={state.tenses[state.selectedTense][subject] || ''}
                onChangeText={(conjugation) =>
                  dispatch({ action: 'set-subject-conjugation', id, tense: state.selectedTense, subject, conjugation })
                }
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

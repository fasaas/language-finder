import { Picker } from '@react-native-community/picker';
import { AntDesign } from '@expo/vector-icons';
import React, { useReducer, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useSettingsContext } from '../contexts/SettingsContext';

const verbReducer = (state, { tense, subject, value }) => {
  state[tense][subject] = value;
  return state;
}

export const VerbSection = () => {
  const [expanded, setExpanded] = useState(true);
  const caretDown = <AntDesign onPress={() => setExpanded(!expanded)} name="caretdown" size={24} color="black" />
  const caretRight = <AntDesign onPress={() => setExpanded(!expanded)} name="caretright" size={24} color="black" />

  const { settingsState } = useSettingsContext();
  const { tenses, subjects } = settingsState;
  const firstTense = tenses[0];
  const [tense, setTense] = useState(firstTense);

  const initialState = {}
  tenses.forEach(tense => initialState[tense] = {});
  const [state, dispatch] = useReducer(verbReducer, initialState);

  return expanded ?

    <View key='verb-view' style={{ marginTop: 10, marginBottom: 10 }}>
      <View style={{ flexDirection: "row-reverse" }}>
        {caretDown}
      </View>
      <View key='verb-picker' style={styles.bottomLine}>
        <Picker
          selectedValue={tense}
          onValueChange={setTense}
        >
          {tenses.map((tense, index) => <Picker.Item key={`${tense}-${index}`} label={tense} value={tense} />)}
        </Picker>
      </View>
      {
        subjects.map((subject) =>
          <View key={`${tense}-${subject}`} style={styles.inputContainer}>
            <Text style={styles.inputContainerLabel}>{subject}</Text>
            <TextInput
              style={styles.inputContainerTextInput}
              value={state[tense][subject]}
              onChangeText={(text) => dispatch({ tense, subject, value: text })}
            />
          </View>
        )
      }
    </View>
    :
    caretRight

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
    width: '25%'
  },
  inputContainerTextInput: {
    height: 40,
    width: '70%',
    borderBottomWidth: 1
  }
})

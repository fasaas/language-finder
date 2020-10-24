import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Collapsible } from '../components/collapsible';
import { useNewNoteContext } from '../contexts/NewNoteContext';
import { useSettingsContext } from '../contexts/SettingsContext';

export const AdjectiveSection = ({ id, state }) => {
  const { settingsState } = useSettingsContext();
  const { dispatch } = useNewNoteContext();
  const { genders } = settingsState;

  return (
    <Collapsible style={{ marginTop: 10, marginBottom: 10 }}>
      {
        genders.map((gender) => {
          return (
            <View key={`gender-${gender}`} style={styles.inputContainer}>
              <Text style={styles.inputContainerLabel}>{gender}</Text>
              <TextInput
                style={styles.inputContainerTextInput}
                value={state[gender]}
                onChangeText={(value) => dispatch({ action: 'set-adjective-gender', id, gender, value })}
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

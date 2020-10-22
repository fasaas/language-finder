import React, { useReducer } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Collapsible } from '../components/collapsible';
import { useSettingsContext } from '../contexts/SettingsContext';

const adjectiveReducer = (state, { type, value }) => {
  state[type] = value;
  return state;
}

export const AdjectiveSection = () => {
  const { settingsState } = useSettingsContext();
  const { genders } = settingsState;

  const [state, dispatch] = useReducer(adjectiveReducer, {});

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
                onChangeText={(text) => dispatch({ type: gender, value: text })}
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

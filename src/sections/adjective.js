import React, { useReducer } from 'react';
import { Text, TextInput, View } from 'react-native';
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
    <View key='adjective-view' style={{ marginTop: 10, marginBottom: 10 }}>
      <View key='genders'>
        {
          genders.map((gender) => {
            return (
              <View key={`gender-${gender}`}>
                <Text>{gender}</Text>
                <TextInput
                  value={state[gender]}
                  onChangeText={(text) => dispatch({ type: gender, value: text })}
                />
              </View>
            )
          })
        }
      </View>
    </View>
  )
}

import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { useSettingsContext } from '../contexts/SettingsContext';

export const AdjectiveSection = () => {
  const { settingsState } = useSettingsContext();
  const { genders } = settingsState;

  return (
    <View key='adjective-view' style={{ marginTop: 10, marginBottom: 10 }}>
      <View key='genders'>
        <Text>Add genders here {genders}</Text>
      </View>
    </View>
  )
}

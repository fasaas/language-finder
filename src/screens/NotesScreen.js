import React from 'react';
import { Button, Text } from 'react-native';
import { useSettingsContext } from '../contexts/SettingsContext';

export const NotesScreen = () => {
  const { settingsState } = useSettingsContext();
  console.log("NotesScreen -> settingsState", settingsState)
  return <Text>{JSON.stringify(settingsState, null, 5)}</Text>
}

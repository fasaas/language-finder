import AsyncStorage from '@react-native-community/async-storage';
import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';

const SettingsContext = createContext();

const initialState = {
  originLanguage: '',
  targetLanguage: '',
  tenses: [],
  subjects: [],
  genders: []
}

const reducer = (state, action) => {
  if (action.type === 'save-settings') {
    return action.settings
  }
  return state
}

const SettingsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const loadedSettings = await AsyncStorage.getItem('@language-finder-settings');
        const parsedSettings = JSON.parse(loadedSettings);
        const settings = {
          originLanguage: parsedSettings.originLanguage || '',
          targetLanguage: parsedSettings.targetLanguage || '',
          tenses: parsedSettings.tenses || [],
          subjects: parsedSettings.subjects || [],
          genders: parsedSettings.genders || []
        }
        dispatch({ type: 'save-settings', settings })
      } catch (e) {
        console.error(e)
      }
    }
    loadSettings();
  }, [])

  return (
    <SettingsContext.Provider value={{ settingsState: state, settingsDispatch: dispatch }}>
      {children}
    </SettingsContext.Provider>
  )
}

const useSettingsContext = () => {
  const context = useContext(SettingsContext);
  return context;
}

export { SettingsProvider, useSettingsContext }

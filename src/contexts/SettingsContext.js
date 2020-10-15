import AsyncStorage from '@react-native-community/async-storage';
import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';

const SettingsContext = createContext();

const initialState = {
  originLanguage: '',
  targetLanguage: '',
  verbTenses: [],
  subjects: [],
  genders: []
}

const reducer = (state, action) => {
  if (action.type === 'save-settings') {
    console.log("new settings", action.settings);
    return action.settings
  }
  return state
}

const SettingsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        console.log("loaded settings from useeffect")
        const loadedSettings = await AsyncStorage.getItem('@language-finder-settings');
        const parsedSettings = JSON.parse(loadedSettings);
        const settings = {
          originLanguage: parsedSettings.originLanguage || '',
          targetLanguage: parsedSettings.targetLanguage || '',
          verbTenses: parsedSettings.verbTenses || [],
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

import AsyncStorage from '@react-native-community/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {

  const [state, set] = useState('OLDSETTINGS');
  useEffect(() => {
    const loadSettings = async () => {
      try {
        const loadedSettings = await AsyncStorage.getItem('@language-finder-settings');
        set(JSON.parse(loadedSettings))
      } catch (e) {
        console.error(e)
      }
    }

    loadSettings();
  }, [])
  return (
    <SettingsContext.Provider value={{ settingsState: state }}>
      {children}
    </SettingsContext.Provider>
  )
}

const useSettingsContext = () => {
  const context = useContext(SettingsContext);
  return context;
}

export { SettingsProvider, useSettingsContext }

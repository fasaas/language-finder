import React, { useState } from 'react';
import { View } from 'react-native';
import { LanguagePicker } from '../components/settings/LanguagePicker';

export const SettingsScreen = () => {
  const [originLanguage, setOriginLanguage] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('');
  return (
    <View>
      <LanguagePicker
        originValue={originLanguage}
        originSet={setOriginLanguage}
        targetValue={targetLanguage}
        targetSet={setTargetLanguage}
      />
    </View>
  )
}

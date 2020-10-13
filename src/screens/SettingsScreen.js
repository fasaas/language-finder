import React, { useState } from 'react';
import { View } from 'react-native';
import { LanguagePicker } from '../components/settings/LanguagePicker';
import { VerbTensesList } from '../components/settings/VerbTensesList';

export const SettingsScreen = () => {
  const [originLanguage, setOriginLanguage] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('');
  const [verbTenses, setVerbTenses] = useState([]);
  console.log("SettingsScreen -> verbTenses", verbTenses)
  return (
    <View>
      <View key='language-view'>
        <LanguagePicker
          originValue={originLanguage}
          originSet={setOriginLanguage}
          targetValue={targetLanguage}
          targetSet={setTargetLanguage}
        />
      </View>
      <View key='verb-tenses'>
        <VerbTensesList tenses={verbTenses} set={setVerbTenses} />
      </View>
    </View>
  )
}

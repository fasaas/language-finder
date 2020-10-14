import React, { useState } from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';
import { LanguagePicker } from '../components/settings/LanguagePicker';
import { DynamicList } from '../components/settings/DynamicList';
import { useSettingsContext } from '../contexts/SettingsContext';
import AsyncStorage from '@react-native-community/async-storage';

export const SettingsScreen = () => {
  const { settingsState } = useSettingsContext();
  const [originLanguage, setOriginLanguage] = useState(settingsState.originLanguage);
  const [targetLanguage, setTargetLanguage] = useState(settingsState.targetLanguage);
  const [verbTenses, setVerbTenses] = useState(settingsState.verbTenses);
  const [subjects, setSubjects] = useState(settingsState.subjects);
  const [genders, setGenders] = useState(settingsState.genders);
  return (
    <View>
      <View key='language-view' style={styles.container}>
        <LanguagePicker
          originValue={originLanguage}
          originSet={setOriginLanguage}
          targetValue={targetLanguage}
          targetSet={setTargetLanguage}
        />
      </View>
      <View key='verb-tenses' style={styles.container}>
        <DynamicList
          placeholder='New verb tense'
          list={verbTenses}
          set={setVerbTenses}
        />
      </View>
      <View key='subjects' style={styles.container}>
        <DynamicList
          placeholder='New subject'
          list={subjects}
          set={setSubjects}
        />
      </View>
      <View key='genders' style={styles.container}>
        <DynamicList
          placeholder='New gender'
          list={genders}
          set={setGenders}
        />
      </View>
      <View key='submit' style={styles.container, styles.submit}>
        <Button
          title='Save'
          color='green'
          onPress={async () => {
            try {
              await AsyncStorage.setItem('@language-finder-settings', JSON.stringify({
                originLanguage,
                targetLanguage,
                verbTenses,
                subjects,
                genders
              }));
              Alert.alert("Saved!")
            } catch (e) {
              console.error(e)
            }
          }}
        />
        <Button
          title='Cancel'
          color='black'
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10
  },
  submit: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  }
})

import React, { useState } from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';
import { LanguagePicker } from '../components/settings/LanguagePicker';
import { DynamicList } from '../components/settings/DynamicList';
import { useSettingsContext } from '../contexts/SettingsContext';
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView } from 'react-native-gesture-handler';

export const SettingsScreen = () => {
  const { settingsState, settingsDispatch } = useSettingsContext();
  const [originLanguage, setOriginLanguage] = useState(settingsState.originLanguage);
  const [targetLanguage, setTargetLanguage] = useState(settingsState.targetLanguage);
  const [tenses, setTenses] = useState(settingsState.tenses);
  const [subjects, setSubjects] = useState(settingsState.subjects);
  const [genders, setGenders] = useState(settingsState.genders);

  const saveDisabled = isSaveDisabled({ originLanguage, targetLanguage, tenses, subjects, genders }, settingsState);

  return (
    <ScrollView>
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
          list={tenses}
          set={setTenses}
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
          disabled={saveDisabled}
          title='Save'
          color='green'
          onPress={async () => {
            try {
              await AsyncStorage.setItem('@language-finder-settings', JSON.stringify({
                originLanguage,
                targetLanguage,
                tenses,
                subjects,
                genders
              }));
              settingsDispatch({
                type: 'save-settings', settings: {
                  originLanguage,
                  targetLanguage,
                  tenses,
                  subjects,
                  genders
                }
              })
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
    </ScrollView>
  )
}

const isSaveDisabled = (currentState, settingsState) => {
  const sameOriginLanguage = currentState.originLanguage === settingsState.originLanguage;
  const sameTargetLanguage = currentState.targetLanguage === settingsState.targetLanguage;
  const sameTenses = areTheSameArrays(currentState.tenses, settingsState.tenses);
  const sameSubjects = areTheSameArrays(currentState.subjects, settingsState.subjects);
  const sameGenders = areTheSameArrays(currentState.genders, settingsState.genders);

  const enabled = false, disabled = true;
  const currentAndStoredSettingsAreSame = (sameOriginLanguage && sameTargetLanguage && sameTenses && sameSubjects && sameGenders)

  if (currentAndStoredSettingsAreSame) return disabled;

  return enabled;
}

const areTheSameArrays = (arr1, arr2) => {
  arr1.every((tense) => arr2.includes(tense)) && arr2.every((tense) => arr1.includes(tense));
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

import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { LanguagePicker } from '../components/settings/LanguagePicker';
import { DynamicList } from '../components/settings/DynamicList';

export const SettingsScreen = () => {
  const [originLanguage, setOriginLanguage] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('');
  const [verbTenses, setVerbTenses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [genders, setGenders] = useState([]);
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

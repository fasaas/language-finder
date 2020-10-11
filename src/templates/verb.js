import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { LabelledInput } from '../components/LabelledInput';
import { useVerbContext } from '../contexts/VerbContext';

export const VerbTemplate = () => {
  const { state, dispatch } = useVerbContext();
  const tenses = Object.keys(state.verbForm.tenses);
  return (
    <ScrollView>
      <View key='helpers' style={{ flexDirection: "row-reverse", margin: 10 }}>
        <Button
          title='Sync infinitive into verbs'
          onPress={() => dispatch({ type: 'sync-infinitive' })} />

      </View>
      <View key="title">
        <LabelledInput
          label={'Заглавие'}
          text={state.verbForm.title}
          type={'set-title'}
        />
      </View>
      <View key="infinitive">
        <LabelledInput
          label={'Инфинитив'}
          text={state.verbForm.infinitive.origin}
          type={'set-infinitive-origin'}
        />
        <LabelledInput
          label={'Infinitivo'}
          text={state.verbForm.infinitive.translated}
          type={'set-infinitive-translated'}
        />
      </View>
      {
        tenses.map((tense, index) => (
          <View key={`${tense}-${index}`}>
            <Text>{tense}</Text>
            <View>
              {state.verbForm.tenses[tense].map((item, index) =>
                <LabelledInput key={`${tense}-${item.label}-${index}`} {...item} />
              )}
            </View>
          </View>
        ))
      }
      <View key="submit">
        <Button
          title="Save Verb content"
          onPress={() => {
            console.log(state)
          }}
        />
      </View>
    </ScrollView >
  )
}

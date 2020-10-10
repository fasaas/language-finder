import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Input } from '../components/Input';
import { useVerbContext, VerbProvider } from '../contexts/VerbContext';

export const VerbTemplate = () => {
  const { state } = useVerbContext();
  const tenses = Object.keys(state.verbForm);
  const [title, setTitle] = useState('');

  return (
    <ScrollView>
      <View key="title">
        <Text>Title</Text>
        <TextInput value={title} onChangeText={setTitle} />
      </View>

      <View key="preset" >
        {
          tenses.map((tense, index) => (
            <View key={`${tense}-${index}`}>
              <Text>{tense}</Text>

              <View>
                {state.verbForm[tense].map((item, index) =>
                  <Input key={`${tense}-${item.label}-${index}`} {...item} />
                )}
              </View>
            </View>
          ))
        }
      </View>
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

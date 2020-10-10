import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Input } from '../components/Input';
import { useVerbContext } from '../contexts/VerbContext';

export const VerbTemplate = () => {
  const { state } = useVerbContext();
  const [title, setTitle] = useState('');
  const mePresent = {
    fromLabel: 'я',
    fromText: state.presentmefrom,
    fromKey: 'presentmefrom',
    toLabel: 'yo',
    toText: state.presentmeto,
    toKey: 'presentmeto'
  };

  return (
    <View>
      <View key="title">
        <Text>Title</Text>
        <TextInput value={title} onChangeText={setTitle} />
      </View>
      <View key="preset" >
        <Text>Present</Text>
        <Input {...mePresent} />
      </View>
      <View key="submit">
        <Button
          title="Save Verb content"
          onPress={() => {
            console.log(state)
          }}
        />
      </View>
    </View>
  )
}

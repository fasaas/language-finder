import React from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { SectionPicker } from '../components/newSection/SectionPicker';
import { useNewNoteReducer } from '../components/newSection/useNewNoteReducer';

export const NewNoteScreen = () => {
  const { state, dispatch } = useNewNoteReducer();

  return (
    <ScrollView>
      <View key='note-title'>
        <TextInput
          style={{ borderColor: 'gray', borderWidth: 1 }}
          placeholder='Title'
          value={state.title}
          onChangeText={(title) => dispatch({ action: "set-title", title })}
        />
      </View>
      {
        state.sections.length > 0
          ? <Text>{JSON.stringify(state.sections)}</Text>
          : null
      }
      <SectionPicker onSubmit={(type) => dispatch({ action: "new-section", type })} />
      <View key='submit-note'>
      </View>

    </ScrollView>
  )
}

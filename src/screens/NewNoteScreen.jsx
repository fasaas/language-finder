import React from 'react';
import { Button, ScrollView, Text, TextInput, View } from 'react-native';
import { SectionPicker } from '../components/newSection/SectionPicker';
import { useNewNoteReducer } from '../components/newSection/useNewNoteReducer';
import { PhraseSection } from '../sections/phrase';

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
          ? state.sections.map((section) => {
            const { type, id, content } = section;
            if (type === "Sentence") {
              return <PhraseSection
                key={`sections-${id}`}
                {...content}
                setFrom={(from) => dispatch({ action: "sentence-set-from", id, value: from })}
                setTo={(to) => dispatch({ action: "sentence-set-to", id, value: to })}
              />
            }

          })
          : null
      }
      <SectionPicker onSubmit={(type) => dispatch({ action: "new-section", type })} />
      <View key='submit-note'>
        <Button
          title="Save"
          onPress={() => console.log(JSON.stringify(state, null, 4))}
        />
      </View>

    </ScrollView>
  )
}

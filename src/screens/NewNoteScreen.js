import { Picker } from '@react-native-community/picker';
import React, { useState } from 'react';
import { Button, ScrollView, TextInput, View } from 'react-native';
import { useNewNoteContext } from '../contexts/NewNoteContext';
import { AdjectiveSection } from '../sections/adjective';
import { SentenceSection } from '../sections/sentence';
import { VerbSection } from '../sections/verb';

const availableSections = ['Sentence', 'Adjective', 'Verb'];

export const NewNoteScreen = () => {
  const { state, dispatch } = useNewNoteContext();
  const { title, sections } = state;
  const [selectedSection, setSelectedSection] = useState(availableSections[0]);
  return (
    <ScrollView>
      <View key='note-title'>
        <TextInput
          style={{ borderColor: 'gray', borderWidth: 1 }}
          placeholder='Title'
          value={title}
          onChangeText={(title) => dispatch({ action: 'set-title', title })}
        />
      </View>
      {
        sections.length > 0
          ? sections.map((section, index) => {
            const { type } = section
            const key = `sections-${type}-${index}`

            if (type === 'Adjective') {
              return <View key={key}><AdjectiveSection {...section} /></View>
            }

            if (type === 'Sentence') {
              return <View key={key}><SentenceSection {...section} /></View>
            }

            if (type === 'Verb') {
              return <View key={key}><VerbSection {...section} /></View>
            }
          })
          : null
      }
      <View key='add-section'>
        <Picker

          selectedValue={selectedSection}
          onValueChange={setSelectedSection}
        >
          {availableSections.map((section) => <Picker.Item key={`available-section-${section}`} label={section} value={section} />)}
        </Picker>
        <Button
          title='Add section'
          onPress={() => dispatch({ action: 'new-section', type: selectedSection })}
        />
      </View>
      <View key='submit-note'>
        <Button
          title='Add note'
          onPress={() => console.log("New note state", state)}
        />
      </View>

    </ScrollView>
  )
}

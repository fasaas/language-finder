import { Picker } from '@react-native-community/picker';
import React, { useState } from 'react';
import { Alert, Button, ScrollView, Text, TextInput, View } from 'react-native';
import { useSettingsContext } from '../contexts/SettingsContext';
import { AdjectiveSection } from '../sections/adjective';
import { PhraseSection } from '../sections/phrase';

const availableSections = ['Sentence', 'Adjective'];

export const NewNoteScreen = () => {
  const { settingsState } = useSettingsContext();

  const [title, setTitle] = useState();
  const [selectedSection, setSelectedSection] = useState(availableSections[0]);
  const [sections, setSections] = useState([]);

  return (
    <ScrollView>
      <View key='note-title'>
        <TextInput
          style={{ borderColor: 'gray', borderWidth: 1 }}
          placeholder='Title'
          value={title}
          onChangeText={setTitle}
        />
      </View>
      {
        sections.length > 0
          ? sections.map((Component, index) => <View key={`${title}-sections-${index}`}>{Component}</View>)
          : null
      }
      <View key='add-section'>
        <Picker

          selectedValue={selectedSection}
          onValueChange={setSelectedSection}
        >
          {availableSections.map((section) => <Picker.Item key={`available-section-${section}`} label={section} value={section} />)}
        </Picker>
      </View>
      <View key='submit-note'>
        <Button
          title='Add note'
          onPress={() => {
            console.log(`${selectedSection} selected!`)
            if (selectedSection === 'Sentence') setSections(sections.concat(<PhraseSection />))
            if (selectedSection === 'Adjective') setSections(sections.concat(<AdjectiveSection />))
          }}
        />
      </View>

    </ScrollView>
  )
}

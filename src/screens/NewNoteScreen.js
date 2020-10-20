import { Picker } from '@react-native-community/picker';
import React, { useState } from 'react';
import { Alert, Button, ScrollView, Text, TextInput, View } from 'react-native';
import { useSettingsContext } from '../contexts/SettingsContext';
import { AdjectiveSection } from '../sections/adjective';
import { PhraseSection } from '../sections/phrase';
import { VerbSection } from '../sections/verb';

const availableSections = ['Sentence', 'Adjective', 'Verb'];

let componentsCount = 0;
export const NewNoteScreen = () => {
  const { settingsState } = useSettingsContext();

  const [title, setTitle] = useState();
  const [selectedSection, setSelectedSection] = useState(availableSections[0]);

  const remove = (id) => {
    const filteredSections = sections.filter((section) => section.id !== id);
    setSections(filteredSections);
  }

  const [sections, setSections] = useState([{ id: 0, component: <PhraseSection id={componentsCount} deleteMe={remove} /> }]);

  const push = (Component) => {
    componentsCount++;
    setSections(sections.concat({ id: componentsCount, component: <Component id={componentsCount} deleteMe={remove} /> }))
  };



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
          ? sections.map((element, index) => <View key={`${title}-sections-${index}`}>{element.component}</View>)
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
            if (selectedSection === 'Sentence') push(PhraseSection)
            if (selectedSection === 'Adjective') push(AdjectiveSection)
            if (selectedSection === 'Verb') push(VerbSection)
          }}
        />
      </View>

    </ScrollView>
  )
}

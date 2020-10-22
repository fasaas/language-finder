import React, { useState } from 'react';
import { Picker } from '@react-native-community/picker';
import { Button, View } from 'react-native';

const availableSections = ['Sentence', 'Adjective', 'Verb'];

export const SectionPicker = ({ onSubmit }) => {
  const [selectedSection, setSelectedSection] = useState(availableSections[0]);

  return (
    <View key='add-section'>
      <Picker selectedValue={selectedSection} onValueChange={setSelectedSection}>
        {
          availableSections.map((section) =>
            <Picker.Item key={`available-section-${section}`} label={section} value={section} />)
        }
      </Picker>
      <Button
        title='Add section'
        onPress={() => onSubmit(selectedSection)}
      />
    </View>)
}
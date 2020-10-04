import React, { useState } from 'react';
import { Picker } from '@react-native-community/picker';

const templates = { verb: 'verb', translation: 'translation' }

export const AddCardForm = () => {
  const [selectedValue, updateSelectedValueWith] = useState('Select a template');
  return (
    <Picker style={{ height: 50, width: 100 }} selectedValue={selectedValue} onValueChange={(itemValue) => updateSelectedValueWith(itemValue)}>

    </Picker>
  )
}

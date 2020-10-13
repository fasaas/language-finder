import React from 'react';
import { Picker } from '@react-native-community/picker';
import { getLanguagesWithout } from './languages';
import { Text, View } from 'react-native';

export const LanguagePicker = (props) => {
  const { originValue, originSet, targetValue, targetSet } = props;
  return (
    <View key='language-picker'>
      <View key='origin-language'>
        <Text>Origin language</Text>
        <Picker
          selectedValue={originValue}
          onValueChange={originSet}
        >
          <Picker.Item label='Select one origin language' value='' />
          {
            getLanguagesWithout(targetValue).map(({ title, locale }, index) =>
              <Picker.Item
                key={`origin-language-picker-${title}-${locale}-${index}`}
                label={title}
                value={locale}
              />
            )
          }
        </Picker>
      </View>
      <View key='target-language'>
        <Text>Target language</Text>
        <Picker
          selectedValue={targetValue}
          onValueChange={targetSet}
        >
          <Picker.Item label='Select one target language' value='' />
          {
            getLanguagesWithout(originValue).map(({ title, locale }, index) =>
              <Picker.Item
                key={`target-language-picker-${title}-${locale}-${index}`}
                label={title}
                value={locale}
              />
            )
          }
        </Picker>
      </View>
    </View>
  )
}

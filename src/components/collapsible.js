import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useReducer } from 'react';
import { View } from 'react-native';

const reduce = (state) => !state
const initializeExpanded = true;

export const Collapsible = ({ style, children }) => {
  const [expanded, toggle] = useReducer(reduce, initializeExpanded);

  return expanded ?
    <View>
      <View style={{ flexDirection: "row-reverse", ...style }}>
        <MaterialCommunityIcons onPress={toggle} name="arrow-collapse" size={24} color="black" />
      </View>
      {children}
    </View>
    :
    <View style={{ flexDirection: "row-reverse", ...style }}>
      <MaterialCommunityIcons onPress={toggle} name="arrow-expand" size={24} color="black" />
    </View>
}

import { AntDesign } from '@expo/vector-icons';
import React, { useReducer } from 'react';
import { View } from 'react-native';

const reduce = (state) => !state
const initializeExpanded = true;

export const Collapsible = ({ style, children }) => {
  const [expanded, toggle] = useReducer(reduce, initializeExpanded);

  return expanded ?
    <View>
      <View style={{ flexDirection: "row-reverse", ...style }}>
        <AntDesign onPress={toggle} name="caretdown" size={24} color="black" />
      </View>
      {children}
    </View>
    :
    <View style={{ flexDirection: "row-reverse", ...style }}>
      <AntDesign onPress={toggle} name="caretright" size={24} color="black" />
    </View>
}

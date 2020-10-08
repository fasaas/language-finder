import React from 'react';
import { Button, View } from 'react-native';

const New = ({ navigation, route }) => {
  const { selection } = route.params;
  console.log("New -> selection", selection)
  return (
    <View>
      <Button title='Save new card' />
      <Button title='Cancel' onPress={() => navigation.goBack()} />
    </View>
  )
}

export { New }

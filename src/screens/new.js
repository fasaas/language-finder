import React from 'react';
import { Button, View } from 'react-native';

const New = ({ navigation }) => {
  return (
    <View>
      <Button title='Save new card' />
      <Button title='Cancel' onPress={() => navigation.goBack()} />
    </View>
  )
}

export { New }

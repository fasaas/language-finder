import React from 'react';
import { Button, View } from 'react-native';
import { useStoreContext } from '../context';

const New = ({ navigation, route }) => {
  const { selection } = route.params;
  const { dispatch } = useStoreContext()
  return (
    <View>
      <Button title='Save new card' onPress={() => dispatch({ type: 'increment', content: selection })} />
      <Button title='Cancel' onPress={() => navigation.goBack()} />
    </View>
  )
}

export { New }

import React, { useState } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Main } from "./screens/main";
import { New } from "./screens/new";
import { StoreProvider } from './context';
const Stack = createStackNavigator();

const Navigation = () => {
  const [cards, setCards] = useState([]);
  return (
    <StoreProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Main'>
          <Stack.Screen name='Main' component={Main} />
          <Stack.Screen name='New' component={New} />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  )
}

export { Navigation }

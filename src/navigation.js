import React, { useState } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Main } from "./screens/main";
import { New } from "./screens/new";
import { StoreProvider } from './context';
import { NewScreenSettings } from './components/NewScreenSettings';
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <StoreProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Main'>
          <Stack.Screen name='Main' component={Main} />
          <Stack.Screen
            name='New'
            component={New}
            options={{
              headerRight: () => <NewScreenSettings />
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  )
}

export { Navigation }

import React, { useState } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Tabs } from "./TabsNavigation";
import { SettingsProvider } from './contexts/SettingsContext';
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <SettingsProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Tabs' component={Tabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </SettingsProvider>
  )
}

export { Navigation }

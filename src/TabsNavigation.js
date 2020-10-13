
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SettingsScreen } from './screens/SettingsScreen';
import { Feather } from '@expo/vector-icons';
import { NotesScreen } from './screens/NotesScreen';

const BottomTab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="NotesDisplay"
    >
      <BottomTab.Screen
        name="NotesDisplay"
        component={NotesNavigator}
        options={{
          tabBarLabel: "Notes",
          tabBarIcon: () => <Feather name="archive" size={24} />
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: () => <Feather name="settings" size={24} />
        }}
      />
    </BottomTab.Navigator>
  );
}

const NotesStack = createStackNavigator();
const NotesNavigator = () =>
  (
    <NotesStack.Navigator>
      <NotesStack.Screen
        name="NotesScreen"
        component={NotesScreen}
      />
    </NotesStack.Navigator>
  );

const SettingsStack = createStackNavigator();
const SettingsNavigator = () =>
  (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
      />
    </SettingsStack.Navigator>
  );

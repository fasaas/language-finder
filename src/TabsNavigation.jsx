
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SettingsScreen } from './screens/SettingsScreen';
import { AntDesign, Feather } from '@expo/vector-icons';
import { NotesScreen } from './screens/NotesScreen';
import { NewNoteScreen } from './screens/NewNoteScreen';

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
        name="NewScreen"
        component={NewNoteNavigator}
        options={{
          tabBarLabel: 'New Note',
          tabBarIcon: () => <AntDesign name="pluscircleo" size={24} color="black" />
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
const NotesNavigator = () => {
  return (
    <NotesStack.Navigator>
      <NotesStack.Screen
        name="NotesScreen"
        component={NotesScreen}
      />
    </NotesStack.Navigator>
  );
}

const NewNoteStack = createStackNavigator();
const NewNoteNavigator = () => {
  return (
    <NewNoteStack.Navigator>
      <NewNoteStack.Screen
        name="NewNote"
        component={NewNoteScreen}
      />
    </NewNoteStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();
const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
      />
    </SettingsStack.Navigator>
  )
};

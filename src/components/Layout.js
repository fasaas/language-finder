import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Cards } from './Cards';
import { AddCard } from './AddCard';
import { AddCardForm } from './AddCardForm'

export const Layout = () => {
  return (
    <View style={styles.container}>
      <Cards />
      <AddCard />
      <AddCardForm />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25
  }
})

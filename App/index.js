import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import AppScreen from './components/AppScreen/AppScreen.js';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
      
        <AppScreen />
      
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '#D7D7D5',
    height: 500
  },
  container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#D7D7D5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
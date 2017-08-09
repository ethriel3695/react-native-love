import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppScreen from './components/AppScreen/AppScreen.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#D7D7D5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
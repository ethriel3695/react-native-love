import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default function Navigation (props) {
    return (
        <View style={styles.container}>
            {props.users.users.user.map((user) => {
                return (
                    <TouchableHighlight 
                        style={styles.navContainer} 
                        activeOpacity={0.6}
                        underlayColor={'#E6E6E6'}
                        key={user.name}
                        onPress={props.onSelect.bind(null, user.name)}>
                    <Text 
                        style={styles.nav} 
                        className={user.name === props.selectedPerson ? 'active' : ''}
                        key={user.name}
                        //onPress={props.onSelect.bind(null, user.name)}
                        >
                        {user.name}
                    </Text>
                    </TouchableHighlight>
                )
            })} 
        </View>
    )
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#D7D7D5',
    alignItems: 'center',
    justifyContent: 'center',
  },
navContainer: {
    flex: 1,
    width: 500,
    padding: 20,
    backgroundColor: '#D7D7D5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  nav: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
  }
});
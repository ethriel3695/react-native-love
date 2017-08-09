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
                        style={{color: '#d0021b'}}
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
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    backgroundColor: '#D7D7D5',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
navContainer: {
    padding: 10,
    backgroundColor: '#D7D7D5',
    borderRadius: 5
  }
});
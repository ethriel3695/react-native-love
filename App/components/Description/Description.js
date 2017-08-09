import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Description extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.descriptionHeader}>Why I love {this.props.user.name}</Text>
                <View style={styles.descriptionList}>
                {this.props.user.description.map((text) => {
                return (
                    <Text style={styles.descriptionItem} key={text}>
                        {text}
                    </Text>
                )
                })}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#D7D7D5',
    alignItems: 'center',
    justifyContent: 'center',
  },
descriptionHeader: {
    padding: 20,
    alignItems: 'center'
  },
descriptionList: {
  alignItems: 'center'
  },
descriptionItem: {
  alignItems: 'center',
  padding: 5
  }
});
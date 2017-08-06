import React from 'react';
import { View, Text } from 'react-native';

export default class Description extends React.Component {
    render() {
        return (
            <View className='descriptionContainer'>
            <Text className='descriptionHeader'>Why I love {this.props.user.name}</Text>
                <View className='descriptionList'>
                {this.props.user.description.map((text) => {
                return (
                    <Text className='descriptionItem' key={text}>
                        {text}
                    </Text>
                )
                })}
                </View>
            </View>
        )
    }
}
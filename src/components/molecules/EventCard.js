import React from 'react';
import { View, Text } from 'react-native';

export default class EventCard extends React.Component {
    render() {
        return <Text>{JSON.stringify(this.props.item)}</Text>;
    }
}

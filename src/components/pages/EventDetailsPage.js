import React from 'react';
import { View, Text } from 'react-native';

export default class EventDetailsPage extends React.Component {
    render() {
        const { event } = this.props.navigation.state.params;

        return <Text>{event.title}</Text>;
    }
}

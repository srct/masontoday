import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class EventDetailsPage extends React.Component {
    render() {
        const { event } = this.props.navigation.state.params;

        return <Text style={styles.description}>{event.description}</Text>;
    }
}

const styles = StyleSheet.create({
    description: {
        fontSize: 20,
        padding: 20,
    },
});

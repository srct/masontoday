import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class EventDetailsPage extends React.Component {
    render() {
        const { event } = this.props.navigation.state.params;

        return <Text style={styles.title}>{event.title}</Text>;
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
    },
});

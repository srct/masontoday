import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { DataManipulation } from 'masontoday/src/utils';

export default class EventCard extends React.Component {
    render() {
        const { event } = this.props;
        const { formatTime } = DataManipulation;
        // console.error(event);
        return (
            <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
                <Text style={styles.title}>{event.title}</Text>
                <Text>{`${formatTime(event.timestart)} - ${formatTime(event.timestop)}`}</Text>
                <Text>{event.location[0]}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 4,
        margin: 4,
        marginHorizontal: 8,
        minHeight: 70,
        padding: 5,
    },
    title: {
        fontSize: 20,
    },
});

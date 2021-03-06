import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { DataManipulation, Colors } from 'masontoday/src/utils';

export default class EventCard extends React.Component {
    render() {
        const { event } = this.props;
        const { formatTime } = DataManipulation;
        return (
            <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>{event.title}</Text>
                    <Text>{`${formatTime(event.timestart)} - ${formatTime(event.timestop)}`}</Text>
                    <Text>{event.location[0]}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.gray4,
        borderRadius: 4,
        margin: 4,
        marginHorizontal: 8,
        minHeight: 70,
        padding: 5,
    },
    textWrapper: {
        paddingHorizontal: 4,
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: Colors.green1,
    },
});

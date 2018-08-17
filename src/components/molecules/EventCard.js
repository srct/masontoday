import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class EventCard extends React.Component {
    render() {
        console.warn(this.props.item);
        return (
            <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
                <Text style={styles.title}>{this.props.item.title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 4,
        margin: 4,
        marginHorizontal: 8,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
    },
});

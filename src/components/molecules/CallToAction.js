import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class CallToAction extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
                <Text style={styles.text}>Add Event To Calender</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: 'white',
        fontWeight: '600',
    },
});

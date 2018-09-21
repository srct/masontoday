import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Button extends React.Component {
    render() {
        return (
            <TouchableOpacity style={this.props.style} onPress={this.props.onPress}>
                <Text style={this.props.textStyle}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

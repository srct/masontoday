import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Colors } from 'masontoday/src/utils';

export default class HeaderTemplate extends React.Component {
    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <View>{this.props.left}</View>
                <Text style={styles.title}>{this.props.title}</Text>
                <View>{this.props.right}</View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: 44,
        marginTop: 12,
        backgroundColor: Colors.gray1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 17,
        fontWeight: '600',
        color: Colors.green1,
    },
});

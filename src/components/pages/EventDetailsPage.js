import React from 'react';
import { View, SafeAreaView, StyleSheet, Text } from 'react-native';

import { CallToAction } from 'masontoday/src/components';

export default class EventDetailsPage extends React.Component {
    render() {
        const { event } = this.props.navigation.state.params;

        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>{event.title}</Text>
                <Text style={styles.description}>{event.description}</Text>
                <View style={styles.callToAction}>
                    <CallToAction />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
    },
    description: {
        fontSize: 20,
        padding: 20,
    },
    title: {
        padding: 10,
        fontSize: 25,
        fontWeight: '500',
    },
    callToAction: {
        flex: 1,
        justifyContent: 'flex-end',
    },
});

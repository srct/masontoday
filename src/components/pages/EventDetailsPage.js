import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, ScrollView } from 'react-native';

import { CallToAction } from 'masontoday/src/components';
import { DataManipulation } from 'masontoday/src/utils';

export default class EventDetailsPage extends React.Component {
    render() {
        const { event } = this.props.navigation.state.params;
        const { formatTime } = DataManipulation;

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView bounces={false} foot>
                    <View style={styles.header}>
                        <Text style={styles.title}>{event.title}</Text>
                        <Text style={styles.location}>{event.location}</Text>
                        <Text style={styles.time}>{`${formatTime(event.timestart)} - ${formatTime(
                            event.timestop
                        )}`}</Text>
                    </View>

                    <Text style={styles.description}>{event.description}</Text>
                    <View height={55} />
                </ScrollView>
                <View style={styles.callToAction}>
                    <CallToAction event={event} />
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
        paddingHorizontal: 8,
        paddingVertical: 10,
    },
    title: {
        paddingVertical: 10,
        fontSize: 25,
        fontWeight: '500',
    },
    location: {
        fontSize: 15,
        fontWeight: '500',
        paddingVertical: 2,
    },
    time: {
        fontWeight: '500',
    },
    header: {
        paddingHorizontal: 8,
    },
    callToAction: {
        flex: 1,
        justifyContent: 'flex-end',
    },
});

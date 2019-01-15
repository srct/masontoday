import React from 'react';
import { View, StyleSheet, Text, ScrollView, Share, Button } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { CallToAction, PageTemplate } from 'masontoday/src/components';
import { DataManipulation, Colors } from 'masontoday/src/utils';

import TopBar from './TopBar';

function shareEvent(eventId) {
    Share.share({
        message: `Check out what I found on Masontoday!\nhttps://www2.gmu.edu/today-mason?trumbaEmbed=view%3Devent%26eventid%3D${eventId}`,
    });
}
export default class EventDetailsPage extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Details',
            headerRight: (
                <Button
                    onPress={() => shareEvent(navigation.getParam('event').id)}
                    title="Share"
                    color={Colors.green1}
                />
            ),
        };
    };

    render() {
        const { event } = this.props.navigation.state.params;
        const { formatTime } = DataManipulation;

        return (
            <PageTemplate>
                <View style={styles.container}>
                    <ScrollView bounces={false}>
                        <View style={styles.header}>
                            <Text style={styles.title}>{event.title}</Text>
                            <Text style={styles.location}>{event.location[0]}</Text>
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
                </View>
            </PageTemplate>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    description: {
        fontSize: 20,
        paddingHorizontal: 16,
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

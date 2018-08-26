import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import moment from 'moment';
import * as AddCalendarEvent from 'react-native-add-calendar-event';
import OpenAppSettings from 'react-native-app-settings';

import { DataManipulation } from 'masontoday/src/utils';

export default class CallToAction extends React.Component {
    addEvent() {
        const { event } = this.props;
        const { formatTime } = DataManipulation;

        const startDate = moment(
            `${event.month} ${event.dayofmonth} - ${formatTime(event.timestart)}`,
            'MMMM DD - hh:mmA '
        )
            .utc()
            .format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');

        const endDate = moment(
            `${event.month} ${event.dayofmonth} - ${formatTime(event.timestop)}`,
            'MMMM DD - hh:mmA '
        )
            .utc()
            .format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');

        const eventConfig = {
            title: event.title,
            location: event.location[0],
            startDate,
            endDate,
        };

        AddCalendarEvent.presentEventCreatingDialog(eventConfig)
            .then(eventInfo => {})
            .catch(error => {
                // handle error such as when user rejected permissions
                Alert.alert(
                    "Looks like we don't have permission to access your calendar",
                    'To use this feature please enable it in your app settings',
                    [
                        { text: 'Open Settings', onPress: () => OpenAppSettings.open() },
                        { text: 'Cancel', style: 'cancel' },
                    ]
                );
                console.warn(error);
            });
    }
    render() {
        return (
            <TouchableOpacity onPress={() => this.addEvent()} style={styles.container}>
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

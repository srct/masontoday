import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

function TimeDate(props) {
    let dayOfMonth = props.event.dayofmonth;
    let dayOfWeek = props.event.dayofweek;
    let month = props.event.month;
    let year = props.event.year;
    return (
        <Text style={props.style}>
            {dayOfWeek} {dayOfMonth}/{month}/{year}
        </Text>
    );
}
export class Details extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <Text style={styles.eventTitle}>{this.props.event.title}</Text>

                    <Text style={styles.eventLocation}>
                        {'Location: ' + this.props.event.location[0].toUpperCase()}
                    </Text>

                    <TimeDate event={this.props.event} style={styles.eventTime} />
                </View>

                <View style={{ paddingTop: 10 }}>
                    <Text style={styles.eventDescription}>{this.props.event.description}</Text>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        marginLeft: '2%',
    },
    eventTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 0,
        color: '#282828',
    },
    eventLocation: {
        fontSize: 15,
        fontWeight: 'bold',
        padding: 0,
    },
    eventTime: {
        fontSize: 15,
        fontWeight: 'bold',
        padding: 0,
    },
    eventDescription: {
        fontSize: 15,
    },
});

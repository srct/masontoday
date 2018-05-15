import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight, ScrollView } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { Navigation } from 'react-native-navigation';
import { formatTime } from '../data';

function TimeDate(props) {
    let event = props.event;
    return (
        <View>
            <Text style={props.style}>
                {event.dayofweek} {event.dayofmonth} / {event.month} / {event.year}
            </Text>
            <Text style={props.style}>
                {formatTime(event.timestart)} - {formatTime(event.timestop)}
            </Text>
        </View>
    );
}

function BackButton(props) {
    onPress = () => {
        Navigation.pop(props.componentId);
    };
    return (
        <TouchableHighlight onPress={onPress} underlayColor={null}>
            <FontAwesome style={{ fontSize: 25, paddingTop: 10 }}>{Icons.chevronLeft}</FontAwesome>
        </TouchableHighlight>
    );
}

export class Details extends Component {
    static get options() {
        return {
            topBar: {
                drawBehind: true,
                visible: false,
            },
        };
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <BackButton componentId={this.props.componentId} />

                <View>
                    <Text style={styles.eventTitle}>{this.props.event.title}</Text>

                    <Text style={styles.eventLocation}>
                        {'Location: ' + this.props.event.location[0].toUpperCase()}
                    </Text>

                    <TimeDate event={this.props.event} style={styles.eventTime} />
                </View>

                <ScrollView style={{ marginTop: 10 }}>
                    <View>
                        <Text style={styles.eventDescription}>{this.props.event.description}</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: '2.2%',
    },
    eventTitle: {
        fontSize: 30,
        paddingBottom: 5,
        fontWeight: 'bold',
        color: '#006633',
    },
    eventLocation: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingBottom: 3,
    },
    eventTime: {
        fontSize: 15,
        fontWeight: 'bold',
        padding: 0,
        color: '#242424',
    },
    eventDescription: {
        fontSize: 18,
    },
});

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, List, ListItem, TouchableHighlight } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { fetchData } from './data';
import EventList from './EventList';

class DayCell extends Component {
    render() {
        return (
            <View style={styles.day}>
                <View style={styles.date}>
                    <Text style={styles.dayofmonth}>{this.props.date.dayofmonth}</Text>
                    <Text style={styles.dayofweek}>{this.props.date.dayofweek}</Text>
                </View>
                <EventList data={this.props.events} />
            </View>
        );
    }
}

export default class DayList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    _renderItem = ({ item }) => {
        return <DayCell date={{ dayofmonth: item.dayofmonth, dayofweek: item.dayofweek }} events={item.events} />;
    };

    render() {
        if (!this.props.data) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Loading data...</Text>
                </View>
            );
        }
        let days = [];
        this.props.data.forEach(event => {
            const daysAlreadyWithDate = days.filter(day => {
                return event.dayofweek == day.dayofweek && event.dayofmonth == day.dayofmonth;
            });
            // add the day to the days if it's not already there
            if (daysAlreadyWithDate.length === 0) {
                days.push({ dayofweek: event.dayofweek, dayofmonth: event.dayofmonth });
            }
        });
        days.forEach(day => {
            day.events = this.props.data.filter(event => {
                return event.dayofweek == day.dayofweek && event.dayofmonth == day.dayofmonth;
            });
        });

        return <FlatList style={styles.list} data={days} renderItem={this._renderItem} />;
    }
}

const styles = StyleSheet.create({
    // list: {
    //     flex: 1,
    //     // margin: 10,
    // },
    day: {
        flex: 1,
        // flexDirection: 'row',
        margin: 8,
        marginTop: 0,
        marginBottom: 10,
        padding: 12,
        paddingLeft: 8,
        // height: 70,
        // overflow: 'hidden',
        borderRadius: 10,
    },
    date: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignContent: 'center',
        marginBottom: 8,
    },
    dayofmonth: {
        fontSize: 28,
        fontWeight: 'bold',
        marginRight: 4,
    },
    dayofweek: {
        fontSize: 20,
    },
});

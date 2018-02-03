import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, List, ListItem, TouchableHighlight } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import EventList from './EventList';

class DayCellTitle extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
                    <Text style={styles.dayofmonth}>{this.props.date.dayofweek}</Text>
                    <Text style={styles.dayofweek}>
                        {this.props.date.month} {this.props.date.dayofmonth}
                    </Text>
                </View>
            </View>
        );
    }
}

class DayCell extends Component {
    render() {
        return (
            <View style={styles.day}>
                <DayCellTitle date={this.props.date} />
                <EventList data={this.props.events} />
            </View>
        );
    }
}

export default class DayList extends Component {
    constructor(props) {
        super(props);
    }

    _renderItem = ({ item }) => {
        return (
            <DayCell
                date={{ dayofmonth: item.dayofmonth, dayofweek: item.dayofweek, month: item.month }}
                events={item.events}
            />
        );
    };

    render() {
        if (!this.props.days) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Loading data...</Text>
                </View>
            );
        }

        return <FlatList style={styles.list} data={this.props.days} renderItem={this._renderItem} />;
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
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 8,
    },
    dayofmonth: {
        fontSize: 24,
        fontWeight: 'bold',
        marginRight: 4,
    },
    dayofweek: {
        fontSize: 20,
    },
});

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, SectionList, TouchableHighlight } from 'react-native';
import { EventList, EventListItem } from './EventList';

/**
 * A DayCellTitle is the date above the EventList.
 * (a seperate component because it's pretty ugly to center the text vertically + horizontally)
 */
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

/**
 * A DayList is a list of days which each contain a date (e.g. Febuary 4th)
 * and a list of events that occur on that date.
 */
export class DayList extends Component {
    constructor(props) {
        super(props);
    }

    _renderItem = ({ item, index, section }) => <EventListItem listitem={item} componentId={this.props.componentId} />;

    _renderSectionHeader = ({ section: { dayofmonth, dayofweek, month } }) => (
        <DayCellTitle date={{ dayofmonth, dayofweek, month }} />
    );

    render() {
        if (!this.props.days) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Loading data...</Text>
                </View>
            );
        }
        return (
            <SectionList
                initialNumToRender={5}
                showsVerticalScrollIndicator={false}
                stickySectionHeadersEnabled={false}
                style={styles.day}
                renderItem={this._renderItem}
                renderSectionHeader={this._renderSectionHeader}
                sections={this.props.days}
                keyExtractor={(item, index) => item + index}
            />
        );
    }
}

const styles = StyleSheet.create({
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
    dayofmonth: {
        fontSize: 24,
        fontWeight: 'bold',
        marginRight: 4,
    },
    dayofweek: {
        fontSize: 20,
    },
});

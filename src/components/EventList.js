import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, List, ListItem, TouchableHighlight } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

class TimeInfo extends Component {
    formatTime = minutesFromMidnight => {
        let hours = Math.floor(minutesFromMidnight / 60);
        let post = '';
        if (hours < 12) {
            post = 'AM';
        } else {
            post = 'PM';
            if (hours > 12) hours = hours % 12;
        }
        const minutes = minutesFromMidnight % 60;
        return `${hours}:${minutes == 0 ? '00' : minutes} ${post}`;
    };

    render() {
        return (
            <View style={styles.infoLine}>
                <FontAwesome>{Icons.clockO}</FontAwesome>
                <Text style={styles.infoText}>
                    {this.formatTime(this.props.startTime)}
                    {' - '}
                    {this.formatTime(this.props.endTime)}
                </Text>
            </View>
        );
    }
}

class LocationInfo extends Component {
    render() {
        return (
            <View style={styles.infoLine}>
                <FontAwesome>{Icons.locationArrow}</FontAwesome>
                <Text style={styles.infoText}>{this.props.location}</Text>
            </View>
        );
    }
}

class DescriptionInfo extends Component {
    formatDescription = desc => {
        const maxLength = 120;
        let shortened = desc.substring(0, maxLength);
        if (desc.length >= maxLength) shortened += '...';
        return shortened;
    };

    render() {
        if (this.props.description === 'Not not provided') return <View />;
        return (
            <View style={styles.description}>
                <FontAwesome>{Icons.infoCircle}</FontAwesome>
                <Text style={styles.infoText}>{this.formatDescription(this.props.description)}</Text>
            </View>
        );
    }
}

class EventListItem extends Component {
    onPress = () => {
        //TODO: navigation to a details page
        //TODO: pass in listitem as prop to details

        //placeholder
        console.log('click');
    };
    render() {
        return (
            <TouchableHighlight style={styles.facility} onPress={this.onPress} underlayColor="grey">
                <View>
                    <Text style={styles.facilityName}>{this.props.listitem.title}</Text>
                    <LocationInfo location={this.props.listitem.location} />
                    <TimeInfo startTime={this.props.listitem.timestart} endTime={this.props.listitem.timestop} />
                    <DescriptionInfo style={{ marginTop: 16 }} description={this.props.listitem.description} />
                </View>
            </TouchableHighlight>
        );
    }
}

export default class EventList extends Component {
    constructor(props) {
        super(props);
    }

    _renderItem = ({ item }) => {
        return <EventListItem listitem={item} />;
    };

    render() {
        // Adding a loading screen while app gets data
        if (!this.props.data) {
            return (
                <View style={styles.loading}>
                    <Text>Loading data...</Text>
                </View>
            );
        }
        return <FlatList style={styles.list} data={this.props.data} renderItem={this._renderItem} />;
    }
}
const styles = StyleSheet.create({
    loading: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    list: {
        margin: 0,
    },
    facility: {
        marginBottom: 10,
        padding: 12,
        // paddingLeft: 8,
        // height: 70,
        // overflow: 'hidden',
        backgroundColor: '#eaecef',
        borderRadius: 10,
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 2,
    },
    facilityName: {
        marginLeft: 4,
        marginBottom: 4,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#006633',
    },
    infoLine: {
        flex: 1,
        flexDirection: 'row',
        margin: 4,
        marginBottom: 0,
        // fontFamily: 'FontAwesome5FreeSolid',
    },
    description: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 4,
        marginBottom: 0,
        marginTop: 12,
        // fontFamily: 'FontAwesome5FreeSolid',
    },
    infoText: {
        marginLeft: 4,
    },
});

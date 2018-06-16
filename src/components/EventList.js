import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    List,
    ListItem,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { formatTime, formatDescription } from '../data';
import { Navigation } from 'react-native-navigation';

// the list of events (the cells you see)

/**
 * An EventInfo component consists of an Icon and text.
 */
class EventInfo extends Component {
    render() {
        return (
            <View style={this.props.style ? this.props.style : styles.infoLine}>
                <FontAwesome>{this.props.icon}</FontAwesome>
                <Text style={styles.infoText}>{this.props.text}</Text>
            </View>
        );
    }
}

/**
 * An EventListItem represents one event in the event list.
 * One cell contains the following:
 *  - Title
 *  - Location
 *  - Time
 *  - Description
 */
export class EventListItem extends Component {
    onPress = () => {
        let componentId = this.props.componentId;
        let event = this.props.listitem;
        Navigation.push(componentId, {
            component: {
                name: 'navigation.masontoday.details',
                passProps: {
                    event,
                },
            },
        });
    };

    render() {
        return (
            <TouchableHighlight style={styles.event} onPress={this.onPress} underlayColor="grey">
                <View>
                    <Text style={styles.eventName}>{this.props.listitem.title}</Text>
                    <EventInfo icon={Icons.locationArrow} text={this.props.listitem.location[0]} />
                    <EventInfo
                        icon={Icons.clockO}
                        text={
                            formatTime(this.props.listitem.timestart) + ' - ' + formatTime(this.props.listitem.timestop)
                        }
                    />
                    <EventInfo
                        style={styles.description}
                        icon={Icons.infoCircle}
                        text={formatDescription(this.props.listitem.description)}
                    />
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    event: {
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
    eventName: {
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

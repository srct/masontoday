import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, List, ListItem, TouchableHighlight } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { fetchData } from './data';

class EventListItem extends Component {
    onPress = () => {
        //TODO: navigation to a details page
        //TODO: pass in listitem as prop to details

        //placeholder
        console.log('click');
    };
    render() {
        return (
            <View style={styles.facility} onPress={this.onPress} underlayColor="grey">
                <View>
                    <Text style={styles.facilityName}>{this.props.listitem.title}</Text>
                    <View style={styles.infoLine}>
                        <FontAwesome>{Icons.locationArrow}</FontAwesome>
                        <Text style={styles.infoText}>{this.props.listitem.location}</Text>
                    </View>
                    <View style={styles.infoLine}>
                        <FontAwesome>{Icons.clockO}</FontAwesome>
                        <Text style={styles.infoText}>
                            {this.props.listitem.dayofweek}, {this.props.listitem.month}{' '}
                            {this.props.listitem.dayofmonth}
                        </Text>
                    </View>
                </View>
            </View>
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
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Loading data...</Text>
                </View>
            );
        }
        return <FlatList style={styles.list} data={this.props.data} renderItem={this._renderItem} />;
    }
}
const styles = StyleSheet.create({
    list: {
        marginTop: 0,
    },
    facility: {
        margin: 8,
        marginTop: 0,
        marginBottom: 10,
        padding: 12,
        paddingLeft: 8,
        // height: 70,
        // overflow: 'hidden',
        backgroundColor: '#eaecef',
        borderRadius: 10,
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.6,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 1,
    },
    facilityName: {
        marginLeft: 4,
        marginBottom: 2,
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
    infoText: {
        marginLeft: 4,
    },
});

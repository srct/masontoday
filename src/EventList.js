import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, List, ListItem, TouchableHighlight } from 'react-native';
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
            <TouchableHighlight style={styles.facility} onPress={this.onPress} underlayColor="grey">
                <Text style={styles.facilityName}>{this.props.listitem.title}</Text>
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
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Loading data...</Text>
                </View>
            );
        }
        return <FlatList data={this.props.data} renderItem={this._renderItem} />;
    }
}
const styles = StyleSheet.create({
    facility: {
        margin: 9,
        marginTop: 0,
        height: 70,
        overflow: 'hidden',
        backgroundColor: '#eaecef',
        borderRadius: 10,
        justifyContent: 'center',
    },
    facilityName: {
        fontSize: 20,
        paddingLeft: 10,
    },
});

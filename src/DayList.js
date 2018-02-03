import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, List, ListItem, TouchableHighlight } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { fetchData } from './data';

class DayCell extends Component {
    render() {
        return <TouchableHighlight />;
    }
}

export default class DayList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    _renderItem = ({ item }) => {
        return <DayCell date={{ dayofmonth: item.dayofmonth, dayofweek: item.dayofweek }} />;
    };
    render() {
        return;
    }
}

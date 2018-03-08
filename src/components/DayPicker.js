import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, List, ListItem, TouchableHighlight } from 'react-native';

export default class DayPicker {
    _renderItem = ({ item }) => {
        return <TouchableHighlight />;
    };
    render() {
        return <FlatList horizontal={true} data={this.props.days} renderItem={this._renderItem} />;
    }
}

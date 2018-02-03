import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { fetchData } from './data';
import EventList from './EventList';
import DayList from './DayList';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }

    componentWillMount() {
        //getting new data from server
        fetchData().then(data => {
            // if (!data) return;
            // data.forEach(e => console.warn(`${e.dayofweek} ${e.dayofmonth}`));
            this.setState({
                data: data,
            });
        });
    }

    render() {
        return (
            <SafeAreaView style={styles.listView}>
                <DayList style={styles.listView} data={this.state.data} />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    listView: {
        flex: 1,
        // margin: 16,
    },
});

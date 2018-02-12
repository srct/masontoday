import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { fetchData, filterDataIntoDays } from '../data';
import EventList from '../components/EventList';
import DayList from '../components/DayList';
import { Navigation } from 'react-native-navigation';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: null,
        };
    }

    componentWillMount() {
        //getting new data from server
        fetchData().then(data => {
            if (!data) return;
            this.setState({
                days: filterDataIntoDays(data),
            });
        });
    }

    render() {
        return (
            <SafeAreaView style={styles.listView}>
                <DayList style={styles.listView} days={this.state.days} />
            </SafeAreaView>
        );
    }
}
module.exports = App;

const styles = StyleSheet.create({
    listView: {
        flex: 1,
        // margin: 16,
    },
});

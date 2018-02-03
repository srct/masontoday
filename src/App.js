import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { fetchData } from './data';
import EventList from './EventList';
import DayList from './DayList';

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
                days: this.filterDataIntoDays(data),
            });
        });
    }

    filterDataIntoDays = (data) => {
        let days = [];
        data.forEach(event => {
            const daysAlreadyWithDate = days.filter(day => {
                return event.dayofweek == day.dayofweek && event.dayofmonth == day.dayofmonth;
            });
            // add the day to the days if it's not already there
            if (daysAlreadyWithDate.length === 0) {
                days.push({ dayofweek: event.dayofweek, dayofmonth: event.dayofmonth });
            }
        });
        days.forEach(day => {
            day.events = data.filter(event => {
                return event.dayofweek == day.dayofweek && event.dayofmonth == day.dayofmonth;
            });
        });
        return days;
    }

    render() {
        return (
            <SafeAreaView style={styles.listView}>
                <DayList style={styles.listView} days={this.state.days} />
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

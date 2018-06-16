import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, AsyncStorage } from 'react-native';
import { fetchData, filterDataIntoDays } from '../data';
import { DayList } from '../components/DayList';

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: null,
        };
    }
    componentDidMount() {
        //getting data stored on phone
        AsyncStorage.getItem('@Masontoday:data').then(value => {
            if (value == null) return;
            this.setState({
                days: JSON.parse(value),
            });
        });

        //getting new data from server
        fetchData().then(data => {
            if (!data) return;
            let parsedData = filterDataIntoDays(data);
            this.setState({
                days: parsedData,
            });
            AsyncStorage.setItem('@Masontoday:data', JSON.stringify(parsedData));
        });
    }

    render() {
        return (
            <SafeAreaView style={styles.listView}>
                <DayList componentId={this.props.componentId} style={styles.listView} days={this.state.days} />
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

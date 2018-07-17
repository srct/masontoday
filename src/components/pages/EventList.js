import React from 'react';
import { SafeAreaView, Text, SectionList } from 'react-native';

import { Live25API } from 'masontoday/src/api';

export default class EventList extends React.Component {
    state = {
        events: [],
    };

    componentDidMount() {
        this.loadData();
    }

    async loadData() {
        try {
            let events = await Live25API.getData();
            this.setState({ events });
        } catch (err) {
            console.warn(err);
        }
    }

    render() {
        return (
            <SafeAreaView>
                {this.state.events != [] && (
                    <SectionList
                        sections={this.state.events}
                        renderItem={({ item, index, section }) => <Text key={index}>{JSON.stringify(item)}</Text>}
                        renderSectionHeader={({ section: { dayofmonth } }) => (
                            <Text style={{ fontSize: 40 }}>{dayofmonth}</Text>
                        )}
                        keyExtractor={(item, index) => item + index}
                    />
                )}
            </SafeAreaView>
        );
    }
}

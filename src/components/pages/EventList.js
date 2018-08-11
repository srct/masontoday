import React from 'react';
import { SafeAreaView, Text, SectionList } from 'react-native';

import { Live25API } from 'masontoday/src/api';
import { EventCard } from 'masontoday/src/components';

export default class EventList extends React.Component {
    state = {
        events: null,
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

    _renderEvent = ({ item, index }) => <EventCard key={index} item={item} />;

    _renderSectionHeader = ({ section: { dayofmonth } }) => <Text style={{ fontSize: 40 }}>{dayofmonth}</Text>;

    render() {
        return (
            <SafeAreaView>
                {!!this.state.events && (
                    <SectionList
                        sections={this.state.events}
                        renderItem={this._renderEvent}
                        renderSectionHeader={this._renderSectionHeader}
                        keyExtractor={(item, index) => item + index}
                    />
                )}
            </SafeAreaView>
        );
    }
}

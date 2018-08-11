import React from 'react';
import { SafeAreaView, Text, SectionList } from 'react-native';

import { Live25API } from 'masontoday/src/api';
import { EventCard } from 'masontoday/src/components';

export default class EventListPage extends React.Component {
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

    _renderEvent = ({ item, index }) => (
        <EventCard
            key={index}
            item={item}
            onPress={() => {
                this.props.navigation.navigate('EventDetails', {
                    event: item,
                });
            }}
        />
    );

    _renderSectionHeader = ({ section: { month, dayofmonth } }) => (
        <Text style={{ fontSize: 30, textAlign: 'center' }}>{`${month} ${dayofmonth}`}</Text>
    );

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

import React from 'react';
import { View, SafeAreaView, Text, SectionList, StyleSheet } from 'react-native';

import { Live25API } from 'masontoday/src/api';
import { DataManipulation } from 'masontoday/src/utils';
import { EventCard } from 'masontoday/src/components';

export default class EventListPage extends React.Component {
    state = {
        events: null,
    };

    componentDidMount() {
        this.loadData();
    }

    async loadData() {
        const { getStored25Live, setStored25Live, formatEvents } = DataManipulation;
        try {
            const storedData = formatEvents(await getStored25Live());
            if (storedData) this.setState({ events: storedData });

            let events = formatEvents(await Live25API.getEvents());
            if (events) this.setState({ events });

            await setStored25Live(events);
        } catch (err) {
            console.error(err);
        }
    }

    _renderEvent = ({ item, index }) => (
        <EventCard
            key={index}
            event={item}
            onPress={() => {
                this.props.navigation.navigate('EventDetails', {
                    event: item,
                });
            }}
        />
    );

    _renderSectionHeader = ({ section: { month, dayofmonth } }) => (
        <Text style={styles.sectionHeader}>{`${month} ${dayofmonth}`}</Text>
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
                        showsVerticalScrollIndicator={false}
                        ListFooterComponent={() => <View height={10} />}
                    />
                )}
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    sectionHeader: {
        fontSize: 30,
        textAlign: 'center',
        backgroundColor: '#e9e9ef',
    },
});

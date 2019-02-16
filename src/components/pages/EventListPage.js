import React from 'react';
import { View, Platform, Button, Text, SectionList, StyleSheet } from 'react-native';

import { Live25API } from 'masontoday/src/api';
import { DataManipulation, Colors } from 'masontoday/src/utils';
import { EventCard, PageTemplate } from 'masontoday/src/components';

export default class EventListPage extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Events',
            headerRight: (
                <View style={styles.buttonWrapper}>
                    <Button onPress={() => navigation.navigate('Settings')} title="Settings" color={Colors.green1} />
                </View>
            ),
        };
    };

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
            <PageTemplate style={styles.container}>
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
            </PageTemplate>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    sectionHeader: {
        fontSize: 30,
        textAlign: 'center',
        backgroundColor: 'white',
        color: '#444444',
    },
    buttonWrapper: {
        paddingRight: Platform.OS === 'ios' ? 0 : 10,
    },
});

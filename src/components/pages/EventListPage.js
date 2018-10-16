import React from 'react';
import { View, SafeAreaView, Text, SectionList, StyleSheet } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

import { Live25API } from 'masontoday/src/api';
import { DataManipulation, Colors } from 'masontoday/src/utils';
import { EventCard, PageTemplate } from 'masontoday/src/components';

export default class EventListPage extends React.Component {
    constructor(props) {
        super(props);
        this.sectionListRef = React.createRef();

        this.state = {
            events: null,
            dateInView: null,
        };
    }

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

    onCheckViewableItems = ({ viewableItems }) => {
        if (!viewableItems[0]) return;

        const dateInView = viewableItems[0].section.datetime;
        if (dateInView != this.state.dateInView) this.setState({ dateInView });
    };

    scrollToSection = (sectionIndex, itemIndex = 0) => {
        this.sectionListRef.current.scrollToLocation({
            sectionIndex,
            itemIndex,
            viewOffset: 30,
        });
    };

    render() {
        return (
            <PageTemplate style={styles.container}>
                {!!this.state.events && (
                    <React.Fragment>
                        <CalendarStrip
                            datesWhitelist={[
                                { start: this.state.events[0].datetime, end: this.state.events[4].datetime },
                            ]}
                            selectedDate={this.state.dateInView || this.state.events[0].datetime}
                            onDateSelected={datetime => {
                                let index = 0;
                                for (let i = 0; i < this.state.events.length; i++) {
                                    if (moment(this.state.events[i].datetime).isSame(datetime)) {
                                        index = i;
                                    }
                                }
                                this.scrollToSection(index);
                            }}
                            daySelectionAnimation={{ type: 'background', duration: 600, highlightColor: Colors.green1 }}
                        />

                        <SectionList
                            onViewableItemsChanged={data => this.onCheckViewableItems(data)}
                            viewabilityConfig={{ itemVisiblePercentThreshold: 100 }}
                            sections={this.state.events}
                            renderItem={this._renderEvent}
                            renderSectionHeader={this._renderSectionHeader}
                            keyExtractor={(item, index) => item + index}
                            showsVerticalScrollIndicator={false}
                            ListFooterComponent={() => <View height={10} />}
                            stickySectionHeadersEnabled={false}
                            ref={this.sectionListRef}
                            // getItemLayout={(data, index) => ({ length: 90, offset: 84 * index, index })}
                        />
                    </React.Fragment>
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
});

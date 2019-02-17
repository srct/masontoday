import React from 'react';
import { StyleSheet, View, Text, AsyncStorage, SectionList, TouchableOpacity } from 'react-native';

import { Colors } from 'masontoday/src/utils';

const data = [
    {
        title: 'Data Filtering',
        data: [
            { title: 'No Filtering', value: 0 }, //0
            { title: 'Basic Filtering', value: 1 }, //1
            { title: 'Medium Filtering (Recommended)', value: 2 }, //2
            { title: 'Strong Filtering', value: 3 }, //3
            { title: 'Only the best', value: 4 }, //4
        ],
    },
    {
        title: 'About',
        data: [{ title: 'Medium Filtering (Recommended)' }, { title: 'Strong Filtering' }],
    },
    {
        title: 'Licenses',
        data: [{ title: 'No Filtering' }, { title: 'Medium Filtering (Recommended)' }],
    },
];
export default class SettingsPage extends React.Component {
    static navigationOptions = {
        title: 'Settings',
    };
    state = {
        filter: 2,
    };

    async componentDidMount() {
        let filterOption = parseInt(await AsyncStorage.getItem('filter'));
        this.setState({
            filter: filterOption,
        });
    }

    render() {
        return (
            <View style={{ margin: 10, flex: 1 }}>
                <SectionList
                    renderItem={({ item, index, section }) => (
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({ filter: item.value });
                                AsyncStorage.setItem('filter', item.value.toString());
                            }}>
                            <View
                                style={{
                                    paddingVertical: 10,
                                    backgroundColor: item.value == this.state.filter ? '#e2e2e2' : 'white',
                                }}>
                                <Text style={{ paddingHorizontal: 10 }} key={index}>
                                    {item.title}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    stickySectionHeadersEnabled={false}
                    ItemSeparatorComponent={() => (
                        <View style={{ flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: 'black' }} />
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={{ fontWeight: 'bold', color: Colors.green1, textAlign: 'center', padding: 10 }}>
                            {title}
                        </Text>
                    )}
                    sections={data}
                    keyExtractor={(item, index) => item + index}
                />
            </View>
        );
    }
}

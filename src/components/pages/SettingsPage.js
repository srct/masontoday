import React from 'react';
import { StyleSheet, View, Text, SectionList } from 'react-native';

import { Colors } from 'masontoday/src/utils';

const data = [
    { title: 'Data Options', data: ['item1', 'item2'] },
    { title: 'About', data: ['item3', 'item4'] },
    { title: 'Licenses', data: ['item5', 'item6'] },
];
export default class SettingsPage extends React.Component {
    static navigationOptions = {
        title: 'Settings',
    };
    render() {
        return (
            <View style={{ margin: 10, flex: 1 }}>
                <SectionList
                    renderItem={({ item, index, section }) => (
                        <View style={{ paddingVertical: 10, backgroundColor: '#e2e2e2' }}>
                            <Text key={index}>{item}</Text>
                        </View>
                    )}
                    stickySectionHeadersEnabled={false}
                    ItemSeparatorComponent={() => (
                        <View style={{ flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: 'black' }} />
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={{ fontWeight: 'bold', color: Colors.green1, textAlign: 'center' }}>{title}</Text>
                    )}
                    sections={data}
                    keyExtractor={(item, index) => item + index}
                />
            </View>
        );
    }
}

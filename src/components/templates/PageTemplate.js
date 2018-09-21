import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';

export default class PageTemplate extends React.Component {
    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                {!!this.props.header && <View>{this.props.header}</View>}
                <SafeAreaView style={styles.container}>{this.props.children}</SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

import React from 'react';
import { View, StyleSheet } from 'react-native';

import { HeaderTemplate, Button } from 'masontoday/src/components';
import { Colors } from 'masontoday/src/utils';

export default class TopBar extends React.Component {
    render() {
        return (
            <HeaderTemplate
                title={'Details'}
                left={
                    <Button
                        style={styles.buttonStyle}
                        textStyle={styles.textStyle}
                        onPress={this.props.goBack}
                        text={'Cancel'}
                    />
                }
                right={<View width={65} />}
            />
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        color: Colors.green1,
        fontWeight: '500',
        fontSize: 15,
    },
    buttonStyle: {
        padding: 8,
    },
});

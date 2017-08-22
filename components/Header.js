import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>DateCountdown</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        height: 60,
        flexDirection: 'row',
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
    render() {
        console.log('header re-render');
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Santa's Countdown!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'aliceblue',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80
    },
    title: {
        fontSize: 45,
        color: 'red'
    }
});

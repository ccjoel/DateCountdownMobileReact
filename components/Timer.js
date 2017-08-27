import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function remainingFormatted() {
    const today = moment(),
          xmas = moment('2017-12-25', 'YYYY-MM-DD');
    /* xmas = moment('2017-08-27', 'YYYY-MM-DD');*/

    // get total seconds between the times
    let delta = Math.abs(+xmas - +today) / 1000;

    // calculate (and subtract) whole days
    const days = Math.floor(delta / 86400);
    delta -= days * 86400;

    // calculate (and subtract) whole hours
    const hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    // calculate (and subtract) whole minutes
    const minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    // what's left is seconds
    const seconds = Math.floor(delta % 60);

    /* return days;*/
    let result = '';
    if (days > 0) {
        result += days + ' days\n';
    }
    result += `${hours}:${minutes}:${seconds}`;
    return result;
}

export default class Timer extends React.Component {
    render() {
        return (
            <View style={styles.container}>
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
    }
});

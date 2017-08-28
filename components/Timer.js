import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment';

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
    constructor(props) {
        super(props);
        this.state = {
            remaining: remainingFormatted()
        };
    }

    componentWillMount() {
        console.log('componentWillMount. setting interval');

        this.interval = setInterval(() => {
            this.setState({remaining: remainingFormatted()});
        }, 1000);
    }

    componentWillUnmount() {
        console.log('unmounting, clearing interval...');
        clearInterval(this.interval);
    }

    render() {
        const { remaining } = this.state;

        console.log('timer re-render');

        return (
            <View style={styles.timer}>
                <Text style={styles.clockText}>
                    {remaining}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    timer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    clockText: {
        color: 'red',
        backgroundColor: 'rgba(127,255,0,0.5)',
        fontSize: 60,
        textAlign: 'center'
    }
});

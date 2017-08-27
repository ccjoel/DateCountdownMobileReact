import React from 'react';
import { StyleSheet, Text, View,
         Image, StatusBar, Platform, NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;
import Header from './components/Header';
import moment from 'moment';

function sysInfo() {
    console.log('platform info', Platform);
    console.log('status bar manager..' , StatusBarManager);
    console.log('status bar height' , StatusBarManager.HEIGHT);
}

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

export default class App extends React.Component {
    componentDidMount() {
        console.log('componentDidMount');
        
        /* setInterval(() => {
         *     this.setState()
         * }, 2000);*/
    }

    componentWillUnmount() {
       console.log('unmounting');
    }

    render() {
        console.log('render');

        const remaining = remainingFormatted();
        return (
            <View style={styles.container}>
                <StatusBar hidden />
                {/* <StatusBar translucent={true} backgroundColor={'transparent'} /> */}
                <Header />
                <Image style={styles.bg}
                       source={require('./images/santa.jpg')}>
                    <Text style={styles.platformText}></Text>
                    <View style={styles.timer}>
                        <Text style={styles.clockText}>{remaining}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Image source={require('./images/button2.png')}
                               style={styles.button}/>
                    </View>
                </Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        /* flexDirection: 'column',*/ // default
        /* backgroundColor: 'aliceblue',*/
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        /* borderColor: 'blue',*/
        /* borderWidth: 2*/
    },
    bg: {
        flex: 1,
        justifyContent: 'space-between',
        /* borderColor: 'red',*/
        /* borderWidth: 1,*/
        resizeMode: 'cover',
        width: '100%'
    },
    platformText: {
        height: 300
        /* backgroundColor: 'yellow'*/
    },
    timer: {
        /* backgroundColor: 'gray',*/
        flexDirection: 'row',
        justifyContent: 'center'
    },
    clockText: {
        color: 'red',
        backgroundColor: 'rgba(127,255,0,0.5)',
        fontSize: 60,
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        /* borderColor: 'red',*/
        /* borderWidth: 2,*/
        alignSelf: 'center',
        /* backgroundColor: 'aliceblue',*/
        justifyContent: 'center'
    },
    button: {
        /* alignSelf: 'baseline',*/
        /* backgroundColor: 'yellow',*/
        width: 150,
        height: 150
    }
});

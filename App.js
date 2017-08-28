import React from 'react';
import { StyleSheet, Text, View,
         Image, StatusBar, Platform, NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;
import Header from './components/Header';
import Timer from './components/Timer';

function sysInfo() {
    console.log('platform info', Platform);
    console.log('status bar manager..' , StatusBarManager);
    console.log('status bar height' , StatusBarManager.HEIGHT);
}

/* <StatusBar translucent={true} backgroundColor={'transparent'} />*/

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.toggleTimer = this.toggleTimer.bind(this);
        this.state = {
            timerEnabled: true
        };
    }

    toggleTimer() {
        console.log('toggled timer, pressed text...');
        this.setState({timerEnabled: !this.state.timerEnabled});
    }

    render() {
        console.log('App.js re-render.');

        const { timerEnabled } = this.state,
              toggleButtonLbl = timerEnabled ? 'OFF' : 'ON';

        return (
            <View style={styles.container}>
                <StatusBar hidden />

                <Header />

                <Image style={styles.bg}
                    source={require('./images/santa.jpg')}>

                    <Text style={styles.platformText}></Text>

                    <Timer enabled={timerEnabled}/>

                    <View style={styles.buttonContainer}>

                        <Image source={require('./images/button2.png')}
                            style={styles.button}>

                            <Text onpress={this.toggleTimer}
                                  style={styles.toggle}>{toggleButtonLbl}</Text>

                        </Image>

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
        alignItems: 'stretch',
        justifyContent: 'flex-start'
    },
    bg: {
        flex: 1,
        justifyContent: 'space-between',
        resizeMode: 'cover',
        width: '100%'
    },
    platformText: {
        height: 300
    },
    buttonContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    button: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center'
    },
    toggle:{
        color: 'yellow',
        fontSize: 50,
        fontWeight: 'bold'
    }
});

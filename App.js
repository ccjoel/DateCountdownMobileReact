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
    render() {
        console.log('render');

        return (
            <View style={styles.container}>
                <StatusBar hidden />

                <Header />

                <Image style={styles.bg}
                    source={require('./images/santa.jpg')}>

                    <Text style={styles.platformText}></Text>

                    <Timer />

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
        height: 150
    }
});

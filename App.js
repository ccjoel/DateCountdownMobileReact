import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from './components/Header';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
            <Image style={styles.logo}
                   source={require('./images/santa.jpg')} />
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Shake your phone to open the developer menu.</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'aliceblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flexGrow: 1
    },
    logo: {
        width: 50,
        height: 50
    }
});

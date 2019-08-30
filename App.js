/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Login from './src/components/Login/Login';
import Header from './src/components/Header/Header';
const App = () => {
  return (
    <View>
      <Header />
      <ImageBackground
        source={require('./assets/loginbg.jpg')}
        style={styles.backgrounds}>
        <Login />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgrounds: {
    width: '100%',
    height: '100%',
  },
});

export default App;

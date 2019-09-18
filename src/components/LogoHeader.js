import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

const LogoHeader = props => {
  return (
    <View>
      <Text style={styles.logo}>It Trolls</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  logo: {
    marginLeft: 10,
    fontFamily: 'Channel',
    color: 'black',
  },
});
export default LogoHeader;

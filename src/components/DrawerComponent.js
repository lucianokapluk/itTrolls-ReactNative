import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';

import {DrawerItems} from 'react-navigation';

import LogoHeader from './LogoHeader';
const DrawerC = props => {
  console.log(props.items[0].routes[0].routes[0].key);
  const items = props.items[0].routes[0].routes[0];

  return (
    <ScrollView>
      <SafeAreaView>
        <LogoHeader />

        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 26,
    resizeMode: 'contain',
    marginVertical: 20,
    marginLeft: 10,
  },
});

export default DrawerC;

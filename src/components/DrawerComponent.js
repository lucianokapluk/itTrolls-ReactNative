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

function DrawerC(props) {
  return (
    <ScrollView>
      <SafeAreaView>
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  );
}

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

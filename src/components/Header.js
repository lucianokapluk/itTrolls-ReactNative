import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {withNavigation} from 'react-navigation';
const Header = props => {
  return (
    <TouchableOpacity onPress={() => props.navigation.openDrawer('DrawerOpen')}>
      <Icon name="bars" size={35} color="black" style={styles.logo} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  logo: {
    marginRight: 10,
  },
  container: {
    padding: 1,
    flexDirection: 'row',
    height: 45,
  },
  right: {
    flex: 1,
    padding: 10,

    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
export default withNavigation(Header);

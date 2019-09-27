import React, {Component} from 'react';

import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  Button,
} from 'react-native';

import {DrawerItems} from 'react-navigation';

import LogoHeader from './LogoHeader';
import AvatarImage from './AvatarImage';
import {connect} from 'react-redux';
import reducers from '../../redux/reducers';

class DrawerC extends Component<props> {
  // console.log(props.items[0].routes[0].routes[0].key);
  //const items = props.items[0].routes[0].routes[0];

  handleLogout = () => {
    this.props.dispatch({
      type: 'SET_USER',
      payload: {token: {success: false}},
    });
    this.props.navigation.navigate('Loading');
  };
  render() {
    return (
      <ScrollView>
        <SafeAreaView>
          <View style={styles.container}>
            <Text style={styles.logo}>It Trolls</Text>
          </View>
          <View style={styles.container}>
            <AvatarImage style={styles.avatar} />
          </View>
          <Button title="Logout" onPress={() => this.handleLogout()} />
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#137F7E',
    justifyContent: 'center',
  },
  logo: {
    color: 'white',

    fontFamily: 'Channel',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
const mapStateToProps = reducers => {
  return reducers.loginReducer;
};
export default connect(mapStateToProps)(DrawerC);

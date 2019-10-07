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

class DrawerC extends Component<props> {
  // console.log(props.items[0].routes[0].routes[0].key);
  //const items = props.items[0].routes[0].routes[0];
  //EMULADOR http://172.26.122.1:3010
  //CELULAR http://http://192.168.0.108:3010
  componentDidMount = () => {
    const id = this.props.auth.id;
    const header = {'x-access-token': this.props.auth.token.value};
    fetch('http:///192.168.0.108:3010/users/' + id, {
      method: 'GET',
      headers: header,
    })
      .then(response => response.json())
      .catch(error => {
        return error;
      })
      .then(user => {
        console.log(user, 'ISACA');
        this.props.dispatch({
          type: 'SET_USER',
          payload: {user: user.email},
        });
      });
  };

  handleLogout = () => {
    this.props.dispatch({
      type: 'SET_USER',
      payload: {auth: {auth: false}},
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
          <View style={styles.container}>
            <Text>{this.props.user}</Text>
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

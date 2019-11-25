import React, {Component} from 'react';

import {
  Text,
  Button,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {FloatingAction} from 'react-native-floating-action';
import CardUsers from '../components/CardUsers';
const actions = [
  {
    text: 'Accessibility',
    name: 'bt_accessibility',
    position: 2,
  },
  {
    text: 'Language',

    name: 'bt_language',
    position: 1,
  },
  {
    text: 'Location',

    name: 'bt_room',
    position: 3,
  },
  {
    text: 'Video',

    name: 'bt_videocam',
    position: 4,
  },
];
class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: '',
      refreshing: false,
    };
  }

  handleCreateUser = () => {
    this.props.navigation.navigate('CreateUser');
  };
  handleRefresh = () => {
    this.setState({refreshing: true});
    console.log('refresh');
    this.handleGetUsers();
  };
  handleGetUsers = () => {
    const header = {'x-access-token': this.props.auth.token.value};
    fetch('http://192.168.0.103:3010/api/v1/users/', {
      method: 'GET',
      headers: header,
    })
      .then(response => response.json())
      .catch(error => {
        this.setState({refreshing: false});
        return error;
      })
      .then(users => {
        this.setState({users: users, refreshing: false});
        this.props.dispatch({
          type: 'GET_USER',
          payload: {users},
        });
      });
  };
  componentDidMount = () => {
    this.handleGetUsers();
  };
  render() {
    console.log(this.state.users);
    return (
      <View style={styles.content}>
        <FlatList
          data={this.props.users}
          renderItem={({item}) => <CardUsers users={item} />}
          keyExtractor={item => item.id}
          refreshing={this.state.refreshing}
          onRefresh={() => this.handleRefresh()}
        />
        <FloatingAction
          color={'#C85A52'}
          buttonSize={50}
          showBackground={false}
          onPressMain={() => this.handleCreateUser()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    position: 'relative',
    height: '100%',
  },
});
const mapStateToProps = reducers => {
  return reducers.loginReducer;
};
export default connect(mapStateToProps)(ProfileScreen);

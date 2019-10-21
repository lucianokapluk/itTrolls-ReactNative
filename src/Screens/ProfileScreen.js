import React, {Component} from 'react';

import {Text, Button, View} from 'react-native';
class ProfileScreen extends Component {
  handleCreateUser = () => {
    this.props.navigation.navigate('CreateUser');
  };
  render() {
    return (
      <View>
        <Text> USER SCREEEN</Text>
        <Button title="Create User" onPress={() => this.handleCreateUser()} />
      </View>
    );
  }
}
export default ProfileScreen;

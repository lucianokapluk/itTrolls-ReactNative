import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

class Error extends Component {
  render() {
    const success = this.props.auth;
    const error = this.props.error;
    console.log(error);
    console.log('ACa');
    if (!success) {
      return (
        <View>
          <Text style={styles.messageError}>{this.props.error}</Text>
        </View>
      );
    }
    return <Text />;
  }
}
const styles = StyleSheet.create({
  messageError: {
    textAlign: 'center',
    color: 'red',
  },
});
export default Error;

import React, {Component} from 'react';
import {
  Image,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
class LoginScreen extends Component {
  user = <Icon name="user" size={40} color="#64676B" style={styles.logo} />;
  pass = <Icon name="lock" size={40} color="#64676B" style={styles.logo} />;
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoLogin}>
          <TouchableOpacity>
            <Image source={require('../../../assets/logoLogin.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          {this.user}
          <TextInput
            placeholder={'User'}
            style={styles.inputs}
            //onChangeText={text => this.setState({text})}
            //value={this.state.text}
          />
        </View>
        <View style={styles.inputContainer}>
          {this.pass}
          <TextInput
            placeholder={'Password'}
            style={styles.inputs}
            secureTextEntry={true}
            //onChangeText={text => this.setState({text})}
            //value={this.state.text}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('Home')}
            title="Login"
            color="#98B5DB"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Register" color="#98B5DB" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '95%',
    width: '95%',
    marginTop: 40,
  },

  logoLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    opacity: 0.5,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 10,
  },
  inputs: {
    height: 40,
    width: '90%',
    marginLeft: 6,
    fontFamily: 'Ubuntu-Light',
    color: 'black',
    borderBottomWidth: 1,
    fontSize: 20,
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: 10,
    marginLeft: 30,
    width: '90%',
    borderRadius: 10,
  },
});
export default LoginScreen;

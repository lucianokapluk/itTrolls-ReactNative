/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import * as loginAction from '../../actions/loginAction';


import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

class Login extends Component {

    state = {
        email:'',
        password:'',
    };

  user = <Icon name="user" size={40} color="black" style={styles.logo} />;
  pass = <Icon name="lock" size={40} color="black" style={styles.logo} />;

  handleLogin = (success) => {


    const data = {
      email: this.state.user,
      password: this.state.password,
    };
    this.props.logearse(data);

    if (success == true) {
      this.props.navigation.navigate('App');

    } else {
      this.props.navigation.navigate('Login');
      console.log('ussss');
    }
    //this.props.navigation.navigate('Loading');
  };

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.logoLogin}>
          <Text style={styles.fontLogin}>It Trolls </Text>
        </View>
        <View style={styles.inputContainer}>
          {this.user}
          <TextInput
            placeholder={'User'}
            placeholderTextColor="#D1C4DF"
            style={styles.inputs}
            onChangeText={user => this.setState({user})}
            //onChangeText={text => this.setState({text})}
            //value={this.state.text}
          />
        </View>
        {console.log(this.props.token)}
        <View style={styles.inputContainer}>
          {this.pass}
          <TextInput
            placeholder={'Password'}
            placeholderTextColor="#D1C4DF"
            style={styles.inputs}
            onChangeText={password => this.setState({password})}
            //onChangeText={text => this.setState({text})}
            //value={this.state.text}
          />
        </View>

        <View>
          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.buttonContainer}
            onPress={() => this.handleLogin(this.props.success)}>
            <Text style={styles.textButton}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate('Register')}
           >
            <Text style={styles.textButton}>Register</Text>
          </TouchableOpacity>

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
    marginTop: 30,
  },
  backgrounds: {
    backgroundColor: 'white',
    position: 'absolute',
  },
  logoLogin: {
    flexDirection: 'row',
    justifyContent: 'center',

    marginBottom: 10,
  },
  fontLogin: {
    fontFamily: 'Channel',
    fontSize: 40,
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
  backgrounds: {
    width: '100%',
    height: '100%',
  },

  buttonContainer: {
    backgroundColor: '#A489BF',
    marginTop: 20,
    marginHorizontal: '35%',
    height: 40,
    width: 100,
    borderRadius: 50,
  },
  textButton: {
    textAlign: 'center',
    marginTop: 8,
    fontFamily: 'Ubuntu-Light',
    fontSize: 20,
    color: 'white',
  },
});
const mapStateToProps = (reducers)=>{
  return reducers.loginReducer;
};
export default connect(mapStateToProps,loginAction)(Login);

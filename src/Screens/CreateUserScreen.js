import React, {Component} from 'react';
import {
  Image,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Text,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
class CreateUserScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    };
  }

  user = <Icon name="user" size={40} color="white" style={styles.logo} />;
  pass = <Icon name="lock" size={40} color="white" style={styles.logo} />;

  handleRegister = () => {
    const datas = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      passwordConfirmation: this.state.passwordConfirmation,
    };
    fetch('http://192.168.0.103:3010/api/v1/auth/register', {
      method: 'post',
      body: JSON.stringify(datas),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
    console.log;
  };
  render() {
    return (
      <ScrollView keyboardShouldPersistTaps="never">
        <View style={styles.container}>
          <View style={styles.logoLogin}>
            <Text style={styles.fontLogin}>It Trolls</Text>
          </View>
          <View style={styles.inputContainer}>
            {this.user}
            <TextInput
              placeholder={'Username'}
              placeholderTextColor="#D1C4DF"
              style={styles.inputs}
              onChangeText={username => this.setState({username: username})}
              //value={this.state.text}
            />
          </View>
          <View style={styles.inputContainer}>
            {this.user}
            <TextInput
              placeholder={'email'}
              placeholderTextColor="#D1C4DF"
              style={styles.inputs}
              onChangeText={user => this.setState({email: user})}
              //value={this.state.text}
            />
          </View>
          <View style={styles.inputContainer}>
            {this.pass}
            <TextInput
              placeholder={'Password'}
              placeholderTextColor="#D1C4DF"
              style={styles.inputs}
              secureTextEntry={true}
              onChangeText={password => this.setState({password})}
              //value={this.state.text}
            />
          </View>
          <View style={styles.inputContainer}>
            {this.pass}
            <TextInput
              placeholder={'Repeat Password'}
              placeholderTextColor="#D1C4DF"
              style={styles.inputs}
              secureTextEntry={true}
              onChangeText={passwordConfirmation =>
                this.setState({passwordConfirmation})
              }
              //value={this.state.text}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.buttonContainer}
            onPress={() => this.handleRegister()}>
            <Text style={styles.textButton}>Create!</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    color: 'white',
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
    color: 'white',
    borderBottomWidth: 1,
    fontSize: 20,
    borderRadius: 10,
  },
  backgrounds: {
    width: '100%',
    height: '100%',
  },
  textButton: {
    textAlign: 'center',
    marginTop: 8,
    fontFamily: 'Ubuntu-Light',
    fontSize: 20,
    color: 'white',
  },
  buttonContainer: {
    backgroundColor: '#f44336',
    marginTop: 20,
    marginLeft: 30,
    height: 40,
    width: '90%',
    borderRadius: 50,
  },
});
export default CreateUserScreen;

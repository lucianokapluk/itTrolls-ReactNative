/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Dimensions,Alert,ActivityIndicator,
} from 'react-native';
//import * as loginAction from '../../redux/actions/loginAction';


import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import Loader from '../components/Loader';
import Error from './../components/Error';


class Login extends Component {
    state = {
        email:'',
        password:'',
        token:'',
        error:'',
        loading: false,
    };
  user = <Icon name="user" size={40} color="black" style={styles.logo} />;
  pass = <Icon name="lock" size={40} color="black" style={styles.logo} />;
  handleLogin = async () => {
    this.setState({loading:true});
    const data = {
      username: this.state.email,
      password: this.state.password,
    };
    //EMULADOR http://172.26.122.1:3010
  //CELULAR http://http://192.168.0.108:3010
    console.log(this.props);
    await  fetch('http://192.168.0.103:3010/api/v1/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => response.json())
      .catch(error => {
        this.setState({loading:false});
        return error;
      })
      .then(token => {
        console.log(token,'ISACA');
        this.setState({loading:false});

        this.setState({error :token.error});

        this.props.dispatch({
          type:'SET_USER',
          payload:{
            auth: token,

          },
        });
      });
      this.props.navigation.navigate('Loading');
  }
  render() {
    console.log(this.props);
    console.disableYellowBox = true;
    return (
      <View style={styles.container}>
        <View style={styles.logoLogin}>
          <Text style={styles.fontLogin}>It Trolls</Text>
        </View>
        <View style={styles.inputContainer}>
          {this.user}
          <TextInput
            placeholder={'User'}
            placeholderTextColor="#D1C4DF"
            style={styles.inputs}
            onChangeText={user => this.setState({email:user})}
            //onChangeText={text => this.setState({text})}

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

          />
        </View>
        <Error style={styles.messageError} success={this.state.success} error={this.state.error}/>
        <Loader loading={this.state.loading}/>
        <View style={styles.con}>
          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.buttonContainer}
            onPress={() => this.handleLogin()}>
            <Text style={styles.textButton}>Login</Text>
          </TouchableOpacity>


        </View>
      </View>
    );
  }
}
const {wit} = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '95%',
    width: '95%',
    marginTop: 30,
  },
  logoLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  fontLogin: {
    fontFamily: 'Channel',
    fontSize: 40,
    color:'white',
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
  cont:{
    flex:1,
    flexDirection:'row',

    justifyContent:'center',
    width:wit,
  },
  buttonContainer: {
    alignSelf:'center',
    backgroundColor: '#A489BF',
    marginTop: 20,
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
export default connect(mapStateToProps)(Login);

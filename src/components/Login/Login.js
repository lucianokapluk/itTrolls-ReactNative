import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  Button,
} from 'react-native';
const Login = () => {
  const onPressLogin = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.candado}>
        <Image source={require('../../../assets/candado.png')} />
      </View>
      <SafeAreaView>
        <Text style={styles.font}> Usuario </Text>
        <TextInput
          style={styles.inputs}
          //onChangeText={text => this.setState({text})}
          //value={this.state.text}
        />
        <Text style={styles.font}>Contraseña</Text>
        <TextInput
          style={styles.inputs}
          //onChangeText={text => this.setState({text})}
          //value={this.state.text}
        />
        <View style={styles.button}>
          <Button
            onPress={onPressLogin}
            title="Login"
            color="#c51162"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '95%',
    width: '95%',
    marginVertical: 80,
  },
  candado: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputs: {
    height: 40,
    width: '80%',
    marginLeft: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    opacity: 0.5,
    borderRadius: 10,
  },
  font: {
    marginLeft: 40,
    color: 'white',
    fontSize: 20,
  },
  button: {
    paddingVertical: 10,
    marginLeft: 40,
    width: '80%',
    borderRadius: 10,
  },
});
export default Login;

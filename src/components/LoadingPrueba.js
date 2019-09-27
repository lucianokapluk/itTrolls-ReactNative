import React, {Component} from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import loginAction from '../../redux/actions/loginAction';
class Loading extends Component {
  state = {
    timePassed: false,
  };
  render() {
    console.log(this.props);
    setTimeout(async () => {
      if (this.props.navigation.state.params.isLoged) {
        await this.props.navigation.navigate('App');
      } else {
        await this.props.navigation.navigate('Login', {logeado: false});
      }
    }, 2000);

    return (
      <View>
        <ActivityIndicator size="large" color="#48137F" />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = reducers => {
  console.log(reducers.loginReducer);
  return reducers.loginReducer;
};
//mapstate(reducers) y actions
export default connect(
  mapStateToProps,
  loginAction,
)(Loading);

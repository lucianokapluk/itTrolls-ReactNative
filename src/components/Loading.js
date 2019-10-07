import React, {Component} from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import loginAction from '../../redux/actions/loginAction';
class Loading extends Component {
  componentDidMount() {
    setTimeout(async () => {
      if (this.props.auth.auth) {
        await this.props.navigation.navigate('App');
      } else {
        await this.props.navigation.navigate('Login');
      }
    }, 10);
  }
  render() {
    console.log(this.props);
    console.disableYellowBox = true;
    return (
      <View style={{marginVertical: 200}}>
        <View style={styles.logoLogin}>
          <Text style={styles.fontLogin}>It Trolls</Text>
        </View>
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#48137F" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
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
});

const mapStateToProps = reducers => {
  return reducers.loginReducer;
};
//mapstate(reducers) y actions
export default connect(mapStateToProps)(Loading);

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import {connect} from 'react-redux';

const ancho = Dimensions.get('window').width;
const alto = Dimensions.get('window').height;
class Loading extends Component {
  static cardStyle = {
    backgroundColor: '#212121',
  };

  componentDidMount() {
    if (this.props.auth) {
      this.props.navigation.navigate('App');
    } else {
      this.props.navigation.navigate('Login');
    }
  }
  render() {
    console.log(this.props, 'NAZI');
    console.disableYellowBox = true;
    return (
      <View style={{backgroundColor: '#212121', width: ancho, height: alto}}>
        <View style={{marginVertical: 200}}>
          <View style={styles.logoLogin}>
            <Text style={styles.fontLogin}>It Trolls</Text>
          </View>
          <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#f44336" />
          </View>
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
    color: 'white',
  },
});

const mapStateToProps = reducers => {
  return reducers.loginReducer;
};
//mapstate(reducers) y actions
export default connect(mapStateToProps)(Loading);

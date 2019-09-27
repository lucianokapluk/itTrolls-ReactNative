import React, {Component} from 'react';
import {Text, ActivityIndicator, View} from 'react-native';

import {connect} from 'react-redux';
import withNavigation from 'react-navigation';

class Loader extends Component {
  render() {
    const isLoggedIn = this.props.loading;
    if (isLoggedIn) {
      return (
        <View>
          <ActivityIndicator size="large" color="#48137F" />
        </View>
      );
    }
    return <Text />;
  }
}
const mapStateToProps = reducers => {
  return reducers.loginReducer;
};
export default connect(null)(Loader);

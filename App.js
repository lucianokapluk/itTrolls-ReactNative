import React, {Component} from 'react';

import {Provider} from 'react-redux';
import store from './store/store';
import AppNavigator from './navigatorPrueba';
import {
  createDrawerNavigator,
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
} from 'react-navigation';
class App extends Component<props> {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
export default App;

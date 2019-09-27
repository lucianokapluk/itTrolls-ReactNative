import React, {Component} from 'react';

import {Provider} from 'react-redux';
import {store, persistor} from './redux/store/store';
import AppNavigator from './navigatorPrueba';
import {PersistGate} from 'redux-persist/integration/react';

import {Text} from 'react-native';
import Loader from './src/components/Loader';
class App extends Component<props> {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    );
  }
}
export default App;

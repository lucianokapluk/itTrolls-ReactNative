import React, {Component} from 'react';

import {Provider} from 'react-redux';
import store from './store/store';
import AppNavigator from './app-navigator';
class App extends Component<props> {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }
  componentDidMount() {
    fetch('http://172.26.122.1:3010/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email: 'tests@com ',
        password: '123456',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .catch(error => {
        console.log(error, 'ACAAAA');
      })
      .then(data => {
        this.setState({data: data.token.value});
      });
    store.dispatch({
      type: 'LOAGEARSE',
      payload: {
        data: this.state.data,
      },
    });
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

import React, {Component} from 'react';
import Dark from './DarkStlye';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
  Button,
} from 'react-native';
import {connect} from 'react-redux';
import CardHome from '../components/CardHome';

import LogoHeader from './../components/LogoHeader';
const {wit} = Dimensions.get('window').width;

class HomeScreen extends Component {
  componentDidMount = () => {
    const header = {'x-access-token': this.props.auth.token.value};
    fetch('http://172.26.122.1:3010/api/v1/properties/', {
      method: 'GET',
      headers: header,
    })
      .then(response => response.json())
      .catch(error => {
        return error;
      })
      .then(properties => {
        console.log(properties, 'ISACA');
        this.props.dispatch({
          type: 'SET_PROPERTIES',
          payload: {properties},
        });
      });
  };

  render() {
    console.log(this.props);
    console.log(this.props.navigation, 'REDOOOOOX');
    console.disableYellowBox = true;
    return (
      <ScrollView style={styles.scroll}>
        <FlatList
          style={styles.card}
          data={this.props.properties}
          renderItem={({item}) => <CardHome propertys={item} />}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  card: {
    /*     borderBottomColor: 'black',
    borderBottomWidth: 1,
    backgroundColor: '#E8E2EF',
    borderRadius: 5,

    marginHorizontal: 5,
    marginVertical: 5,
    width: wit, */
  },
});
const mapStateToProps = reducers => {
  return reducers.loginReducer;
};
export default connect(mapStateToProps)(HomeScreen);

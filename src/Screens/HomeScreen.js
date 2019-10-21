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
const DATA = [
  {
    bathrooms: 0,
    bedrooms: 0,
    _id: '5d4899c202bee94e0cba1ddf',
    address: 'caseros 69',
    location: 'rio cuarto',
    realState: 'Inmobiliaria Gutierres',
    operation: [],
    services: [],
    pictures: [],
    __v: 0,
  },
];

class HomeScreen extends Component {
  render() {
    console.log(this.props.navigation, 'REDOOOOOX');
    console.disableYellowBox = true;
    return (
      <ScrollView style={styles.scroll}>
        <FlatList
          style={styles.card}
          data={DATA}
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

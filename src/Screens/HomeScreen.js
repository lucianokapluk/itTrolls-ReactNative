import React, {Component} from 'react';

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
const {wit} = Dimensions.get('window').width;
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Vendo Casa!',
    bathrooms: 0,
    bedrooms: 0,
    pictures: [
      'https://picsum.photos/id/145/800/800',
      'https://picsum.photos/800/800',
      'https://picsum.photos/id/146/800/800',
    ],
    _id: '5d4899c202bee94e0cba1ddf',
    address: 'caseros 69',
    location: 'rio cuarto',
    realState: '5d4896a5f647362ab46923e6',
    operation: [],
    services: [],
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-13ad53abb28ba',
    title: 'CASA QUINTA!',
    bathrooms: 0,
    bedrooms: 0,
    pictures: [
      'https://picsum.photos/id/145/800/800',
      'https://picsum.photos/800/800',
      'https://picsum.photos/id/146/800/800',
    ],
    _id: '5d4899c202bee94e0cba1ddf',
    address: 'caseros 69',
    location: 'rio cuarto',
    realState: '5d4896a5f647362ab46923e6',
    operation: [],
    services: [],
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-h13ad53abb28ba',
    title: 'CASA QUINTA!',
    bathrooms: 0,
    bedrooms: 0,
    pictures: [
      'https://picsum.photos/id/145/800/800',
      'https://picsum.photos/800/800',
      'https://picsum.photos/id/146/800/800',
    ],
    _id: '5d4899c202bee94e0cba1ddf',
    address: 'caseros 69',
    location: 'rio cuarto',
    realState: '5d4896a5f647362ab46923e6',
    operation: [],
    services: [],
  },
];

class HomeScreen extends Component {
  render() {
    console.log(this.props, 'REDOOOOOX');
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

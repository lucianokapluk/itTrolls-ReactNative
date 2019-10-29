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
  Alert,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {connect} from 'react-redux';
import CardHome from '../components/CardHome';
import LogoHeader from './../components/LogoHeader';
const {wit} = Dimensions.get('window').width;
const handle = () => {
  console.log('anda');
};
const DATA = [
  {
    address: 'Constitucion 895',
    antiquity: 0,
    bathrooms: 0,
    bedrooms: 0,
    coveredArea: 0,
    description: '',
    garage: '',
    garden: false,
    location: 'Rio cuarto',
    neighborhood: '',
    operation: [],
    pictures: [],
    price: 0,
    provision: '',
    realState: '5d4896a5f647362ab46923e6',
    services: [],
    type: '',
    __v: 0,
    _id: '5d65ddfa0be009715cd6be44',
  },
  {
    address: 'Sobremonte 546',
    antiquity: 0,
    bathrooms: 0,
    bedrooms: 0,
    coveredArea: 0,
    description: '',
    garage: '',
    garden: false,
    location: 'Rio cuarto',
    neighborhood: '',
    operation: [],
    pictures: [],
    price: 0,
    provision: '',
    realState: '5d4896a5f647362ab46923e6',
    services: [],
    type: '',
    __v: 0,
    _id: '5d65ddfa0be009715cd6be44',
  },
  {
    address: 'echeverria 258',
    antiquity: 0,
    bathrooms: 0,
    bedrooms: 0,
    coveredArea: 0,
    description: '',
    garage: '',
    garden: false,
    location: 'Rio cuarto',
    neighborhood: '',
    operation: [],
    pictures: [],
    price: 0,
    provision: '',
    realState: '5d4896a5f647362ab46923e6',
    services: [],
    type: '',
    __v: 0,
    _id: '5d65ddfa0be009715cd6be44',
  },
  {
    address: 'moreno 656',
    antiquity: 0,
    bathrooms: 0,
    bedrooms: 0,
    coveredArea: 0,
    description: '',
    garage: '',
    garden: false,
    location: 'Rio cuarto',
    neighborhood: '',
    operation: [],
    pictures: [],
    price: 0,
    provision: '',
    realState: '5d4896a5f647362ab46923e6',
    services: [],
    type: '',
    __v: 0,
    _id: '5d65ddfa0be009715cd6be44',
  },
  {
    address: 'Mendoza 564',
    antiquity: 0,
    bathrooms: 0,
    bedrooms: 0,
    coveredArea: 0,
    description: '',
    garage: '',
    garden: false,
    location: 'Rio cuarto',
    neighborhood: '',
    operation: [],
    pictures: [],
    price: 0,
    provision: '',
    realState: '5d4896a5f647362ab46923e6',
    services: [],
    type: '',
    __v: 0,
    _id: '5d65ddfa0be009715cd6be44',
  },
  {
    address: 'alverar',
    antiquity: 0,
    bathrooms: 0,
    bedrooms: 0,
    coveredArea: 0,
    description: '',
    garage: '',
    garden: false,
    location: 'Rio cuarto',
    neighborhood: '',
    operation: [],
    pictures: [],
    price: 0,
    provision: '',
    realState: '5d4896a5f647362ab46923e6',
    services: [],
    type: '',
    __v: 0,
    _id: '5d65ddfa0be009715cd6be44',
  },
  {
    address: 'alverar',
    antiquity: 0,
    bathrooms: 0,
    bedrooms: 0,
    coveredArea: 0,
    description: '',
    garage: '',
    garden: false,
    location: 'Rio cuarto',
    neighborhood: '',
    operation: [],
    pictures: [],
    price: 0,
    provision: '',
    realState: '5d4896a5f647362ab46923e6',
    services: [],
    type: '',
    __v: 0,
    _id: '5d65ddfa0be009715cd6be44',
  },
  {
    address: 'alverar',
    antiquity: 0,
    bathrooms: 0,
    bedrooms: 0,
    coveredArea: 0,
    description: '',
    garage: '',
    garden: false,
    location: 'Rio cuarto',
    neighborhood: '',
    operation: [],
    pictures: [],
    price: 0,
    provision: '',
    realState: '5d4896a5f647362ab46923e6',
    services: [],
    type: '',
    __v: 0,
    _id: '5d65ddfa0be009715cd6be44',
  },
  {
    address: 'alverar',
    antiquity: 0,
    bathrooms: 0,
    bedrooms: 0,
    coveredArea: 0,
    description: '',
    garage: '',
    garden: false,
    location: 'Rio cuarto',
    neighborhood: '',
    operation: [],
    pictures: [],
    price: 0,
    provision: '',
    realState: '5d4896a5f647362ab46923e6',
    services: [],
    type: '',
    __v: 0,
    _id: '5d65ddfa0be009715cd6be44',
  },
  {
    address: 'alverar',
    antiquity: 0,
    bathrooms: 0,
    bedrooms: 0,
    coveredArea: 0,
    description: '',
    garage: '',
    garden: false,
    location: 'Rio cuarto',
    neighborhood: '',
    operation: [],
    pictures: [],
    price: 0,
    provision: '',
    realState: '5d4896a5f647362ab46923e6',
    services: [],
    type: '',
    __v: 0,
    _id: '5d65ddfa0be009715cd6be44',
  },
  {
    address: 'alverar',
    antiquity: 0,
    bathrooms: 0,
    bedrooms: 0,
    coveredArea: 0,
    description: '',
    garage: '',
    garden: false,
    location: 'Rio cuarto',
    neighborhood: '',
    operation: [],
    pictures: [],
    price: 0,
    provision: '',
    realState: '5d4896a5f647362ab46923e6',
    services: [],
    type: '',
    __v: 0,
    _id: '5d65ddfa0be009715cd6be44',
  },
  {
    address: 'alverar',
    antiquity: 0,
    bathrooms: 0,
    bedrooms: 0,
    coveredArea: 0,
    description: '',
    garage: '',
    garden: false,
    location: 'Rio cuarto',
    neighborhood: '',
    operation: [],
    pictures: [],
    price: 0,
    provision: '',
    realState: '5d4896a5f647362ab46923e6',
    services: [],
    type: '',
    __v: 0,
    _id: '5d65ddfa0be009715cd6be44',
  },
  {
    address: 'alverar',
    antiquity: 0,
    bathrooms: 0,
    bedrooms: 0,
    coveredArea: 0,
    description: '',
    garage: '',
    garden: false,
    location: 'Rio cuarto',
    neighborhood: '',
    operation: [],
    pictures: [],
    price: 0,
    provision: '',
    realState: '5d4896a5f647362ab46923e6',
    services: [],
    type: '',
    __v: 0,
    _id: '5d65ddfa0be009715cd6be44',
  },
];

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
      <View style={styles.cont}>
        <FlatList
          data={DATA}
          renderItem={({item}) => <CardHome propertys={item} />}
          keyExtractor={item => item.id}
        />

        <TouchableOpacity style={styles.addButton} onPress={() => handle()}>
          <Text style={styles.icon}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
    flexDirection: 'row-reverse',
  },
  icon: {
    fontSize: 50,
    color: 'white',
    alignSelf: 'center',
    marginTop: -13,
  },
  addButton: {
    zIndex: 1,
    position: 'absolute',
    borderRadius: 50,
    height: 45,
    width: 45,
    backgroundColor: '#C85A52',
    alignSelf: 'flex-end',
    opacity: 0.9,
    margin: 10,
  },
});
const mapStateToProps = reducers => {
  return reducers.loginReducer;
};
export default connect(mapStateToProps)(HomeScreen);

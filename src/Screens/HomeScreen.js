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
import {FloatingAction} from 'react-native-floating-action';
import {connect} from 'react-redux';
import CardHome from '../components/CardHome';
import LogoHeader from './../components/LogoHeader';
const {wit} = Dimensions.get('window').width;
const handle = () => {
  console.log('anda');
};
const actions = [
  {
    text: 'Accessibility',
    name: 'bt_accessibility',
    position: 2,
  },
  {
    text: 'Language',

    name: 'bt_language',
    position: 1,
  },
  {
    text: 'Location',

    name: 'bt_room',
    position: 3,
  },
  {
    text: 'Video',

    name: 'bt_videocam',
    position: 4,
  },
];
const DATA = [
  {
    address: 'Constitucion 895',
    antiquity: 6,
    bathrooms: 3,
    bedrooms: 4,
    coveredArea: 255,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    garage: 'si',
    garden: false,
    location: 'Rio cuarto',
    neighborhood: 'San Pablo',
    operation: [],
    pictures: [],
    price: 5000000,
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
      <View style={styles.content}>
        <FlatList
          data={DATA}
          renderItem={({item}) => <CardHome propertys={item} />}
          keyExtractor={item => item.id}
        />

        <FloatingAction
          showBackground={false}
          color={'#C85A52'}
          buttonSize={50}
          onPressItem={name => {
            console.log(`selected button: ${name}`);
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  content: {
    height: '100%',
  },
});
const mapStateToProps = reducers => {
  return reducers.loginReducer;
};
export default connect(mapStateToProps)(HomeScreen);

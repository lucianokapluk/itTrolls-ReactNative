import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Linking,
  Image,
  Platform,
} from 'react-native';

import openMap from 'react-native-open-maps';
const wit = Dimensions.get('window').width;
import {SliderBox} from 'react-native-image-slider-box';
import Icon from 'react-native-vector-icons/FontAwesome';
import Carrousel from './../../components/Carrusel';
const openMaps = direccion => {
  console.log('open directions');
  openMap({query: direccion});
};

class PostHome extends Component {
  //console.log(this.props.navigation.state.params.id);
  //console.log(propertys, 'REDOOOOOX');
  static navigationOptions = {
    title: 'Post ',
  };

  render() {
    const data = this.props.navigation.getParam('data');

    console.disableYellowBox = true;
    return (
      <ScrollView style={styles.scroll}>
        <Carrousel />

        <View style={styles.footer}>
          <Text style={[styles.textTitulos, {color: '#5DFC83'}]}>
            ${data.price}
          </Text>
          <TouchableOpacity
            onPress={() => openMaps(data.location + ',' + data.address)}>
            <Icon name="map-marker" size={15} color="white">
              <Text style={styles.textTitulos}>
                {' '}
                {data.location + ',' + data.address}
              </Text>
            </Icon>
          </TouchableOpacity>
        </View>
        <Text style={styles.textTitulos}>Descripcion: </Text>
        <View style={styles.line} />
        <Text style={styles.textTitulos}>
          <Text style={styles.textData}>{data.description}</Text>
        </Text>
        <View style={styles.line} />
        <Text style={styles.textTitulos}>
          Antiguedad: <Text style={styles.textData}>{data.antiquity}</Text>
        </Text>
        <Text style={styles.textTitulos}>
          Baños: <Text style={styles.textData}>{data.bathrooms}</Text>
        </Text>
        <Text style={styles.textTitulos}>
          Dormitorios: <Text style={styles.textData}>{data.bedrooms}</Text>{' '}
        </Text>
        <Text style={styles.textTitulos}>
          Area Cubierta: <Text style={styles.textData}>{data.coveredArea}</Text>
        </Text>
        <Text style={styles.textTitulos}>
          Servicios: <Text style={styles.textData}> {data.services}</Text>
        </Text>
        <Text style={styles.textTitulos}>
          Garage: <Text style={styles.textData}>{data.garage}</Text>
        </Text>
        <Text style={styles.textTitulos}>
          Patio: <Text style={styles.textData}>{data.garden}</Text>
        </Text>
        <Text style={styles.textTitulos}>
          Barrio: <Text style={styles.textData}>{data.neighborhood}</Text>
        </Text>
        <Text style={styles.textTitulos}>
          Precio: <Text style={styles.textData}>${data.price}</Text>
        </Text>
        <Text style={styles.textTitulos}>
          Provision: <Text style={styles.textData}>{data.provision}</Text>{' '}
        </Text>
        <Text style={styles.textTitulos}>
          Inmobiliaria: <Text style={styles.textData}>{data.realState}</Text>{' '}
        </Text>
        <Text style={styles.textTitulos}>{data.pictures}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    margin: 5,
  },
  line: {
    borderWidth: 0.5,
    borderColor: 'red',
  },
  textTitulos: {
    marginBottom: 5,
    fontSize: 18,
    //color: '#F88A81',
    color: 'white',

    fontFamily: 'Ubuntu-Light',
  },
  textData: {
    fontSize: 15,
    color: '#E1E2E3',
    fontFamily: 'Ubuntu-Light',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default PostHome;

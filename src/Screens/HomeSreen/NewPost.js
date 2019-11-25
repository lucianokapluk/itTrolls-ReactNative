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
  Button,
  TextInput,
  Platform,
} from 'react-native';

import openMap from 'react-native-open-maps';
const {wit} = Dimensions.get('window').width;
import {SliderBox} from 'react-native-image-slider-box';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
const openMaps = direccion => {
  console.log('open directions');
  openMap({query: direccion});
};

const createFormData = body => {
  const data = new FormData();

  Object.keys(body).forEach(key => {
    data.append(key, body[key]);
  });

  return data;
};

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      descripcion: '',
      antiguedad: '',
      baños: '',
      dormitorios: '',
      areacubierta: 0,
      servicios: '',
      garage: '',
      patio: '',
      barrio: '',
      precio: '',
      provision: '',
      inmobiliaria: '',
    };
  }
  handleSave = async () => {
    fetch('http://192.168.0.103:3010/api/v1/properties/', {
      method: 'POST',
      headers: {
        'x-access-token': this.props.auth.token.value,
        'Content-Type': 'multipart/form-data',
      },
      body: createFormData({
        title: this.state.title,
        antiquity: this.state.antiguedad,
        propertyImage: '',
        description: this.state.descripcion,
        provision: this.state.provision,
        garage: this.state.garage,
        location: 'Rio Cuarto',
        address: 'Constitución 3002',
        price: this.state.precio,
        coveredArea: this.state.areacubierta,
        neighborhood: this.state.barrio,
        bathrooms: this.state.dormitorios,
        bedrooms: this.state.baños,
        type: 'house',
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);

        alert(data);
      })
      .catch(error => {
        console.log(error);
        alert(error);
      });
  };

  render() {
    console.disableYellowBox = true;
    console.log(this.props.auth.id, '0new');
    console.log(this.state, 'asdasdasd0new');
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.footer}>
          <Text style={[styles.textTitulos, {color: '#5DFC83'}]} />
        </View>
        <Text style={styles.textTitulos}>Titulo: </Text>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          // Inherit any props passed to it; e.g., multiline, numberOfLines below

          onChangeText={text => this.setState({title: text})}
        />
        <Text style={styles.textTitulos}>Descripcion: </Text>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={text => this.setState({descripcion: text})}
        />

        <View style={styles.line} />
        <Text style={styles.textTitulos}>
          <Text style={styles.textData} />
        </Text>
        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.buttonContainer}
          onPress={() => PhotoPicker()}>
          <Text style={styles.textButton}>Take Photo!</Text>
        </TouchableOpacity>
        <View style={styles.line} />
        <Text style={styles.textTitulos}>
          Antiguedad: <Text style={styles.textData} />
        </Text>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          // Inherit any props passed to it; e.g., multiline, numberOfLines below

          onChangeText={text => this.setState({antiguedad: text})}
        />
        <Text style={styles.textTitulos}>
          Baños: <Text style={styles.textData} />
        </Text>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          // Inherit any props passed to it; e.g., multiline, numberOfLines below

          onChangeText={text => this.setState({baños: text})}
        />
        <Text style={styles.textTitulos}>
          Dormitorios: <Text style={styles.textData} />{' '}
        </Text>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          // Inherit any props passed to it; e.g., multiline, numberOfLines below

          onChangeText={text => this.setState({dormitorios: text})}
        />
        <Text style={styles.textTitulos}>
          Area Cubierta: <Text style={styles.textData} />
        </Text>
        <TextInput
          keyboardType={'numeric'}
          style={{height: 40}}
          placeholder="Type here to translate!"
          // Inherit any props passed to it; e.g., multiline, numberOfLines below

          onChangeText={text => this.setState({areaCubierta: text})}
        />
        <Text style={styles.textTitulos}>
          Servicios: <Text style={styles.textData} />
        </Text>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          // Inherit any props passed to it; e.g., multiline, numberOfLines below

          onChangeText={text => this.setState({servicios: text})}
        />
        <Text style={styles.textTitulos}>
          Garage: <Text style={styles.textData} />
        </Text>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          // Inherit any props passed to it; e.g., multiline, numberOfLines below

          onChangeText={text => this.setState({garage: text})}
        />
        <Text style={styles.textTitulos}>
          Patio: <Text style={styles.textData} />
        </Text>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          // Inherit any props passed to it; e.g., multiline, numberOfLines below

          onChangeText={text => this.setState({patio: text})}
        />
        <Text style={styles.textTitulos}>
          Barrio: <Text style={styles.textData} />
        </Text>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          // Inherit any props passed to it; e.g., multiline, numberOfLines below

          onChangeText={text => this.setState({barrio: text})}
        />
        <Text style={styles.textTitulos}>
          Precio: <Text style={styles.textData} />
        </Text>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          // Inherit any props passed to it; e.g., multiline, numberOfLines below

          onChangeText={text => this.setState({precio: text})}
        />
        <Text style={styles.textTitulos}>
          Provision: <Text style={styles.textData} />{' '}
        </Text>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={text => this.setState({provision: text})}
        />
        <Text style={styles.textTitulos}>
          Inmobiliaria: <Text style={styles.textData} />{' '}
        </Text>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          // Inherit any props passed to it; e.g., multiline, numberOfLines below

          onChangeText={text => this.setState({inmobiliaria: text})}
        />
        <Text style={styles.textTitulos} />
        <Button title={'guardar'} onPress={() => this.handleSave()} />
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

const mapStateToProps = reducers => {
  return reducers.loginReducer;
};
export default connect(mapStateToProps)(NewPost);

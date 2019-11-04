import React, {Component} from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native';

import {withNavigation} from 'react-navigation';
import Dark from './../Screens/DarkStlye';
import Icon from 'react-native-vector-icons/FontAwesome';
const {wit} = Dimensions.get('window').width;

class CardUsers extends Component {
  location = <Icon name="map-marker" size={15} color="white" />;
  handlePost = data => {
    this.props.navigation.navigate('PostHome', {data});
  };
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => this.handlePost(this.props.propertys)}>
        <View style={styles.card}>
          <Text style={styles.fontTitle}>
            {' '}
            <Icon name="user" size={30} color="white" style={styles.logo} />
            {'  '}
            {this.props.users.email}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(CardUsers);
const styles = StyleSheet.create({
  card: {
    height: 52,
    width: wit,
    flexDirection: 'row',
    marginTop: 0,
    backgroundColor: '#444444',
    borderColor: 'black',
    borderWidth: 0.5,
    marginBottom: 5,
  },

  left: {
    borderRadius: 10,
  },
  center: {width: 220},
  right: {
    flex: 1,
    justifyContent: 'center',
  },
  line: {},
  footer: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingLeft: 5,
  },
  image: {
    height: 50,
    width: 50,
  },
  fontPrice: {
    color: '#5DFC83',
    fontSize: 20,
    fontFamily: 'Ubuntu-Light',
  },
  fontTitle: {
    color: Dark.FontColor,
    fontSize: 20,
    paddingLeft: 5,
    paddingTop: 10,
    fontFamily: 'Ubuntu-Light',
  },
});

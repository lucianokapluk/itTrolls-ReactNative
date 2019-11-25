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

class CardHome extends Component {
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
          <View style={styles.left}>
            <Image
              style={styles.image}
              source={{uri: 'http://lorempixel.com/50/50/city/'}}
            />
          </View>
          <View style={styles.center}>
            <View style={styles.header}>
              <Text style={styles.fontTitle}>{this.props.propertys.title}</Text>
            </View>
            <View style={styles.footer}>
              {this.location}
              <Text style={styles.font}>
                {'  '}
                {this.props.propertys.location +
                  ', ' +
                  this.props.propertys.address}{' '}
              </Text>
            </View>
          </View>
          <View style={styles.right}>
            <Text style={styles.fontPrice}>${this.props.propertys.price} </Text>
          </View>
        </View>
        <View style={styles.line} />
      </TouchableOpacity>
    );
  }
}

export default withNavigation(CardHome);
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

  /*   header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    width: wit,
  },
  headerText: {
    marginTop: 15,
    marginHorizontal: 5,
    fontSize: 15,
    fontFamily: 'Ubuntu-Light',
  }, */

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
    fontFamily: 'Ubuntu-Light',
  },
});

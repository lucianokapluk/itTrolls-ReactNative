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
const {wit} = Dimensions.get('window').width;
class CardHome extends Component {
  handlePost = id => {
    this.props.navigation.navigate('PostHome', {id});
  };
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => this.handlePost(this.props.propertys.id)}>
        <View style={styles.card}>
          <View style={styles.left}>
            <Image
              style={styles.image}
              source={{uri: 'http://lorempixel.com/50/50/city/'}}
            />
          </View>
          <View style={styles.center}>
            <View style={styles.header}>
              <Text style={styles.fontTitle}>Titulo</Text>
            </View>
            <View style={styles.footer}>
              <Text style={styles.font}>
                {' '}
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
    backgroundColor: '#5C5C5C',
    borderColor: '#f44336',
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
    paddingTop: 5,
  },
  image: {
    height: 50,
    width: 50,
  },
  fontPrice: {
    color: Dark.FontColor,
    fontSize: 20,
    fontFamily: 'Ubuntu-Light',
  },
  fontTitle: {
    color: Dark.FontColor,
    fontSize: 20,
    fontFamily: 'Ubuntu-Light',
  },
});

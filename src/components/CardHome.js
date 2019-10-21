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
        <View style={styles.card} />
      </TouchableOpacity>
    );
  }
}

export default withNavigation(CardHome);
const styles = StyleSheet.create({
  card: {
    height: 330,
    width: wit,
    position: 'relative',

    padding: 0,
    marginTop: 0,
  },
  image: {
    resizeMode: 'contain',
  },
  header: {
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
  },
  line: {
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 0,
    margin: 0,
    height: 40,

    width: wit,
  },
});

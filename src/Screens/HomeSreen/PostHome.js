import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
const {wit} = Dimensions.get('window').width;
import {SliderBox} from 'react-native-image-slider-box';
class PostHome extends Component {
  //console.log(this.props.navigation.state.params.id);
  //console.log(propertys, 'REDOOOOOX');
  static navigationOptions = {
    title: 'Post ',
  };
  image = [
    'http://lorempixel.com/800/800/city/',
    'http://lorempixel.com/800/800/city/',
  ];
  render() {
    const data = this.props.navigation.getParam('data');
    console.disableYellowBox = true;
    return (
      <ScrollView style={styles.scroll}>
        <SliderBox images={this.image} sliderBoxHeight={400} />
        <Text>{data.address}</Text>
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

export default PostHome;

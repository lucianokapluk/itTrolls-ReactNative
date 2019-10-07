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

class PostHome extends Component<props> {
  render() {
    console.log(this.props.navigation.state.params.id);
    console.log(this.props, 'REDOOOOOX');
    console.disableYellowBox = true;
    return (
      <ScrollView style={styles.scroll}>
        <Text>post</Text>
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

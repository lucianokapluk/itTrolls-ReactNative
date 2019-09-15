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

class HomeScreen extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <ScrollView style={styles.scroll}>
        <View>
          <FlatList style={styles.card}>
            <Text>Cards</Text>
          </FlatList>
        </View>
        <View>
          <FlatList style={styles.card}>
            <Text>Cards</Text>
          </FlatList>
        </View>
        <View>
          <FlatList style={styles.card}>
            <Text>Cards</Text>
          </FlatList>
        </View>
        <View>
          <FlatList style={styles.card}>
            <Text>Cards</Text>
          </FlatList>
        </View>
        <View>
          <FlatList style={styles.card}>
            <Text>Cards</Text>
          </FlatList>
        </View>
        <View>
          <FlatList style={styles.card}>
            <Text>Cards</Text>
          </FlatList>
        </View>
        <View>
          <FlatList style={styles.card}>
            <Text>Cards</Text>
          </FlatList>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    flexDirection: 'column',
  },
  card: {
    backgroundColor: '#E8E2EF',
    borderRadius: 5,
    height: 101,
    marginHorizontal: 5,
    marginVertical: 5,
    width: wit,
  },
});
export default HomeScreen;

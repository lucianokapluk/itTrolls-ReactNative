import React, {Component} from 'react';

import {
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';

import {AvatarImageMessage} from './../components/AvatarImage';
const {wit} = Dimensions.get('window').width;
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
const Item = ({title}) => {
  return (
    <View style={styles.card}>
      <AvatarImageMessage />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
class MessagesScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.scroll}>
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    height: 65,
    marginHorizontal: 5,

    width: wit,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  title: {
    marginLeft: 5,
    marginTop: 20,
    fontSize: 17,
  },
});

export default MessagesScreen;

import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Header = props => {
  const myIcon = <Icon name="bars" size={40} color="white" style={styles.logo} />;

  return (
    <View>
      <SafeAreaView>
        <View style={styles.container}>
        
        {myIcon }

          <View style={styles.right}>
            <Text> Register </Text>
            {props.children}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginLeft:10,
  
  },
  container: {
    padding: 1,
    flexDirection: 'row',
    backgroundColor:'#97A7BD',
    height: 45,
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
export default Header;

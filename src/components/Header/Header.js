import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';

const Header = props => {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.container}>
          <Image
            source={require('../../../assets/icon.png')}
            style={styles.logo}
          />

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
    width: 70,
    height: 40,
    resizeMode: 'contain',
  },
  container: {
    padding: 1,
    flexDirection: 'row',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
export default Header;

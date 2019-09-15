import {ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
const BackgroundImg = () => {
  return (
    <ImageBackground
      source={require('../../assets/master.png')}
      style={styles.backgrounds}
    />
  );
};

const styles = StyleSheet.create({
  backgrounds: {
    width: '100%',
    height: '100%',
  },
});
export default BackgroundImg;

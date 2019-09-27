import {Image, StyleSheet} from 'react-native';
import React from 'react';
const AvatarImage = () => {
  return (
    <Image source={require('../../assets/person.png')} style={styles.avatar} />
  );
};

export const AvatarImageMessage = () => {
  return (
    <Image
      source={require('../../assets/person.png')}
      style={styles.avatarMsn}
    />
  );
};
const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  avatarMsn: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 2,
    marginVertical: 2,
    borderColor: '#64497F',
  },
});

export default AvatarImage;

import React, {Component} from 'react';

import {Image, View, Dimensions, ScrollView} from 'react-native';
const wit = Dimensions.get('window').width;
const Carrousel = () => {
  const image = [
    '../uploads/hola.jpg',
    '../uploads/hola.jpg',
    '../uploads/hola.jpg',
  ];

  return (
    <View style={{flex: 1}}>
      <ScrollView pagingEnabled horizontal>
        {image.map((foto, k) => {
          return (
            <Image
              key={k}
              style={{width: wit - 10, height: 300}}
              source={foto}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Carrousel;

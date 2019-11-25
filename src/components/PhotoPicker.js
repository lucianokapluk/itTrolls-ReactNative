import React, {Component} from 'react';
import ImagePicker from 'react-native-image-picker';

import {connect} from 'react-redux';
const options = {
  title: 'Select Avatar',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: '../uploads/',
  },
};

/**
 * The first arg is the options object for customization (it can also be null or omitted for default options),
 * The second arg is the callback which sends object: response (more info in the API Reference)
 */
const createFormData = (photo, body) => {
  const data = new FormData();

  data.append('pictures', {
    name: photo.fileName,
    type: photo.type,
    uri: photo.uri,
  });

  Object.keys(body).forEach(key => {
    data.append(key, body[key]);
  });

  return data;
};
const PhotoPicker = () => {
  const state = {
    avatarSource: '',
  };
  console.log('sdasssss');

  ImagePicker.showImagePicker(options, response => {
    console.log('Response = ', response);

    fetch('http://192.168.0.103:3010/api/v1/properties/', {
      method: 'POST',
      headers: {
        'x-access-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDMxZjUxOWZjMDM2MmNhMDg1ODZiMiIsImlhdCI6MTU3NDcxMjE2MiwiZXhwIjoxNTc0Nzk4NTYyfQ.JLJ8AWc3gO5PLbhSQ4dJRs86pvn0HVE-MAdPl1P-2Tw',

        'Content-Type': 'multipart/form-data',
      },
      body: createFormData(
        response,
        JSON.stringify({
          title: this.state.title,
          antiquity: this.state.antiguedad,
          propertyImage: '',
          description: this.state.descripcion,
          provision: this.state.provision,
          garage: this.state.garage,
          location: 'Rio Cuarto',
          address: 'Constitución 3002',
          price: this.state.precio,
          coveredArea: this.state.areacubierta,
          neighborhood: this.state.barrio,
          bathrooms: this.state.dormitorios,
          bedrooms: this.state.baños,
          garden: false,
          type: 'house',
          pictures: [],
          _id: this.props.auth.id,
          operation: [],
          services: [this.state.servicios],
          __v: 0,
        }),
      ),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });

    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      const source = {uri: response.uri};

      // You can also display the image using data:
      // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    }
  });
  console.log(state);
};

export default PhotoPicker;

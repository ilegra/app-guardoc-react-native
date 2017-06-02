import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ListItem from './common/ListItem';

export default class DocumentList extends Component {
  render() {
    let imageUrl = require('./img/camera.png');
    const document = {
        name: 'cpf',
        number: '123499999999999999',
        image: imageUrl
      };
    return (
      <View>
        <ListItem document={document} />
      </View>
    );
  }
}

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class DocumentList extends Component {
  render() {
    return (
      <View style={{ margin: 128 }}>
        <Text onPress={Actions.documentCreate}>Eu sou uma lista de documentos </Text>
      </View>
    );
  }
}

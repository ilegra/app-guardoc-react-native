import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CardSection, Input } from './common';
import ImageCamera from './common/ImageCamera';

export default class DocumentForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Nome do documento"
            placeholder="CPF"
          />
        </CardSection>
        <CardSection>
          <Input
            label="Número do documento"
            placeholder="123.456.789-00"
          />
        </CardSection>
        <CardSection>
          <ImageCamera />
        </CardSection>
      </View>
    );
  }
}

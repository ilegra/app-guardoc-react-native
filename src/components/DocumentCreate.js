import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Button } from './common';
import DocumentForm from './DocumentForm';

export default class DocumentCreate extends Component {
  render() {
    return (
      <Card>
        <DocumentForm />

        <CardSection>
          <Button>
            Salvar
          </Button>
        </CardSection>
      </Card>
    );
  }
}

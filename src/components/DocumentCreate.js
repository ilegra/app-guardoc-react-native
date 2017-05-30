import React, { Component } from 'react';
import { connect } from 'react-redux';
import { documentUpdate } from '../actions';
import { View, Text } from 'react-native';
import { Card, CardSection, Button } from './common';
import DocumentForm from './DocumentForm';

class DocumentCreate extends Component {

  render() {
    return (
      <Card>
        <DocumentForm {...this.props} />

        <CardSection>
          <Button>
            Salvar
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, number } = state.documentForm;

  return { name, number };
};


export default connect(mapStateToProps, {
  documentUpdate
})(DocumentCreate);

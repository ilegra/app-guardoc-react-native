import React, { Component } from 'react';
import { connect } from 'react-redux';
import { documentUpdate, documentClear, documentCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import DocumentForm from './DocumentForm';

class DocumentCreate extends Component {
  componentWillMount() {
    this.props.documentClear();
  }

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
  documentUpdate,
  documentCreate,
  documentClear
})(DocumentCreate);

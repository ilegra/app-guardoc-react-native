import React, { Component } from 'react';
import { connect } from 'react-redux';
import { documentUpdate, documentClear, documentCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import DocumentForm from './DocumentForm';

class DocumentCreate extends Component {
  componentWillMount() {
    this.props.documentClear();
  }

  onButtonPress() {
    const { name, number, image } = this.props;

    this.props.documentCreate({ name, number, image });
  }

  render() {
    return (
      <Card>
        <DocumentForm {...this.props} />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Salvar
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, number, image } = state.documentForm;

  return { name, number, image };
};


export default connect(mapStateToProps, {
  documentUpdate,
  documentCreate,
  documentClear
})(DocumentCreate);

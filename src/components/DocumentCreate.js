import React, { Component } from 'react';
import { connect } from 'react-redux';
import Expo from 'expo';
import { documentUpdate, documentClear, documentCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import DocumentForm from './DocumentForm';

class DocumentCreate extends Component {
  componentWillMount() {
    this.props.documentClear();
    this.initAnalytics();
  }

  onButtonPress() {
    const { name, number, image } = this.props;
    this.trackEventSave();
    this.props.documentCreate({ name, number, image });
  }

  initAnalytics() {
    Expo.Segment.track('Tela criar documento');
  }

  trackEventSave() {
    Expo.Segment.track('Action salvar documento');
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

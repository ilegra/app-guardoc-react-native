import _ from 'lodash';
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Expo from 'expo';
import { documentUpdate, documentClear, documentSave, documentDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';
import DocumentForm from './DocumentForm';

class DocumentCreate extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.document, (value, prop) => {
      this.props.documentUpdate({ prop, value });
    });
    this.initAnalytics();
  }

  onButtonPress() {
  const { name, number, image } = this.props;
  Expo.Segment.track('Action salvar alterações');
  this.props.documentSave({ name, number, image, uid: this.props.document.uid });
}

  onAccept() {
    const { uid } = this.props.document;
    this.props.documentDelete({ uid });
    this.setState({ showModal: false });
    Expo.Segment.track('Action sim excluir');
  }

  onDecline() {
    this.setState({ showModal: false });
    Expo.Segment.track('Action não excluir');
  }

  initAnalytics() {
    Expo.Segment.track('Tela Editar documento');
  }

  render() {
    return (
      <ScrollView>
        <Card style={{ flex: 1 }}>
          <DocumentForm />
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              SALVAR ALTERAÇÕES
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
              EXCLUIR
            </Button>
          </CardSection>
          <Confirm
            visible={this.state.showModal}
            onAccept={this.onAccept.bind(this)}
            onDecline={this.onDecline.bind(this)}
          >
            Deseja excluir o documento?
          </Confirm>

        </Card>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, number, image } = state.documentForm;

  return { name, number, image };
};


export default connect(mapStateToProps, {
  documentUpdate,
  documentSave,
  documentDelete,
  documentClear
})(DocumentCreate);

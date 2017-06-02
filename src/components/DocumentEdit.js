import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { documentUpdate, documentClear, documentSave, documentDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';
import DocumentForm from './DocumentForm';

class DocumentCreate extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.document, (value, prop) => {
      this.props.documentUpdate({ prop, value });
    });
  }

  onButtonPress() {
  const { name, number, image } = this.props;

  this.props.documentSave({ name, number, image, uid: this.props.document.uid });
}

  onAccept() {
    const { uid } = this.props.document;
    this.props.documentDelete({ uid });
    this.setState({ showModal: false });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <DocumentForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Salvar alterações
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Excluir
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

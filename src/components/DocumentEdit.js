import React, { Component } from 'react';
import { connect } from 'react-redux';
import { documentUpdate, documentClear, documentSave } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';
import DocumentForm from './DocumentForm';

class DocumentCreate extends Component {
  state = { showModal: false };

  componentWillMount() {
    this.props.documentClear();
  }

  onAccept() {
    //todo
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <DocumentForm />
        <CardSection>
          <Button>
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
  const { name, number } = state.documentForm;

  return { name, number };
};


export default connect(mapStateToProps, {
  documentUpdate,
  documentSave,
  documentClear
})(DocumentCreate);

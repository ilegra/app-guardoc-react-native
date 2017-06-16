import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { documentUpdate } from '../actions';
import { CardSection, Input } from './common';
import ImageCamera from './common/ImageCamera';

class DocumentForm extends Component {

  render() {
    return (
      <View>
        <CardSection style={{ padding: 10 }}>
          <Input
            placeholder="Nome do documento"
            value={this.props.name}
            onChangeText={value => this.props.documentUpdate({ prop: 'name', value })}
          />
        </CardSection>
        <CardSection style={{ padding: 10 }}>
          <Input
            placeholder="Número do documento"
            value={this.props.number}
            onChangeText={value => this.props.documentUpdate({ prop: 'number', value })}
          />
        </CardSection>
        <CardSection>
          <ImageCamera
            value={this.props.image}
            onPress={value => this.props.documentUpdate({ prop: 'image', value })}
          />
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, number, image } = state.documentForm;

  return { name, number, image };
};

export default connect(mapStateToProps, { documentUpdate })(DocumentForm);

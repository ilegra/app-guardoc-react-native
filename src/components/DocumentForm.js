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
        <CardSection>
          <Input
            placeholder="CPF"
            value={this.props.name}
            onChangeText={value => this.props.documentUpdate({ prop: 'name', value })}
          />
        </CardSection>
        <CardSection>
          <Input
            placeholder="123.456.789-00"
            value={this.props.number}
            onChangeText={value => this.props.documentUpdate({ prop: 'number', value })}
          />
        </CardSection>
        <CardSection>
          <ImageCamera />
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, number } = state.documentForm;

  return { name, number };
};

export default connect(mapStateToProps, { documentUpdate })(DocumentForm);

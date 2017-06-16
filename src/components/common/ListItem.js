import React, { Component } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import CardDocument from './CardDocument';

class ListItem extends Component {
  onRowPress() {
    Actions.documentEdit({ document: this.props.document });
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
            <CardDocument document={this.props.document} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default ListItem;

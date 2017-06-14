import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Expo from 'expo';
import { documentUpdate, documentClear, documentCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import DocumentForm from './DocumentForm';
import AdBanner from './common/AdBanner';

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
      <ScrollView>
        <Card>
          <DocumentForm {...this.props} />
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              SALVAR
            </Button>
          </CardSection>
        </Card>
        <AdBanner placementId="423524284700930_423531444700214" />
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
  documentCreate,
  documentClear
})(DocumentCreate);

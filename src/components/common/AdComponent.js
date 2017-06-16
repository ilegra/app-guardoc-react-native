import React from 'react';
import { View } from 'react-native';
import { FacebookAds } from 'expo';
import CardDocument from './CardDocument';

class AdComponent extends React.Component {
  document = {
    name: this.props.nativeAd.title,
    number: this.props.nativeAd.description,
    image: this.props.nativeAd.coverImage
  };
  render() {
    return (
      <View>
        <CardDocument document={this.document} />
      </View>
    );
  }
}

export default FacebookAds.withNativeAd(AdComponent);

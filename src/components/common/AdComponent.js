import React from 'react';
import { Text, View } from 'react-native';
import { FacebookAds } from 'expo';
import ListItem from './ListItem';

class AdComponent extends React.Component {
  document = {
    name: this.props.nativeAd.title,
    number: this.props.nativeAd.description,
    image: this.props.nativeAd.coverImage
  };
  render() {
    return (
      <View>
        <ListItem document={this.document} />
      </View>
    );
  }
}

export default FacebookAds.withNativeAd(AdComponent);
